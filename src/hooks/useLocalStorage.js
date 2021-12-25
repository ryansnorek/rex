import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const handleKey = (key) => {
    const storedKey = localStorage.getItem(key);
    if (!storedKey) {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
    return JSON.parse(storedKey);
  };
  const [value, setValue] = useState(handleKey(key));

  const setStoredValue = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setValue(value);
  };

  return [value, setStoredValue];
}
