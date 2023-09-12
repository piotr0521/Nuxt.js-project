<template>
  <div v-if="marketplacesContent" class="marketplaces">
    <div class="marketplaces__container container">
      <div class="marketplaces__row">
        <div class="marketplaces__content">
          <h2
            v-if="marketplacesContent.title"
            class="marketplaces__title main-title gradient-text"
            v-html="marketplacesContent.title"
          />

          <div
            v-if="marketplacesContent.text"
            class="marketplaces__text"
            v-html="marketplacesContent.text"
          />
        </div>
        <ul
          v-if="
            marketplacesContent.marketplaces &&
            marketplacesContent.marketplaces.length
          "
          class="marketplaces__marketplaces list-unstyled"
        >
          <MarketplaceItem
            v-for="marketplace in marketplacesContent.marketplaces"
            :key="marketplace.name"
            :name="marketplace.name"
            :logoSrc="marketplace.logoSrc"
            :url="marketplace.url"
            class="marketplaces__item"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import MarketplaceItem from "~/components/MarketplacesSection/MarketplaceItem.vue";

export default {
  components: {
    MarketplaceItem,
  },
  props: {
    marketplacesContent: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';
.marketplaces {
  padding: 96px 0 34px;

  @include breakpoint(0, $lg) {
    padding: 56px 0;
  }

  @include breakpoint(0, $md) {
    padding: 42px 0 48px;
  }

  &__content {
    margin-bottom: 44px;
  }

  &__title {
    margin-bottom: 18px;

    @include breakpoint(0, $md) {
      margin-bottom: 12px;
    }
  }

  &__text {
    font-size: 16px;
  }

  &__marketplaces {
    display: grid;
    grid-template-columns: repeat(6, auto);
    grid-template-rows: auto;
    justify-content: center;
    grid-gap: 75px;

    @include breakpoint(0, $xlg) {
      grid-template-columns: repeat(3, 150px);
      grid-template-rows: auto;
      grid-gap: 24px 36px;
    }

    @include breakpoint(0, $sm) {
      grid-template-columns: repeat(2, 132px);
      grid-template-rows: auto;
    }
  }
}
</style>
