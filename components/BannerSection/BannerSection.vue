<template>
  <div class="banner">
    <div class="banner__container container">
      <div
        class="banner__row"
        :class="{ 'banner__row--wide-text': content.textWide }"
        :style="{ backgroundImage: `url(${bannerBg})` }"
      >
        <h3 v-if="content.title" class="banner__title" v-html="content.title" />
        <div v-if="content.text" class="banner__text" v-html="content.text" />
      </div>
    </div>
  </div>
</template>

<script>
import bannerBg from "~/assets/images/banner-bg.svg";

export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      bannerBg,
    };
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';

.banner {
  padding: 36px 0 64px;

  @include breakpoint(0, $md) {
    padding: 36px 0 44px;
  }

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 6px;
    padding: 70px 44px;
    background-color: $primary;
    color: $white;
    background-position: -300px 50%;
    background-size: auto;
    background-repeat: no-repeat;

    @include breakpoint(0, $lg) {
      padding: 64px 36px;
    }

    @include breakpoint(0, $md) {
      flex-wrap: wrap;
      padding: 35px 24px;
      background-position: 50% -40px;
    }

    &--wide-text {
      padding-top: 62px;
      padding-bottom: 62px;

      @include breakpoint(0, $lg) {
        padding: 64px 36px;
      }

      @include breakpoint(0, $md) {
        padding: 35px 24px;
      }

      .banner__text {
        width: 59.2%; // 640 - 1082

        @include breakpoint(0, $md) {
          width: 100%;
        }
      }
    }
  }

  &__title {
    margin-bottom: 0;
    margin-right: 6.8%;
    font-size: 28px;
    color: inherit;

    @include breakpoint(0, $lg) {
      font-size: 24px;
    }

    @include breakpoint(0, $md) {
      margin: 0 0 24px;
    }
  }

  &__text {
    flex: none;
    width: 51.6%; // 560 - 1082
    font-weight: 500;
    font-size: 14px;
    line-height: 1.5;

    @include breakpoint(0, $md) {
      width: 100%;
    }
  }
}
</style>
