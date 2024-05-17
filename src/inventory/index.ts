import { CartItem } from "./cart";
import repo from "./repo";

export function calculateContent(items: CartItem[]) {
  return items.map((item) => `${repo.find(item.id)?.name}×${item.amount}`);
}
