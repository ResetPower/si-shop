import { MouseEventHandler, ReactNode } from "react";
import { concat } from "../utils";

export default function Button(props: {
  className?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler;
  shallow?: boolean;
}) {
  return (
    <button
      onClick={props.onClick}
      className={concat(
        props.className,
        "rounded flex items-center px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-colors",
        props.shallow
          ? "text-white bg-gray-500 hover:bg-gray-600 active:bg-gray-700"
          : "text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
      )}
    >
      {props.children}
    </button>
  );
}
