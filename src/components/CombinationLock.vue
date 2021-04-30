<template>
  <div class="flex justify-center items-center">
    <div
      class="status w-16 h-16 p-4 sm:w-24 sm:h-24 sm:p-6 text-white"
      :class="{
        'bg-green-800': correct,
        'bg-red-800': !correct,
      }"
    >
      <transition name="solved">
        <svg
          v-if="correct"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="absolute w-8 h-8 sm:w-12 sm:h-12 fill-current"
        >
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="absolute w-8 h-8 sm:w-12 sm:h-12 fill-current"
          :class="{'incorrect': guessedIncorrectly}"
        >
          <path d="M18.8 24H5.2C4 24 3 23 3 21.7V11.3C3 10 4 9 5.3 9h13.4C20 9 21 10 21 11.3v10.4c0 1.3-1 2.3-2.3 2.3zM5.2 10.5c-.4 0-.7.3-.7.8v10.4c0 .5.3.8.8.8h13.4c.5 0 .8-.3.8-.8V11.3c0-.5-.3-.8-.8-.8z" />
          <path d="M17.3 10.5a.8.8 0 01-.8-.8V6a4.5 4.5 0 00-9 0v3.8a.8.8 0 01-1.5 0V6a6 6 0 0112 0v3.8c0 .4-.3.7-.8.7zM12 17a2 2 0 110-4 2 2 0 010 4zm0-2.5a.5.5 0 100 1 .5.5 0 000-1z" />
          <path d="M12 20a.8.8 0 01-.8-.8v-2.7a.8.8 0 011.6 0v2.8c0 .4-.4.7-.8.7z" />
        </svg>
      </transition>
    </div>
    <Digit
      v-for="(digit, index) in digits"
      :key="index"
      :value="digit"
      @increment="increment(index)"
      @decrement="decrement(index)"
    />
    <Button
      class="flex items-center justify-center w-16 h-16 text-2xl sm:w-24 sm:h-24 p-2 font-bold sm:text-3xl"
      @click="checkAnswer"
    >
      OK
    </Button>
  </div>
</template>

<script>
import Button from './Button.vue'
import Digit from './Digit.vue'

export default {
  name: 'CombinationLock',
  components: {
    Button,
    Digit,
  },
  emits: ['correct'],
  data() {
    return {
      digits: [0,0,0,0],
      guessedIncorrectly: false,
      correct: false,
    }
  },
  computed: {
    isCorrect() {
      return this.digits.join('') === '4873';
    }
  },
  created() {
    const digits = JSON.parse(sessionStorage.getItem('combination-lock'));
    if (digits) {
      this.digits = digits;
    }
  },
  methods: {
    increment(index) {
      this.digits[index]++;
      if (this.digits[index] > 9) {
        this.digits[index] = 0;
      }
      this.saveDigits();
    },
    decrement(index) {
      this.digits[index]--;
      if (this.digits[index] < 0) {
        this.digits[index] = 9;
      }
      this.saveDigits();
    },
    saveDigits() {
      sessionStorage.setItem('combination-lock', JSON.stringify(this.digits));
    },
    checkAnswer() {
      if (this.isCorrect) {
        this.$emit('correct')
        this.correct = true;
      } else {
        this.correct = false;
        this.guessedIncorrectly = true;
        setTimeout(() => this.guessedIncorrectly = false, 500);
      }
    }
  }
}
</script>

<style scoped>
.status {
  transition: background-color 0.3s;
}

.incorrect {
  animation: shake 0.5s ease-in-out;
}

.solved-enter-active {
  animation: slideIn 0.3s ease-in-out;
}

.solved-leave-active {
  animation: slideOut 0.3s ease-in-out;
}

@keyframes slideIn {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideOut {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
}

@keyframes shake {
  0%, 100% {
    transform: translateX(0)
  }
  16%, 48%, 80% {
    transform: translateX(10%);
  }
  32%, 64% {
    transform: translateX(-10%);
  }
}
</style>