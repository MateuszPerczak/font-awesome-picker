import { useCallback, useEffect, useRef, useState } from "react";

import type { Icons } from "../assets/icons/icons.types";

type UseLoader = {
  lastElementRef: (node: HTMLSpanElement) => void;
  loadedElements: Icons;
};

export const useLoader = (elements: Icons): UseLoader => {
  const [loadedLimit, setLoadedLimit] = useState<number>(250);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const observer = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useCallback(
    (node: HTMLSpanElement) => {
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setLoadedLimit((prevLimit) => prevLimit + 250);
          setHasMore(elements.length > loadedLimit);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [hasMore],
  );

  useEffect(() => {
    setLoadedLimit(250);
  }, [elements.length]);

  const loadedElements: Icons = elements.slice(0, loadedLimit);

  return { lastElementRef, loadedElements };
};
