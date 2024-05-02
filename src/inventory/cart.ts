class Cart {
  products: number[] = []; // product id
  has(prod: number) {
    return this.products.indexOf(prod) !== -1;
  }
  add(prod: number) {
    if (!this.has(prod)) {
      this.products.push(prod);
    }
  }
  remove(prod: number) {
    this.products = this.products.filter((id) => id !== prod);
  }
}

export const cart = new Cart();
