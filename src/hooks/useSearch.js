import { useState, useEffect } from "react";
import { getQueryResults } from "../actions";

export default function useSearch(dispatch, initialValue) {
  const [queryType, setQueryType] = useState(initialValue || null);
  const [query, setQuery] = useState(null);

  const handleSelectQueryType = (e) => setQueryType(e.target.value);
  const handleQueryChange = (e) => setQuery(e.target.value);

  useEffect(() => {
    dispatch(
      getQueryResults(queryType, query)
      );
  }, [queryType, query]);

  return [queryType, query, handleSelectQueryType, handleQueryChange];
}
