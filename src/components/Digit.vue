<template>
  <div class="digit flex flex-col">
    <Button
      class="w-full"
      @click="$emit('increment')"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
      </svg>
    </Button>
    <div class="text-5xl sm:text-6xl bg-gray-900 text-white w-16 h-16 sm:w-20 sm:h-24 leading-none sm:leading-tight text-center border-gray-800 border-4 border-b-0 border-l-0">
      {{ value }}
    </div>
    <Button
      class="w-full"
      @click="$emit('decrement')"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
      </svg>
    </Button>
  </div>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'Digit',
  components: {
    Button,
  },
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  emits: ['increment', 'decrement']
}
</script>

<style scoped>
.digit {
  font-family: 'Averia Libre', cursive;
}
</style>