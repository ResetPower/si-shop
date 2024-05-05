import { useNavigate } from "react-router-dom";
import { Product } from "../products";
import Tag from "./Tag";
import Highlight from "./Highlight";

export default function Card(props: { prod: Product; keyword?: string }) {
  const navigate = useNavigate();
  const prod = props.prod;

  return (
    <div className="shadow rounded border m-3 p-3 space-y-3">
      <img className="rounded" src={prod.photo} />
      <div className="flex items-center">
        {props.keyword ? (
          <Highlight
            keyword={props.keyword}
            onClick={() => navigate(`/prod/${prod.id}`)}
            className="font-medium cursor-pointer hover:text-blue-500 transition-colors"
          >
            {prod.name}
          </Highlight>
        ) : (
          <div
            onClick={() => navigate(`/prod/${prod.id}`)}
            className="font-medium cursor-pointer hover:text-blue-500 transition-colors"
          >
            {prod.name}
          </div>
        )}
        <div className="flex-grow" />
        <div className="text-sm">&yen; {prod.price}</div>
      </div>
      <Tag>{prod.tag}</Tag>
      <div className="text-sm text-gray-500">{prod.description}</div>
    </div>
  );
}
