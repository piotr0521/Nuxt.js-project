<template>
  <div class="card">
    <div class="card__icon">
      <component :is="iconComponent"/>
    </div>

    <div class="card__content">
      <h3 class="card__title" v-text="title" />

      <div class="card__text" v-html="text" />
    </div>
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
  computed: {
    iconComponent() {
      return () => import(`../icons/${this.iconLabel}.vue`)
    }
  }
};

</script>

<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';

.card {
  padding: 36px 24px;
  border-radius: 24px;
  background-color: $white;
  box-shadow: 0px 1px 3px rgba(63, 63, 68, 0.15),
    0px 0px 0px 1px rgba(63, 63, 68, 0.05);

  @include breakpoint(0, $md) {
    padding: 24px;
  }

  &__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    width: 56px;
    height: 56px;
    line-height: 1;

    @include breakpoint(0, $md) {
      margin-bottom: 12px;
    }

    svg {
      width: 100%;
      height: auto;
    }
  }

  &__title {
    color: $blue;
    font-size: 48px;
    font-family: $primary-font-family;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -1.08px;
    margin-bottom: 12px;
  }

  &__text {
    color: $gray-600;
    font-family: $secondary-font-family;
    font-size: 16px;
    line-height: 1.5;

    @include breakpoint(0, $md) {
      font-size: 13px;
    }

    p {
      @include breakpoint(0, $md) {
        margin-bottom: 0;
      }
    }
  }
}
</style>
