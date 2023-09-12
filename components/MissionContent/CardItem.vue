<template>
  <div class="panel-card">
    <div class="panel-card__icon">
      <IconCards :icon-label="iconLabel" />
    </div>

    <div class="panel-card__content">
      <h3 class="panel-card__title" v-text="title" />

      <div class="panel-card__text" v-html="text" />
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
};
</script>

<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';
.panel-card {
  padding: 36px;
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
      width: 32px;
      height: 32px;
    }

    svg {
      width: 100%;
      height: auto;
    }
  }

  &__title {
    margin-bottom: 6px;
    font-size: 20px;

    @include breakpoint(0, $md) {
      margin-bottom: 12px;
      font-size: 14px;
    }
  }

  &__text {
    font-size: 15px;

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
