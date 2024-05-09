import { MouseEventHandler } from "react";
import { Fragment } from "react/jsx-runtime";

export default function Highlight(props: {
  className?: string;
  keyword: string;
  children: string;
  onClick?: MouseEventHandler;
}) {
  const words = props.children.split(props.keyword);

  return (
    <div onClick={props.onClick} className={props.className}>
      {words.map((word, index) => (
        <Fragment key={index}>
          <span>{word}</span>
          {index !== words.length - 1 && (
            <span className="text-red-500">{props.keyword}</span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
