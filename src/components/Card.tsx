import { useNavigate } from "react-router-dom";
import { Product } from "../products";
import Tag from "./Tag";
import Highlight from "./Highlight";

export default function Card(props: { prod: Product; keyword?: string }) {
  const navigate = useNavigate();
  const prod = props.prod;

  return (
    <div
      onClick={() => navigate(`/prod/${prod.id}`)}
      className="hover:shadow-xl rounded border m-3 p-3 space-y-3 cursor-pointer"
    >
      <img className="rounded" src={prod.photo} />
      <div className="flex items-center flex-wrap">
        {props.keyword ? (
          <Highlight keyword={props.keyword} className="font-mediumr">
            {prod.name}
          </Highlight>
        ) : (
          <div className="font-medium">{prod.name}</div>
        )}
        <div className="flex-grow" />
        <div className="text-sm">&yen; {prod.price}</div>
      </div>
      <Tag>{prod.tag}</Tag>
      <div className="text-sm text-gray-500">{prod.description}</div>
    </div>
  );
}
