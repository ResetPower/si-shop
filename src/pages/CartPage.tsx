import { useEffect, useState } from "react";
import Tile from "../components/Tile";
import { cart } from "../inventory/cart";
import repo from "../inventory/repo";
import { useForceUpdate } from "../utils";

export default function CartPage() {
  const [total, setTotal] = useState(cart.calculateTotal());
  const forceUpdate = useForceUpdate();

  useEffect(() => cart.listen(() => setTotal(cart.calculateTotal())), []);

  return (
    <div>
      {cart.availableProducts.map((item, index) => (
        <Tile
          onUpdate={forceUpdate}
          amount={item.amount}
          key={index}
          prod={repo.find(item.id)!}
        />
      ))}
      {cart.availableProducts.length === 0 && (
        <div className="text-center p-3">购物车中还没有商品呢🤔。</div>
      )}
      <div className="rounded p-6 space-x-3 text-lg font-medium border flex">
        <div>总价</div>
        <div>{total}</div>
        <div>&yen;</div>
      </div>
    </div>
  );
}
