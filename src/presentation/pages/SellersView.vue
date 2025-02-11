<template>
  <div class="container mt-4">
    <h1 class="mb-4">Lista de Vendedores</h1>
    <SellerForm @created="fetchSellers" :sellerToEdit="sellerToEdit" />
    <SellerList :sellers="sellers" @edit="setSellerToEdit" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import SellerForm from "../components/sellers/SellerForm.vue";
import SellerList from "../components/sellers/SellerList.vue";
import { useSellersStore } from "../store/sellers";
import type { Seller } from "../../core/entities/Seller";

export default defineComponent({
  components: { SellerList, SellerForm },
  setup() {
    const sellersStore = useSellersStore();
    const { sellers, fetchSellers } = sellersStore;

    const sellerToEdit = ref<Seller | null>(null);

    const setSellerToEdit = (seller: Seller) => {
      sellerToEdit.value = seller;
    };

    fetchSellers();

    return { sellers, fetchSellers, sellerToEdit, setSellerToEdit };
  },
});
</script>
