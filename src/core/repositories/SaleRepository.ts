import type { Sale } from "../entities/Sale";

export interface SaleRepository {
  getAll(): Promise<Sale[]>;
  create(sale: Sale): Promise<Sale>;
  update(sale: Sale): Promise<Sale>;
  delete(id: number): Promise<void>;
  getById(id: number): Promise<Sale>;
}
