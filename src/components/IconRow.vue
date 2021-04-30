<template>
  <div class="flex justify-center">
    <router-link
      v-for="icon in icons"
      :key="icon"
      :to="`/${icon}`"
      :class="`${icon}-icon`"
    >
      <icon
        :id="icon"
        :position="position"
      />
    </router-link>
  </div>
</template>

<script>
import Icon from './Icon.vue';

export default {
  name: 'IconRow',
  components: {
    Icon
  },
  props: {
    icons: {
      type: Array,
      default: () => []
    },
    position: {
      type: String,
      default: 'top'
    }
  }
}
</script>

<style scoped>
.cricket-icon {
  margin-left: -4rem;
}

.cipher-icon {
  margin-left: 4rem;
}

a:first-child {
  margin-right: 4rem;
}

@media (min-width: 40rem) {
  .cricket-icon {
    margin-left: -5rem;
  }
  
  .cipher-icon {
    margin-left: 5rem;
  }
  
  a:first-child {
    margin-right: 5rem;
  }
}
</style>