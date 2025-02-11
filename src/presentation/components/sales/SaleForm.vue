<template>
  <form @submit.prevent="handleSubmit" class="mb-4">
    <div class="mb-3">
      <label for="seller" class="form-label">Vendedor</label>
      <select v-model="seller" class="form-select" id="seller" required>
        <option v-for="seller in sellers" :key="seller.id" :value="seller.id">
          {{ seller.name }}
        </option>
      </select>
    </div>
    <div class="mb-3">
      <label for="value" class="form-label">Valor</label>
      <input
        v-model="value"
        type="number"
        class="form-control"
        id="value"
        required
      />
    </div>

    <button type="submit" class="btn btn-primary">
      {{ saleToEdit ? "Atualizar" : "Adicionar" }} Venda
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { Sale } from "../../../core/entities/Sale";
import { useSalesStore } from "../../store/sales";
import { useSellersStore } from "../../store/sellers";

export default defineComponent({
  props: {
    saleToEdit: {
      type: Object as () => Sale | null,
      default: null,
    },
  },
  emits: ["created"],
  setup(props, { emit }) {
    const seller = ref("");
    const value = ref(0);
    const salesStore = useSalesStore();
    const sellersStore = useSellersStore();

    watch(
      () => props.saleToEdit,
      (newSale) => {
        if (newSale) {
          seller.value = String(newSale.sellerId);
          value.value = newSale.value;
        }
      }
    );

    const handleSubmit = async () => {
      if (props.saleToEdit) {
        const updatedSale = new Sale(
          props.saleToEdit.id,
          parseFloat(seller.value),
          value.value
        );
        await salesStore.updateSale(updatedSale);
      } else {
        const newSale = new Sale(0, parseFloat(seller.value), value.value);
        await salesStore.addSale(newSale);
      }
      emit("created");
      seller.value = "";
      value.value = 0;
    };

    return { seller, value, handleSubmit, sellers: sellersStore.sellers };
  },
});
</script>
