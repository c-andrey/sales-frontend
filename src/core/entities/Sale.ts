import type { Seller } from "./Seller";

export class Sale {
  constructor(
    public id: number,
    public sellerId: number,
    public value: number,
    public saleDate?: Date,
    public comission?: number,
    public seller?: Seller
  ) {}
}
