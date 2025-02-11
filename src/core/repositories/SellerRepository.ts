import type { Seller } from "../entities/Seller";

export interface SellerRepository {
  getAll(): Promise<Seller[]>;
  create(seller: Seller): Promise<Seller>;
  update(seller: Seller): Promise<Seller>;
  delete(id: number): Promise<void>;
  getById(id: number): Promise<Seller>;
}
