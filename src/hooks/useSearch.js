import { useState, useEffect } from "react";
import { getQueryResults } from "../actions";

export default function useSearch(dispatch, initialValue) {
  const [queryType, setQueryType] = useState(initialValue || null);
  const [query, setQuery] = useState(null);

  const handleSelectQueryType = (e) => setQueryType(e.target.value);
  const handleQueryChange = (e) => setQuery(e.target.value.toLowerCase());

  useEffect(
    function setQueryResultsToState() {
      dispatch(getQueryResults(queryType, query));
    },
    [dispatch, queryType, query]
  );

  return [queryType, query, handleSelectQueryType, handleQueryChange];
}
