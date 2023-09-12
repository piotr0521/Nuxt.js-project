<template>
  <div v-if="featuresContent" class="features">
    <div class="features__container container container--lg">
      <div class="features__row dark-context">
        <h2
          v-if="featuresContent.title"
          class="features__title heading text-center"
          v-html="featuresContent.title"
        />

        <div
          v-if="featuresContent.features && featuresContent.features.length"
          class="features__list"
        >
          <FeatureItem
            v-for="feature in featuresContent.features"
            :key="feature.iconLabel"
            :icon-label="feature.iconLabel"
            :title="feature.title"
            :subtitle="feature.subtitle"
            :text="feature.text"
            class="features__item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FeatureItem from "./FeatureItem.vue";

export default {
  components: {
    FeatureItem,
  },
  props: {
    featuresContent: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';
.features {
  padding: 61px 0 36px;

  @include breakpoint(0, $lg) {
    padding: 46px 0;
  }

  @include breakpoint(0, $md) {
    padding: 35px 0 32px;
  }

  &__row {
    padding: 36px 64px 48px;
    border-radius: 44px;

    @include breakpoint(0, $lg) {
      border-radius: 36px;
      padding: 36px 48px;
    }

    @include breakpoint(0, $md) {
      border-radius: 24px;
      padding: 24px 22px;
    }
  }

  &__title {
    margin-bottom: 54px;

    @include breakpoint(0, $lg) {
      margin-bottom: 42px;
    }

    @include breakpoint(0, $md) {
      margin-bottom: 36px;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 50px;

    @include breakpoint(0, $lg) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      grid-gap: 36px;
    }
  }
}
</style>
