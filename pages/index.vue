<template>
  <div class="pt:40 flex flex:col ai:center">
    <!-- drop area -->
    <div
      class="w:720 h:480 r:120 bg:surface-variant fg:on-surface-variant p:40"
    >
      <div class="h:full r:80 b:10|dashed|outline flex ai:center jc:center">
        <div>
          <!-- <div>+</div> -->
          <div class="f:28">上傳檔案</div>
        </div>
      </div>
    </div>
    <div class="w:720 mt:40 flex ai:center jc:end">
      <!-- to format -->
      <div class="mr:32 w:fit-content flex gap:8 f:24">
        <span class="inline-flex ai:center">轉換為</span>
        <select
          v-model="toFormat"
          class="appearance:none w:max r:99 bg:primary-container fg:on-primary-container p:4|16"
        >
          <option v-for="fmt in supportedToFormats" :key="fmt.ext" :value="fmt">
            {{ fmt.label }}
          </option>
        </select>
        <span class="inline-flex ai:center">格式</span>
      </div>
      <!-- action -->
      <button
        class="r:999 bg:primary fg:on-primary p:16|40 f:28 f:bold flex ai:center jc:center"
      >
        轉換！
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const supportedToFormats = [
  {
    label: "MP4",
    ext: ".mp4",
  },
];
const toFormat = ref(supportedToFormats[0]);
</script>

<style scoped></style>
