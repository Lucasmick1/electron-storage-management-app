import React, { useEffect } from 'react';

const EVENT = 'mousedown';

export const useClickAway = (
  ref: React.RefObject<any>,
  callback: (event: MouseEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref || !ref.current || ref.current.contains(event.target)) {
        return;
      }

      callback(event);
    };

    document.addEventListener(EVENT, listener);

    return () => {
      document.removeEventListener(EVENT, listener);
    };
  }, [ref, callback]);
};

export default useClickAway;
