import type { SaleRepository } from "./SaleRepository";
import axios from "../../infra/api/axios";
import type { Sale } from "../entities/Sale";

export class SaleRepositoryImpl implements SaleRepository {
  async getAll() {
    const { data } = await axios.get("/sales");
    return data;
  }

  async create(sale: Sale) {
    const { data } = await axios.post("/sales", sale);
    return data;
  }

  async update(sale: Sale) {
    const { data } = await axios.put(`/sales/${sale.id}`, sale);
    return data;
  }

  async delete(id: number) {
    await axios.delete(`/sales/${id}`);
  }

  async getById(id: number) {
    const { data } = await axios.get(`/sales/${id}`);
    return data;
  }
}
