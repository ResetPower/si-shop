import { Link } from "react-router-dom";
import { Product } from "../products";
import Button from "./Button";
import { MdClose } from "react-icons/md";
import Tag from "./Tag";
import { cart } from "../inventory/cart";
import Counter from "./Counter";

export default function Tile(props: {
  prod: Product;
  amount: number;
  onUpdate?: () => unknown;
}) {
  const prod = props.prod;

  const onRemove = () => {
    cart.remove(prod.id);
    props.onUpdate && props.onUpdate();
  };

  return (
    <div className="shadow rounded border flex m-3 p-3 space-y-3 items-center">
      <img className="w-32 h-32 rounded" src={prod.photo} />
      <div className="flex-grow text-center">
        <Link
          to={`/prod/${prod.id}`}
          className="font-medium hover:text-blue-500 transition-colors"
        >
          {prod.name}
        </Link>
        <div className="text-sm">&yen; {prod.price}</div>
        <Tag>{prod.tag}</Tag>
        <div className="flex justify-center"><Counter id={prod.id} /></div>
        <div className="text-sm text-gray-500">{prod.description}</div>
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
