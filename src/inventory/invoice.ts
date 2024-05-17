import { UserInfo, userInfo } from "./user";
import { nanoid } from "nanoid";
import { CartItem } from "./cart";

export interface Invoice {
  id: string;
  payment: string | null;
  items: CartItem[];
  total: number;
  userInfo: UserInfo;
}

class InvoiceStore {
  invoices: Invoice[] = [];
  constructor() {
    const saved = localStorage.getItem("invoices");
    if (saved) {
      this.invoices = JSON.parse(saved).invoices;
    }
  }
  add(payment: string | null, items: CartItem[], total: number): string {
    const id = nanoid(16);
    this.invoices.push({ id, payment, items, total, userInfo: userInfo });
    this.saveChanges();
    return id;
  }
  cancel(invoice: Invoice) {
    this.invoices = this.invoices.filter((inv) => inv !== invoice);
  }
  find(id: string) {
    return this.invoices.find((inv) => inv.id === id);
  }
  saveChanges() {
    localStorage.setItem("invoices", JSON.stringify(this));
  }
}

export const invoices = new InvoiceStore();
