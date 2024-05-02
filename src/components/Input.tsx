import { concat } from "../utils";

export default function Input(props: { placeholder?: string }) {
  return (
    <input
      placeholder={props.placeholder}
      className={concat(
        "block w-full p-2.5",
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg",
        "focus:ring-blue-500 focus:border-blue-500"
      )}
    />
  );
}
