import { useReducer } from "react";

export function concat(...elements: (string | undefined | false)[]) {
  return elements.join(" ");
}

export function useForceUpdate() {
  return useReducer((x) => x + 1, 0)[1];
}
