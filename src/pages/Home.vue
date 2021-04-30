<template>
  <div
    class="py-16"
    style="perspective: 1000px"
  >
    <transition
      name="open"
      mode="out-in"
    >
      <div
        v-if="!isCorrect"
        style="backface-visibility: hidden; transform-origin: 0 50%"
      >
        <icon-row
          :icons="top"
          position="top"
        />
        <combination-lock @correct="correct" />
        <icon-row
          :icons="bottom"
          position="bottom"
        />
      </div>
      <div
        v-else
        class="flex flex-col items-center justify-center text-center"
        style="height: 31rem"
      >
        <div style="width: 25rem">
          <p class="text-4xl">
            Happy Birthday!
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Confetti from 'vue-confetti/src/confetti.js';
import CombinationLock from '../components/CombinationLock.vue'
import IconRow from '../components/IconRow.vue'

export default {
  name: 'Home',
  components: {
    CombinationLock,
    IconRow
  },
  data() {
    return {
      confetti: new Confetti(),
      isCorrect: false,
      top: ['cricket', 'sudoku'],
      bottom: ['cipher', 'football']
    }
  },
  methods: {
    correct() {
      setTimeout(() => this.isCorrect = true, 500);
      setTimeout(() => this.confetti.start(), 2000);
    }
  }
}
</script>

<style scoped>
.open-leave-active {
  animation: open 1s ease-in-out;
}
.open-enter-active {
  animation: appear 1s ease-in-out;
}

@keyframes open {
  0% {
    transform: none;
  }
  100% {
    transform: rotateY(-90deg);
  }
}

@keyframes appear {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: none;
    opacity: 1;
  }
}
</style>