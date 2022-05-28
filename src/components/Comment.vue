<script setup>
const props = defineProps(['comment'])
</script>

<template>
    <div class="w-full bg-gray-200 p-2">
        <p class="text-sm text-justify">{{ props.comment }}</p>
    </div>
</template>