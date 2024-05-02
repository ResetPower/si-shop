export type ProductTag = "normal" | "defective";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  tag: ProductTag;
  photo: string;
}
