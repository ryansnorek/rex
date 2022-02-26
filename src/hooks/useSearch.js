import { useState, useEffect } from "react";
import { getQueryResults } from "../actions";
import { useDispatch } from "react-redux";

export default function useSearch(initialValue) {
  const [queryType, setQueryType] = useState(initialValue || null);
  const [query, setQuery] = useState(null);
  const dispatch = useDispatch();

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
