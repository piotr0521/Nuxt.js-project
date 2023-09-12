<template>
  <div class="partner">
    <div class="partner__container container">
      <div class="partner__title gradient-text text-center">
        {{ content.title }}
      </div>

      <div class="partner__text text-center" v-html="content.text"/>

      <div class="partner-panel text-center">
        <div class="partner-panel__title">
          Contact us
        </div>
        <div class="partner-panel__content">
          Contact us and discover the power of Prime Opinion,<br> your gateway to a world of insights.
        </div>
        <div class="partner-panel__action">
          <PrimeButton
            class="partner-panel__button"
            caption="Contact Us"
            type="router"
            link="/contact"
          />
        </div>
      </div>

      <img :src="MacBook" class="hide-sm" />
    </div>
  </div>
</template>
<script>
import PrimeButton from "~/components/UI/PrimeButton.vue";
import MacBook from "~/assets/images/MacBook.svg";
export default {
  components: {
    PrimeButton,
  },
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      MacBook
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';

.partner {
  padding-top: 15px;
  
  @include breakpoint(0, $sm) {
    padding-top: 0;
  }

  &__title {
    text-align: center;
    font-family: $primary-font-family;
    font-size: 36px;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 24px;
    
    @include breakpoint(0, $sm) {
      font-size: 24px;
      padding: 0 70px;
    }
  }

  &__text {
    color: $dark;
    text-align: center;
    font-family: $secondary-font-family;
    font-size: 18px;

    @include breakpoint(0, $sm) {
      font-size: 14px;
      padding: 0 12px;
    }
  }

  .partner-panel {
    margin: 40px 0;
    padding: 36px;
    border-radius: 24px 0px 0px 24px;
    background: linear-gradient(161deg, #E5EFFF 0%, rgba(229, 239, 255, 0.00) 100%);

    @include breakpoint(0, $sm) {
      margin-top: 62px;
      margin-bottom: 54px;
    }

    &__title {
      color: $gray-900;
      text-align: center;
      font-family: $primary-font-family;
      font-size: 20px;
      font-weight: 600;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &__content {
      color: $gray-600;
      text-align: center;
      font-family: $primary-font-family;
      font-size: 18px;
      line-height: 1.56;

      @include breakpoint(0, $sm) {
        font-size: 14px;
      }      
    }

    &__action {
      margin-top: 24px;
    }
  }
}
</style>