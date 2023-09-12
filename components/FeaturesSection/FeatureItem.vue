<template>
  <div class="feature">
    <div class="feature__icon">
      <IconFeatures :icon-label="iconLabel" />
    </div>

    <div class="feature__content">
      <div class="feature__heading">
        <h3 class="feature__title title" v-html="title" />

        <h4
          v-if="subtitle"
          class="feature__subtitle subtitle"
          v-html="subtitle"
        />
      </div>

      <div class="feature__text" v-html="text" />
    </div>
  </div>
</template>

<script>
import IconFeatures from "../icons/IconFeatures.vue";
export default {
  components: { IconFeatures },
  props: {
    iconLabel: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
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
.feature {
  display: flex;
  align-items: flex-start;

  @include breakpoint(0, $sm) {
    justify-content: center;
    flex-wrap: wrap;
  }

  &__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: none;
    margin-right: 16px;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: $primary;
    line-height: 1;

    @include breakpoint(0, $sm) {
      margin: 0 0 16px;
    }

    svg {
      max-width: 36px;
    }
  }

  &__heading {
    margin-bottom: 24px;

    @include breakpoint(0, $md) {
      margin-bottom: 22px;
    }
  }

  &__title {
    margin-bottom: 2px;
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
