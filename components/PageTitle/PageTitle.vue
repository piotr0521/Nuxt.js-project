<template>
  <div class="page-title">
    <div class="page-title__container container">
      <h3 v-if="subtitle" class="page-title__subheading" v-text="subtitle" />
      <h2
        v-if="secondaryTitle"
        class="page-title__heading"
        :class="{ 'gradient-text': gradientTitle }"
        v-html="title"
      />
      <h1
        v-else
        class="page-title__heading"
        :class="{ 'gradient-text': gradientTitle }"
        v-html="title"
      />
      <p v-if="text" class="page-title__text" v-text="text" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    subtitle: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
    },
    gradientTitle: {
      type: Boolean,
      required: false,
    },
    secondaryTitle: {
      type: Boolean,
      required: false,
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';
.page-title {
  margin: 62px 0 36px;

  @include breakpoint(0, $lg) {
    margin-top: 46px;
  }

  @include breakpoint(0, $md) {
    margin-top: 34px;
    margin-bottom: 24px;
  }

  &__subheading {
    margin-bottom: 0;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.5;

    & + .page-title__heading {
      font-size: 28px;
      font-weight: 600;
      line-height: 1.3;

      @include breakpoint(0, $md) {
        font-size: 24px;
      }
    }
  }

  &__heading {
    margin-bottom: 16px;
    font-size: 36px;

    @include breakpoint(0, $md) {
      font-size: 32px;
    }

    @include breakpoint(0, $sm) {
      font-size: 24px;
    }
  }

  &__text {
    max-width: 820px;
    line-height: 1.5;
    color: $dark;

    @include breakpoint(0, $md) {
      font-size: 15px;
    }
  }
}
</style>
