<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="mx-auto w-full sm:w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6">
    <header class="text-center font-mono w-full p-4 bg-indigo-600 text-white font-black">
      NARA SECRET.
    </header>
    <div class="p-4">
      <RouterView />
    </div>
  </div>
</template>