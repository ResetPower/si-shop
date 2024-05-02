import { useParams } from "react-router-dom";
import repo from "../inventory/repo";
import Button from "../components/Button";
import { MdAdd, MdCheck } from "react-icons/md";
import { cart } from "../inventory/cart";
import NotFoundPng from "../assets/NotFound.png";
import Tag from "../components/Tag";
import { useForceUpdate } from "../utils";

export default function DetailPage() {
  const params = useParams();
  const prod = repo.find(parseInt(params.id ?? "-1"));
  const forceUpdate = useForceUpdate();

  return prod ? (
    <div className="flex p-3 space-x-3">
      <img className="w-32 h-32 md:w-64 md:h-64 rounded" src={prod.photo} />
      <div className="p-3 space-y-3">
        <div className="flex items-center space-x-3">
          <div className="font-medium text-lg">{prod.name}</div>
          <Tag>{prod.tag}</Tag>
        </div>
        <div className="text-sm">ID #{prod.id}</div>
        <div className="text-gray-500">{prod.description}</div>
        <div className="flex flex-wrap">
          {cart.has(prod.id) && (
            <div className="text-sm flex text-green-500 items-center">
              <MdCheck />
              已加入购物车。
            </div>
          )}
          <div className="flex-grow" />
          <Button
            onClick={() => {
              cart.add(prod.id);
              forceUpdate();
            }}
            className="m-1"
          >
            <MdAdd />
            加入购物车
          </Button>
        </div>
      </div>
    </div>
  ) : (
    <div className="p-3">
      <div className="text-lg text-center font-medium">
        该产品或许不存在吧😭。
      </div>
      <img src={NotFoundPng} />
    </div>
  );
}
