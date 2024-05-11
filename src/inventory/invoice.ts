import { nanoid } from "nanoid";
import { CartItem } from "./cart";

export interface Invoice {
  id: string;
  payment: string;
  items: CartItem[];
  total: number;
}

class InvoiceStore {
  invoices: Invoice[] = [];
  add(payment: string, items: CartItem[], total: number) {
    this.invoices.push({ id: nanoid(16), payment, items, total });
  }
}

export const invoices = new InvoiceStore();
