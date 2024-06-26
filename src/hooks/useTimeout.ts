import { useRef, useEffect, useCallback } from 'react';

const useTimeout = (callback: Function, delay: number) => {
  const timeoutId = useRef(0);

  const start = useCallback(() => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    timeoutId.current = setTimeout(callback, delay);
  }, [callback, delay]);

  const clear = useCallback(() => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
  }, []);

  useEffect(() => {
    return () => clear();
  }, [clear]);

  return { start, clear };
};

export default useTimeout;
