import React from 'react';

export type MapState<T> = {
  get: () => T;
  set: (newState: T) => void;
};

export function useMapState<T>(initialState: T) {
  const [state, setState] = React.useState<T>(initialState);
  return {
    get: () => state,
    set(newState: T) {
      setState(newState);
    },
  };
}
