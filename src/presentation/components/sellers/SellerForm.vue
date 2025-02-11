<template>
  <form @submit.prevent="handleSubmit" class="mb-4">
    <div class="mb-3">
      <label for="name" class="form-label">Nome</label>
      <input
        v-model="name"
        type="text"
        class="form-control"
        id="name"
        required
      />
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input
        v-model="email"
        type="email"
        class="form-control"
        id="email"
        required
      />
    </div>
    <button type="submit" class="btn btn-primary">
      {{ sellerToEdit ? "Atualizar" : "Adicionar" }} Vendedor
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { Seller } from "../../../core/entities/Seller";
import { useSellersStore } from "../../store/sellers";

export default defineComponent({
  props: {
    sellerToEdit: {
      type: Object as () => Seller | null,
      default: null,
    },
  },
  emits: ["created"],
  setup(props, { emit }) {
    const name = ref("");
    const email = ref("");
    const sellersStore = useSellersStore();

    watch(
      () => props.sellerToEdit,
      (newSeller) => {
        if (newSeller) {
          name.value = newSeller.name;
          email.value = newSeller.email;
        }
      }
    );

    const handleSubmit = async () => {
      if (props.sellerToEdit) {
        const updatedSeller = new Seller(
          props.sellerToEdit.id,
          name.value,
          email.value
        );
        await sellersStore.updateSeller(updatedSeller);
      } else {
        const newSeller = new Seller(0, name.value, email.value);
        await sellersStore.addSeller(newSeller);
      }
      name.value = "";
      email.value = "";
      emit("created");
    };

    return { name, email, handleSubmit };
  },
});
</script>
