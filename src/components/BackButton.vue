<template>
  <button
    class="back-button absolute focus:outline-none"
    @click="$router.go(-1)"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="w-10 h-10 fill-current"
    >
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" /></svg>
  </button>
</template>

<script>
export default {
  name: 'BackButton'
}
</script>

<style scoped>
.back-button {
  top: 1rem;
  left: 1rem;
}

@media (min-width: 40rem) {
  .back-button {
    top: 2rem;
    left: 2rem;
  }
}
</style>