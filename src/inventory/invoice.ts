import { UserInfo, userInfo } from "./user";
import { nanoid } from "nanoid";
import { CartItem } from "./cart";

export interface Invoice {
  id: string;
  identifier: string | null;
  items: CartItem[];
  total: number;
  userInfo: UserInfo;
  date?: number;
}

class InvoiceStore {
  invoices: Invoice[] = [];
  constructor() {
    const saved = localStorage.getItem("invoices1");
    if (saved) {
      this.invoices = JSON.parse(saved).invoices;
    }
  }
  add(identifier: string | null, items: CartItem[], total: number): string {
    const id = nanoid(16);
    this.invoices.push({
      id,
      identifier,
      items,
      total,
      userInfo,
      date: new Date().getTime(),
    });
    this.saveChanges();
    return id;
  }
  remove(invoice: Invoice) {
    this.invoices = this.invoices.filter((inv) => inv !== invoice);
    this.saveChanges();
  }
  find(id: string) {
    return this.invoices.find((inv) => inv.id === id);
  }
  saveChanges() {
    localStorage.setItem("invoices1", JSON.stringify(this));
  }
}

export const invoices = new InvoiceStore();
