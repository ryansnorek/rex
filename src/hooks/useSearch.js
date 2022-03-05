import { useState, useEffect } from "react";
import { getQueryResults } from "../actions";
import { useDispatch } from "react-redux";
import useLocalStorage from "./useLocalStorage";

export default function useSearch(initialValue) {
  const [queryType, setQueryType] = useState(initialValue || "");
  const [query, setQuery] = useLocalStorage("query", "");
  const dispatch = useDispatch();

  const handleSelectQueryType = (e) => setQueryType(e.target.value);
  const handleQueryChange = (e) => setQuery(e.target.value.toLowerCase());

  useEffect(() => {
    const lastQuery = localStorage.getItem("query");
    if (query && query !== lastQuery) {
      dispatch(getQueryResults(queryType, query));
    }
  },[query, dispatch, queryType]);

  return [queryType, query, handleSelectQueryType, handleQueryChange];
}
