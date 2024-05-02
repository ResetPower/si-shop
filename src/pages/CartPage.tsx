import Tile from "../components/Tile";
import { cart } from "../inventory/cart";
import repo from "../inventory/repo";
import { useForceUpdate } from "../utils";

export default function CartPage() {
  const forceUpdate = useForceUpdate();

  return (
    <div>
      {cart.products.map((prodId, index) => (
        <Tile onUpdate={forceUpdate} key={index} prod={repo.find(prodId)!} />
      ))}
      {cart.products.length === 0 && (
        <div className="text-center p-3">购物车中还没有商品呢🤔。</div>
      )}
    </div>
  );
}
