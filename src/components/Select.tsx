import { ReactNode } from "react";
import { concat } from "../utils";

export default function Select(props: {
  label: string;
  children: ReactNode;
  className?: string;
  value?: string;
  initial?: string;
  onChange: (newValue: string) => unknown;
}) {
  return (
    <select
      className={concat(
        props.className,
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
      )}
      defaultValue={props.initial}
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
    >
      {props.children}
    </select>
  );
}
