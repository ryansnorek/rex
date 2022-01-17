import { useEffect, useState } from "react";
import { discoverContent } from "../actions";

export default function useDisplayItems(dispatch, itemObject) {
  const [displayItems, setDisplayItems] = useState([]);
  const [displayType, setDisplayType] = useState("trending");

  useEffect(() => {
    dispatch(discoverContent());
  }, []);

  useEffect(() => {
    setDisplayItems(itemObject[displayType]);
  }, [itemObject]);

  const handleToggleItem = (e) => {
    setDisplayType(e.target.name);
    setDisplayItems(itemObject[e.target.name]);
  };

  return [displayItems, displayType, handleToggleItem];
}
