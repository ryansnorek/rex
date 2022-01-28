import { useLayoutEffect, useState } from "react";

export default function useScrollSet() {
  const [scrollPosition, setScrollPosition] = useState(null);

  useLayoutEffect(
    function lockScrollPosition() {
    const doc = document.documentElement;
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    setScrollPosition(top);
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = originalStyle);
  }, []);

  return scrollPosition;
}
