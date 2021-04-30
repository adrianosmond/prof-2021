<template>
  <back-button />
  <h2 class="text-xl font-semibold">
    Scorecard
  </h2>
  <table class="table-auto font-mono text-gray-400">
    <tr>
      <td class="pr-6 py-2">
        NC Dexter
      </td>
      <td class="px-12 py-2">
        not out
      </td>
      <td class="pl-6 py-2 text-right">
        13
      </td>
    </tr>
    <tr>
      <td class="pr-6 py-2">
        DCI Endeavour
      </td>
      <td class="px-12 py-2">
        not out
      </td>
      <td class="pl-6 py-2 text-right">
        6
      </td>
    </tr>
  </table>
  <div class="flex items-baseline justify-between my-8">
    <p class="text-gray-400">
      4.0 overs
    </p>
    <p class="text-2xl font-bold">
      19 / 0
    </p>
  </div>
  <h2 class="text-xl font-semibold mt-6">
    Live report
  </h2>
  <div class="grid grid-cols-6">
    <h3 class="text-lg font-semibold col-span-6 mt-4">
      Over 4
    </h3>
    <p class="contents font-mono text-gray-400">
      <span>1</span> <span>2</span> <span>1</span> <span>.</span> <span>.</span> <span>.</span>
    </p>
  
    <h3 class="text-lg font-semibold col-span-6 mt-4">
      Over 3
    </h3>
    <p class="contents font-mono text-gray-400">
      <span>1</span> <span>1</span> <span>2</span> <span>.</span> <span>.</span> <span>.</span>
    </p>

    <h3 class="text-lg font-semibold col-span-6 mt-4">
      Over 2
    </h3>
    <p class="contents font-mono text-gray-400">
      <span>2</span> <span>2</span> <span>2</span> <span>.</span> <span>.</span> <span>.</span>
    </p>


    <h3 class="text-lg font-semibold col-span-6 mt-4">
      Over 1
    </h3>
    <p class="contents font-mono text-gray-400">
      <span>1</span> <span>1</span> <span>2</span> <span>1</span> <span>.</span> <span>.</span>
    </p>
  </div>
</template>

<script>
  import BackButton from '@/components/BackButton.vue';

  export default {
    name: 'Cricket',
    components: {
      BackButton,
    },
  }
</script>