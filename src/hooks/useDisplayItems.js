import { useEffect, useState } from "react";
import { discoverContent } from "../actions";

export default function useDisplayItems(dispatch, itemObject) {
  const [displayItems, setDisplayItems] = useState([]);
  const [displayType, setDisplayType] = useState("trending");
  
  console.log("KEYSSSSS", Object.keys(itemObject))
  
  useEffect(() => {
    
    dispatch(discoverContent(displayType));
  }, [displayType]);

  const handleToggleItem = (e) => setDisplayType(e.target.name);

  useEffect(() => {
    setDisplayItems(itemObject[displayType]);
  }, [handleToggleItem]);

  return [displayItems, displayType, handleToggleItem];
}


