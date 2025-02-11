<template>
  <div class="container mt-4">
    <h1 class="mb-4">Lista de Vendas</h1>
    <SaleForm @created="fetchSales" :saleToEdit="saleToEdit" />
    <SalesList :sales="sales" @edit="setSaleToEdit" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import SaleForm from "../components/sales/SaleForm.vue";
import SaleList from "../components/sales/SaleList.vue";
import { useSalesStore } from "../store/sales";
import type { Sale } from "../../core/entities/Sale";

export default defineComponent({
  components: { SaleList, SaleForm },
  setup() {
    const salesStore = useSalesStore();
    const { sales, fetchSales } = salesStore;

    const saleToEdit = ref<Sale | null>(null);

    const setSaleToEdit = (sale: Sale) => {
      saleToEdit.value = sale;
    };

    return { sales, fetchSales, saleToEdit, setSaleToEdit };
  },
});
</script>
