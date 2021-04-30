<template>
  <back-button />
  <div class="sudoku grid grid-cols-9 gap-0 justify-start mx-auto mt-16 bg-gray-200 text-center text-xl leading-8 sm:text-2xl sm:leading-10">
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-t-2 sm:border-t-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4">
      7
    </div>
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-t-2 sm:border-t-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-t-2 sm:border-t-4">
      1
    </div>
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4" />
    
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-l-2 sm:border-l-4">
      2
    </div>
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200">
      1
    </div>
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-r-2 sm:border-r-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-l-2 sm:border-l-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-r-2 sm:border-r-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-l-2 sm:border-l-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-r-2 sm:border-r-4" />

    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-b-2 sm:border-b-4 border-l-2 sm:border-l-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-b-2 sm:border-b-4">
      6
    </div>
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-b-2 sm:border-b-4 border-l-2 sm:border-l-4">
      2
    </div>
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-b-2 sm:border-b-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4">
      4
    </div>
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-b-2 sm:border-b-4 border-l-2 sm:border-l-4">
      3
    </div>
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-b-2 sm:border-b-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4" />

    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4">
      8
    </div>
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-t-2 sm:border-t-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-t-2 sm:border-t-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-t-2 sm:border-t-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4" />
    
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-l-2 sm:border-l-4">
      9
    </div>
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200">
      7
    </div>
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-r-2 sm:border-r-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-l-2 sm:border-l-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-r-2 sm:border-r-4">
      6
    </div>
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-l-2 sm:border-l-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200">
      4
    </div>
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-r-2 sm:border-r-4">
      1
    </div>

    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-b-2 sm:border-b-4 border-l-2 sm:border-l-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-b-2 sm:border-b-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-b-2 sm:border-b-4 border-l-2 sm:border-l-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-b-2 sm:border-b-4">
      4
    </div>
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-b-2 sm:border-b-4 border-l-2 sm:border-l-4">
      6
    </div>
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-b-2 sm:border-b-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4">
      2
    </div>

    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-t-2 sm:border-t-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-t-2 sm:border-t-4">
      3
    </div>
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-red-500 text-black font-bold border border-grey-200 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4">
      ?
    </div>
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-t-2 sm:border-t-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4">
      9
    </div>
    
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-l-2 sm:border-l-4">
      7
    </div>
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-r-2 sm:border-r-4">
      3
    </div>
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-l-2 sm:border-l-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-r-2 sm:border-r-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-l-2 sm:border-l-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200">
      6
    </div>
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-r-2 sm:border-r-4" />

    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-b-2 sm:border-b-4 border-l-2 sm:border-l-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-b-2 sm:border-b-4">
      2
    </div>
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4">
      1
    </div>
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-b-2 sm:border-b-4 border-l-2 sm:border-l-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-b-2 sm:border-b-4">
      8
    </div>
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-b-2 sm:border-b-4 border-l-2 sm:border-l-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-b-2 sm:border-b-4" />
    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 border border-grey-200 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4">
      4
    </div>
  </div>
</template>

<script>
import BackButton from '@/components/BackButton.vue';

export default {
  name: 'Sudoku',
  components: {
    BackButton
  }
}
</script>

<style scoped>
@media (min-width: 40rem) {
  .sudoku {
    width: 22.5rem;
    height: 22.5rem;
  }
}

@media (min-width: 40rem) {
  .sudoku {
    width: 27rem;
    height: 27rem;
  }
}
</style>