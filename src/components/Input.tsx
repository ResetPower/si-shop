import { LegacyRef, forwardRef } from "react";
import { concat } from "../utils";

const Input = forwardRef(
  (
    props: {
      placeholder?: string;
      value?: string;
      initial?: string;
      onChange?: (newValue: string) => unknown;
    },
    ref: LegacyRef<HTMLInputElement>
  ) => {
    return (
      <input
        placeholder={props.placeholder}
        value={props.value}
        defaultValue={props.initial}
        onChange={(e) => props.onChange && props.onChange(e.target.value)}
        ref={ref}
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
