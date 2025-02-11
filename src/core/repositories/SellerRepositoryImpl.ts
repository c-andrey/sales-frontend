import type { Seller } from "../entities/Seller";
import type { SellerRepository } from "./SellerRepository";
import axios from "../../infra/api/axios";

export class SellerRepositoryImpl implements SellerRepository {
  async getAll(): Promise<Seller[]> {
    const response = await axios.get<Seller[]>("/sellers");
    return response.data;
  }

  async create(seller: Seller): Promise<Seller> {
    const response = await axios.post("/sellers", seller);
    return response.data;
  }

  async update(seller: Seller): Promise<Seller> {
    const response = await axios.put(`/sellers/${seller.id}`, seller);
    return response.data;
  }

  async delete(id: number): Promise<void> {
    await axios.delete(`/sellers/${id}`);
  }

  async getById(id: number): Promise<Seller> {
    const response = await axios.get<Seller>(`/sellers/${id}`);
    return response.data;
  }
}
