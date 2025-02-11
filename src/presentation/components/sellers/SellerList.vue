<template>
  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="seller in sellers" :key="seller.id">
          <td>{{ seller.id }}</td>
          <td>{{ seller.name }}</td>
          <td>{{ seller.email }}</td>
          <td>
            <button
              class="btn btn-warning btn-sm me-2"
              @click="editSeller(seller)"
            >
              Editar
            </button>
            <button
              class="btn btn-danger btn-sm"
              @click="deleteSeller(seller.id)"
            >
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
import type { Seller } from "../../../core/entities/Seller";
import { useSellersStore } from "../../store/sellers";

export default defineComponent({
  props: {
    sellers: {
      type: Array as PropType<Seller[]>,
      required: true,
    },
  },
  setup(_, { emit }) {
    const sellersStore = useSellersStore();

    const editSeller = (seller: Seller) => {
      emit("edit", seller); // Emite o evento para o componente pai
    };

    const deleteSeller = async (id: number) => {
      await sellersStore.deleteSeller(id);
    };

    return { editSeller, deleteSeller };
  },
});
</script>
