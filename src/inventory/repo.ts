import { Product } from "../products";
import prod0Jpg from "../assets/0.jpg";

class Repository {
  products: Product[] = [
    {
      id: 0,
      name: "水晶龙",
      description: "特别酷炫的水晶龙，拥有就可以带来好运。",
      price: 14,
      tag: "normal",
      photo: prod0Jpg,
    },
  ];
  find = (id: number) => {
    return this.products.find((prod) => prod.id === id);
  };
}

const repo = new Repository();

export default repo;
