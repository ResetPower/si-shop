import repo from "./repo";

export interface CartItem {
  id: number;
  amount: number;
  isInCart: boolean;
}

class Cart {
  products: CartItem[] = []; // product id
  onChange?: () => unknown;
  constructor() {
    const saved = localStorage.getItem("cart");
    if (saved) {
      this.products = JSON.parse(saved).products;
    }
  }
  get availableProducts() {
    return this.products.filter((item) => item.isInCart);
  }
  find(id: number) {
    return this.products.find((item) => item.id === id);
  }
  add(id: number) {
    const item = this.find(id);
    if (item) {
      item.isInCart = true;
    } else {
      this.products.push({ id, amount: 1, isInCart: true });
    }
    this.saveChanges();
  }
  updateAmount(id: number, amount: number) {
    const item = this.find(id);
    if (item) {
      item.amount = amount;
    } else {
      this.products.push({ id, amount, isInCart: false });
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
    localStorage.setItem("cart", JSON.stringify(this));
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
