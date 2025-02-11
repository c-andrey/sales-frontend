<template>
  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Vendedor</th>
          <th>Valor</th>
          <th>Comissão</th>
          <th>Data</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sale in sales" :key="sale.id">
          <td>{{ sale.id }}</td>
          <td>{{ sale.seller?.name }}</td>
          <td>{{ sale.value }}</td>
          <td>{{ sale?.comission }}</td>
          <td>{{ sale?.saleDate }}</td>
          <td>
            <button class="btn btn-warning btn-sm me-2" @click="editSale(sale)">
              Editar
            </button>
            <button class="btn btn-danger btn-sm" @click="deleteSale(sale.id)">
              Excluir
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { Sale } from "../../../core/entities/Sale";
import { useSalesStore } from "../../store/sales";

export default defineComponent({
  props: {
    sales: {
      type: Array as PropType<Sale[]>,
      required: true,
    },
  },
  setup(_, { emit }) {
    const salesStore = useSalesStore();

    const editSale = (sale: Sale) => {
      emit("edit", sale);
    };

    const deleteSale = async (id: number) => {
      await salesStore.deleteSale(id);
    };

    return { editSale, deleteSale };
  },
});
</script>
