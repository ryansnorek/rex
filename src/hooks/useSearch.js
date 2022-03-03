import { useState, useEffect } from "react";
import { getQueryResults } from "../actions";
import { useDispatch } from "react-redux";

export default function useSearch(initialValue) {
  const [queryType, setQueryType] = useState(initialValue || "");
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSelectQueryType = (e) => setQueryType(e.target.value);
  const handleQueryChange = (e) => setQuery(e.target.value.toLowerCase());

  useEffect(
    function setQueryResultsToState() {
      query && dispatch(getQueryResults(queryType, query));
    },
    [queryType, query, dispatch]
  );

  return [queryType, query, handleSelectQueryType, handleQueryChange];
}
