import { defineStore } from "pinia";
import type { Sale } from "../../core/entities/Sale";
import { SaleService } from "../../core/services/SaleService";

const saleService = new SaleService();

export const useSalesStore = defineStore("sales", {
  state: () => ({
    sales: [] as Sale[],
  }),
  actions: {
    async fetchSales() {
      this.sales = await saleService.getSales();
    },
    async addSale(sale: Sale) {
      this.sales.push(await saleService.addSale(sale));
    },
    async updateSale(sale: Sale) {
      const index = this.sales.findIndex((s) => s.id === sale.id);
      this.sales[index] = await saleService.updateSale(sale);
    },
    async deleteSale(id: number) {
      await saleService.deleteSale(id);
      this.sales = this.sales.filter((s) => s.id !== id);
    },
    async fetchSaleById(id: number) {
      return await saleService.getSaleById(id);
    },
  },
});
