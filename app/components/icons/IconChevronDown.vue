<template>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" :stroke-width="strokeWidth">
    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</template>

<script setup>
defineProps({
  strokeWidth: { type: [Number, String], default: 2 }
})
</script>
