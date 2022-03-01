import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { discoverContent } from "../actions";

export default function useDisplayItems(itemObject) {
  const [displayItems, setDisplayItems] = useState([]);
  const [displayType, setDisplayType] = useState("trending");
  const dispatch = useDispatch();

  useEffect(
    function getContentOnPageLoad() {
    if (itemObject.trending.length === 0) {
      dispatch(discoverContent());
    }
  }, [itemObject.trending.length]);

  useEffect(
    function setContentToState() {
    setDisplayItems(itemObject[displayType]);
  }, [displayType, itemObject]);

  const handleToggleItem = (e) => {
    setDisplayType(e.target.name);
    setDisplayItems(itemObject[e.target.name]);
  };

  return [displayItems, displayType, handleToggleItem];
}
