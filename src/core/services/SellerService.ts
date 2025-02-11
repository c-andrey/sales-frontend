import type { Seller } from "../entities/Seller";
import { SellerRepositoryImpl } from "../repositories/SellerRepositoryImpl";

export class SellerService {
  private repository: SellerRepositoryImpl;

  constructor() {
    this.repository = new SellerRepositoryImpl();
  }

  async getSellers(): Promise<Seller[]> {
    return await this.repository.getAll();
  }

  async addSeller(seller: Seller): Promise<Seller> {
    return await this.repository.create(seller);
  }

  async updateSeller(seller: Seller): Promise<Seller> {
    return await this.repository.update(seller);
  }

  async deleteSeller(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  async getSellerById(id: number): Promise<Seller> {
    return await this.repository.getById(id);
  }
}
