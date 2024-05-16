import { Link } from "react-router-dom";
import { Product } from "../products";
import Button from "./Button";
import { MdClose } from "react-icons/md";
import Tag from "./Tag";
import { cart } from "../inventory/cart";
import Counter from "./Counter";

export default function Tile(props: {
  prod: Product;
  variant: string;
  amount: number;
  onUpdate?: () => unknown;
}) {
  const prod = props.prod;

  const onRemove = () => {
    cart.remove(prod.id);
    props.onUpdate && props.onUpdate();
  };

  return (
    <div className="shadow rounded border flex m-3 p-3 items-center">
      <img className="w-32 h-32 rounded" src={prod.photo} />
      <div className="flex-grow flex flex-wrap items-center p-3">
        <div className="flex-grow">
          <div className="flex flex-wrap space-x-3 items-center">
            <Link
              to={`/prod/${prod.id}`}
              className="font-medium hover:text-blue-500 transition-colors"
            >
              {prod.name} / {props.variant}
            </Link>
            <Tag>{prod.tag}</Tag>
          </div>
        </div>
        <div className="">
          <div className="text-sm">单价：&yen; {prod.price}</div>
          <div className="text-sm">总价：&yen; {props.amount * prod.price}</div>
          <Counter id={prod.id} variant={props.variant} />
        </div>
      </div>
      <div>
        <Button onClick={onRemove}>
          <MdClose />
          删除
        </Button>
      </div>
    </div>
  );
}
