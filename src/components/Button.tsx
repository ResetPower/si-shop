import { MouseEventHandler, ReactNode } from "react";
import { concat } from "../utils";

export default function Button(props: {
  className?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler;
}) {
  return (
    <button
      onClick={props.onClick}
      className={concat(
        props.className,
        "rounded flex items-center px-3 py-1.5 text-sm font-medium whitespace-nowrap",
        "text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 transition-colors"
      )}
    >
      {props.children}
    </button>
  );
}
