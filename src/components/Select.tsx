import { ReactNode } from "react";
import { concat } from "../utils";

export default function Select(props: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <select
      className={concat(
        props.className,
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
      )}
    >
      {props.children}
    </select>
  );
}
