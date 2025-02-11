<template>
  <div id="app">
    <Header />
    <MainContent />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
import MainContent from "./components/layout/MainContent.vue";

export default defineComponent({
  components: {
    Header,
    Footer,
    MainContent,
  },
});
</script>

<style>
/* Estilos globais opcionais */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
}
</style>
