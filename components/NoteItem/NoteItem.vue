<template>
  <blockquote v-if="blockquote" class="note note--quotes">
    <IconQuote class="note__quote" v-if="blockquote" />
    <div class="note__text" v-html="text" />
    <IconQuote class="note__quote" v-if="blockquote" />
  </blockquote>
  <div v-else class="note">
    <div class="note__text" v-html="text" />
  </div>
</template>

<script>
import IconQuote from "~/components/icons/IconQuote.vue";

export default {
  components: { IconQuote },
  props: {
    text: {
      type: String,
      required: true,
    },
    blockquote: {
      type: Boolean,
      required: false,
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';
.note {
  margin: 0;
  padding: 36px;
  color: $dark;
  font-size: 16px;
  font-weight: 500;
  background: $secondary-gradient;

  @include breakpoint(0, $md) {
    padding: 24px;
    font-size: 14px;
  }

  &--quotes {
    position: relative;
    border-left: 3px solid $primary;
    padding: 20px 12px 20px 36px;
    font-size: 18px;
    font-weight: 600;

    @include breakpoint(0, $lg) {
      font-size: 16px;
    }

    @include breakpoint(0, $md) {
      padding-top: 12px;
      padding-bottom: 12px;
      font-size: 14px;
      font-weight: 500;
    }
  }

  &__quote {
    position: absolute;
    z-index: 5;
    top: -7px;
    left: 12px;
    line-height: 1;

    @include breakpoint(0, $md) {
      left: 10px;
    }

    &:last-child {
      top: auto;
      bottom: -7px;
      left: auto;
      right: 34px;
      transform: rotate(180deg);

      @include breakpoint(0, $md) {
        right: 12px;
      }
    }
  }
}
</style>
