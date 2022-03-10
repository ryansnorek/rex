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
    if (query) {
      dispatch(getQueryResults(queryType, query));
    }
  },[queryType, query, dispatch]);

  return [queryType, query, handleSelectQueryType, handleQueryChange];
}
