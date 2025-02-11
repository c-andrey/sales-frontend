import type { Sale } from "../entities/Sale";
import { SaleRepositoryImpl } from "../repositories/SaleRepositoryImpl";

export class SaleService {
  private repository: SaleRepositoryImpl;

  constructor() {
    this.repository = new SaleRepositoryImpl();
  }

  async getSales() {
    return await this.repository.getAll();
  }

  async addSale(sale: Sale) {
    return await this.repository.create(sale);
  }

  async updateSale(sale: Sale) {
    return await this.repository.update(sale);
  }

  async deleteSale(id: number) {
    await this.repository.delete(id);
  }

  async getSaleById(id: number) {
    return await this.repository.getById(id);
  }
}
