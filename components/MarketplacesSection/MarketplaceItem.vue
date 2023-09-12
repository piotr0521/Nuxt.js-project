<template>
  <li class="marketplace">
    <a v-if="url" :href="url" target="_blank">
      <img :src="logoSrc" :alt="name" />
      <span class="sr-only" v-text="name" />
    </a>
    <template v-else>
      <img :src="logoSrc" :alt="name" />
      <span class="sr-only" v-text="name" />
    </template>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    logoSrc: {
      type: String,
      required: true,
    },
    url: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';
.marketplace {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;

  @include breakpoint(0, $sm) {
    justify-content: flex-start;
  }

  img {
    max-width: 100%;
  }
}
</style>
