<template>
  <button
    class="p-2 bg-gray-500 text-black focus:outline-none active:shadow-inner
           border-4 border-t-0 border-l-0 border-gray-400 active:border-gray-600 active:border-b-0 active:border-r-0 active:border-t-4 active:border-l-4"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button'
}
</script>