import { LegacyRef, forwardRef } from "react";
import { concat } from "../utils";

const Input = forwardRef(
  (
    props: {
      placeholder?: string;
      value?: string;
      onChange?: (newValue: string) => unknown;
      onEnter?: () => unknown;
    },
    ref: LegacyRef<HTMLInputElement>
  ) => {
    return (
      <input
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.onChange && props.onChange(e.target.value)}
        ref={ref}
        onKeyDown={props.onEnter && ((e) => {
          if (e.key === "Enter" && props.onEnter) props.onEnter();
        })}
        className={concat(
          "block w-full p-2.5",
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg",
          "focus:ring-blue-500 focus:border-blue-500"
        )}
      />
    );
  }
);

export default Input;
