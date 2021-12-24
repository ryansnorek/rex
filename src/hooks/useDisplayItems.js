import { useEffect, useState } from "react";
import { discoverContent } from "../actions";

function useDisplayItems(dispatch, itemObject) {
  const [displayItems, setDisplayItems] = useState([]);
  const [displayType, setDisplayType] = useState("trending");

  const { movies, tvShows, trending } = itemObject;

  useEffect(() => {
    dispatch(
        discoverContent(displayType)
        );
  }, [displayType]);

  const handleToggleItem = (e) => setDisplayType(e.target.name);

  useEffect(() => {
    if (trending) {
      setDisplayItems(trending);
    } else if (movies) {
      setDisplayItems(movies);
    } else if (tvShows) {
      setDisplayItems(tvShows);
    }
  }, [handleToggleItem]);
  
  return [displayItems, displayType, handleToggleItem];
}

export default useDisplayItems;
