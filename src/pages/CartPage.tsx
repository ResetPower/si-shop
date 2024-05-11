import { useEffect, useState } from "react";
import Tile from "../components/Tile";
import { cart } from "../inventory/cart";
import repo from "../inventory/repo";
import { useForceUpdate } from "../utils";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { invoices } from "../inventory/invoice";

export default function CartPage() {
  const [total, setTotal] = useState(cart.calculateTotal());
  const navigate = useNavigate();
  const forceUpdate = useForceUpdate();
  const ap = cart.availableProducts;

  useEffect(() => cart.listen(() => setTotal(cart.calculateTotal())), []);

  const onPurchase = () => {
    const id = invoices.add(null, ap, total);
    navigate(`/purchase/${id}`);
  };

  return (
    <div>
      {ap.map((item, index) => (
        <Tile
          onUpdate={forceUpdate}
          amount={item.amount}
          key={index}
          prod={repo.find(item.id)!}
        />
      ))}
      {ap.length === 0 && (
        <div className="text-center p-3">购物车中还没有商品呢🤔。</div>
      )}
      <div className="text-sm p-3">
        <div>点击「下单」前请在「订单」页面中填写好下单信息。</div>
        <div>
          此行为会下单购物车内的全部商品，且下单完成后购物车不会自动清空。
        </div>
      </div>
      <div className="rounded p-3 m-3 space-x-3 text-lg border flex flex-wrap">
        <div>总价</div>
        <div>{total}</div>
        <div>&yen;</div>
        <div className="flex-grow"></div>
        <Button onClick={onPurchase}>下单</Button>
      </div>
    </div>
  );
}
