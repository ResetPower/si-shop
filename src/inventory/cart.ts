import repo from "./repo";

export interface CartItem {
  id: number;
  amount: number;
  variant: string;
  isInCart: boolean;
}

class Cart {
  products: CartItem[] = []; // product id
  onChange?: () => unknown;
  constructor() {
    const saved = localStorage.getItem("cart1");
    if (saved) {
      this.products = JSON.parse(saved).products;
    }
  }
  get availableProducts() {
    return this.products.filter((item) => item.isInCart);
  }
  find(id: number, variant: string) {
    return this.products.find(
      (item) => item.id === id && item.variant === variant
    );
  }
  findInCart(id: number, variant: string) {
    return this.availableProducts.find(
      (item) => item.id === id && item.variant === variant
    );
  }
  add(id: number, variant: string) {
    const item = this.find(id, variant);
    if (item) {
      item.isInCart = true;
    } else {
      this.products.push({ id, amount: 1, isInCart: true, variant });
    }
    this.saveChanges();
  }
  updateAmount(id: number, amount: number, variant: string) {
    const item = this.find(id, variant);
    if (item) {
      item.amount = amount;
    } else {
      this.products.push({ id, amount, isInCart: false, variant });
    }
    this.saveChanges();
  }
  remove(id: number) {
    this.products = this.products.filter((item) => item.id !== id);
    this.saveChanges();
  }
  listen(onChange: () => unknown) {
    this.onChange = onChange;
  }
  saveChanges() {
    localStorage.setItem("cart1", JSON.stringify(this));
    this.onChange && this.onChange();
  }
  calculateTotal() {
    let sum = 0;
    for (const item of this.availableProducts) {
      const prod = repo.find(item.id);
      if (prod) sum += prod.price * item.amount;
    }
    return sum;
  }
}

export const cart = new Cart();
