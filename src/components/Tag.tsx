import { ProductTag } from "../products";

export default function Tag(props: { children: ProductTag }) {
  const isNormal = props.children === "normal";

  return (
    <div
      className={`text-xs inline-block font-medium text-white rounded ${isNormal ? "bg-green-500" : "bg-red-500"} py-0.5 px-1`}
    >
      {isNormal ? "正常品" : "残次品"}
    </div>
  );
}
