<template>
  <div class="monitoring">
    <div class="monitoring__heading">
      <div class="monitoring__icon">
        <IconCards :icon-label="iconLabel" />
      </div>
      <h3 class="monitoring__title title" v-html="title" />
    </div>

    <div class="monitoring__text" v-html="text" />
  </div>
</template>

<script>
import IconCards from "../icons/IconCards.vue";
export default {
  components: { IconCards },
  props: {
    iconLabel: {
      type: String,
      required: true,
    },
    title: {
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
.monitoring {
  &__heading {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
  }

  &__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: none;
    margin-right: 12px;
    width: 44px;
    height: 44px;
    line-height: 1;

    svg {
      max-width: 100%;
    }
  }

  &__title {
    margin-bottom: 12px;
  }

  &__text {
    font-size: 15px;
    font-family: $secondary-font-family;

    @include breakpoint(0, $md) {
      font-size: 14px;
    }
  }
}
</style>
