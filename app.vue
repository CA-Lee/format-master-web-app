<template>
  <CSSProvider :config="import('./master.css')">
    <h1 class="font:40 font:heavy italic m:50 text:center">Hello World</h1>
  </CSSProvider>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const CSSProvider = defineAsyncComponent(
  async () => (await import("@master/css.vue")).CSSProvider,
);
</script>
