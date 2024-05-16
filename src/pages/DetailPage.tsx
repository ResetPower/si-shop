import { useParams } from "react-router-dom";
import repo from "../inventory/repo";
import Button from "../components/Button";
import { MdAdd, MdCheck } from "react-icons/md";
import { cart } from "../inventory/cart";
import NotFoundPng from "../assets/NotFound.png";
import Tag from "../components/Tag";
import { concat, useForceUpdate } from "../utils";
import Counter from "../components/Counter";
import { useState } from "react";

export default function DetailPage() {
  const params = useParams();
  const prod = repo.find(parseInt(params.id ?? "-1"));
  const forceUpdate = useForceUpdate();
  const [variant, setVariant] = useState(
    prod?.variants ? prod?.variants[0] : String()
  );

  return prod ? (
    <div className="flex p-3 space-x-3">
      <img className="w-32 h-32 md:w-64 md:h-64 rounded" src={prod.photo} />
      <div className="p-3 space-y-3">
        <div className="flex items-center space-x-3">
          <div className="font-medium text-lg">{prod.name}</div>
          <Tag>{prod.tag}</Tag>
        </div>
        <div className="text-sm">ID #{prod.id}</div>
        {variant && <div className="font-medium">已选：{variant}</div>}
        <div className="text-gray-500">{prod.description}</div>
        {prod.variants && (
          <div className="flex flex-wrap space-x-3">
            {prod.variants.map((value, index) => (
              <button
                onClick={() => {
                  setVariant(value);
                }}
                className={concat(
                  "rounded border px-3 py-1",
                  variant === value && "bg-blue-200"
                )}
                key={index}
              >
                {value}
              </button>
            ))}
          </div>
        )}
        <div className="flex flex-wrap">
          {cart.findInCart(prod.id, variant) && (
            <div className="text-sm flex text-green-500 items-center">
              <MdCheck />
              已加入购物车。
            </div>
          )}
          <div className="flex-grow" />
          <Counter id={prod.id} variant={variant} />
          <Button
            onClick={() => {
              cart.add(prod.id, variant);
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
