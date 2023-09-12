<template>
  <li class="statistic">
    <IconStatistics class="statistic__icon" :icon-label="iconLabel" />
    <span class="statistic__text" v-text="text" />
  </li>
</template>

<script>
import IconStatistics from "../icons/IconStatistics.vue";

export default {
  components: {
    IconStatistics,
  },
  props: {
    iconLabel: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';
.statistic {
  display: inline-flex;
  align-items: center;

  &__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    width: 32px;

    svg {
      max-width: 100%;
    }
  }

  &__text {
    color: $dark;
    font-weight: 500;
    font-size: 18px;

    @include breakpoint(0, $md) {
      font-size: 16px;
    }

    @include breakpoint(0, $sm) {
      font-size: 14px;
    }
  }
}
</style>
