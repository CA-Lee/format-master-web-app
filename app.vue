<template>
  <!-- mcss container -->
  <CSSProvider :config="import('./master.css')">
    <!-- main container -->
    <div>
      <!-- nav bar -->
      <nav class="bg:surface-variant h:64"></nav>
      <NuxtPage />
    </div>
  </CSSProvider>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import cssConfig from "./master.css";

const CSSProvider = defineAsyncComponent(
  async () => (await import("@master/css.vue")).CSSProvider,
);

onNuxtReady(() => {
  document.body.style.backgroundColor =
    (cssConfig?.colors?.surface as string | undefined) ?? "#000";
});
</script>

<style>
body {
  font-family: "Noto Sans TC", "Roboto", sans-serif;
}
button {
  line-height: 1;
}
</style>
