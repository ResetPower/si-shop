import Tile from "../components/Tile";
import { cart } from "../inventory/cart";
import repo from "../inventory/repo";
import { useForceUpdate } from "../utils";

export default function CartPage() {
  const forceUpdate = useForceUpdate();

  return (
    <div>
      {cart.availableProducts.map((item, index) => (
        <Tile onUpdate={forceUpdate} amount={item.amount} key={index} prod={repo.find(item.id)!} />
      ))}
      {cart.availableProducts.length === 0 && (
        <div className="text-center p-3">购物车中还没有商品呢🤔。</div>
      )}
    </div>
  );
}
