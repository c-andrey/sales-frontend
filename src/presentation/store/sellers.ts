import { defineStore } from "pinia";
import type { Seller } from "../../core/entities/Seller";
import { SellerService } from "../../core/services/SellerService";

const sellerService = new SellerService();

export const useSellersStore = defineStore("sellers", {
  state: () => ({
    sellers: [] as Seller[],
  }),
  actions: {
    async fetchSellers() {
      this.sellers = await sellerService.getSellers();
    },
    async addSeller(seller: Seller) {
      this.sellers.push(await sellerService.addSeller(seller));
    },
    async updateSeller(seller: Seller) {
      const index = this.sellers.findIndex((s) => s.id === seller.id);
      this.sellers[index] = await sellerService.updateSeller(seller);
    },
    async deleteSeller(id: number) {
      await sellerService.deleteSeller(id);
      this.sellers = this.sellers.filter((s) => s.id !== id);
    },
    async fetchSellerById(id: number) {
      return await sellerService.getSellerById(id);
    },
  },
});
