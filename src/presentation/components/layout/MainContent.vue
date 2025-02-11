<template>
  <main class="container mt-4">
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped>
main {
  min-height: 80vh; /* Garante que o conteúdo tenha altura mínima */
}
</style>
