<template>
  <back-button />
  <div class="py-12 sm:py-0">
    <h2 class="text-xl font-semibold">
      Scorecard
    </h2>
    <table class="table-auto mt-6">
      <thead>
        <tr>
          <th
            class="text-left font-semibold"
            colspan="2"
          >
            Batsman
          </th>
          <th class="text-right w-12 font-semibold">
            Runs
          </th>
        </tr>
      </thead>
      <tbody class="text-gray-400 font-mono">
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
      </tbody>
    </table>
  
    <div class="flex items-baseline justify-between my-8">
      <p class="text-gray-400">
        4.0 overs
      </p>
      <p class="text-2xl font-bold">
        19 / 0
      </p>
    </div>

    <table class="table-auto w-full my-8">
      <thead>
        <tr>
          <th class="text-left  font-semibold">
            Bowler
          </th>
          <th class="text-right w-12 font-semibold">
            O
          </th>
          <th class="text-right w-12 font-semibold">
            M
          </th>
          <th class="text-right w-12 font-semibold">
            R
          </th>
          <th class="text-right w-12 font-semibold">
            W
          </th>
        </tr>
      </thead>
      <tbody class="font-mono text-gray-400">
        <tr>
          <td class="py-2">
            JE Thaw
          </td>
          <td class="text-right w-12">
            2
          </td>
          <td class="text-right w-12">
            0
          </td>
          <td class="text-right w-12">
            9
          </td>
          <td class="text-right w-12">
            0
          </td>
        </tr>
        <tr>
          <td class="py-2">
            SF Evans
          </td>
          <td class="text-right w-12">
            2
          </td>
          <td class="text-right w-12">
            0
          </td>
          <td class="text-right w-12">
            10
          </td>
          <td class="text-right w-12">
            0
          </td>
        </tr>
      </tbody>
    </table>
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