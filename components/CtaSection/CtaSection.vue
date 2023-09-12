<template>
  <div v-if="ctaContent" class="cta">
    <div class="cta__container container">
      <div class="cta__row">
        <ContactForm class="cta__form" :form-title="ctaContent.formTitle" />
        <div class="cta__content">
          <h2
            v-if="ctaContent.title"
            class="cta__title main-title"
            v-html="ctaContent.title"
          />

          <div
            v-if="ctaContent.text"
            class="cta__text"
            v-html="ctaContent.text"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from "./ContactForm.vue";

export default {
  components: {
    ContactForm,
  },
  props: {
    ctaContent: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';
.cta {
  padding: 0 0 98px;
  margin-top: 193px;
  background: $primary-gradient;
  border-radius: 44px 44px 0 0;

  @include breakpoint(0, $lg) {
    margin-top: 48px;
    padding: 36px 0;
    border-radius: 24px 24px 0 0;
  }

  @include breakpoint(0, $md) {
    background: $primary-gradient-mob;
  }

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  &__content {
    padding-top: 38px;
    width: 55%;

    @include breakpoint(0, $lg) {
      margin-bottom: 44px;
      padding-top: 0;
      width: 100%;
    }
  }

  &__title {
    margin-bottom: 18px;

    &.main-title {
      color: $white;
    }
  }

  &__text {
    font-size: 16px;
    color: $white;
  }

  br {
    @include breakpoint(0, $lg) {
      display: none;
    }
  }

  &__form {
    margin-top: -104px;
    width: 400px;
    max-width: 100%;
    flex: none;

    @include breakpoint(0, $lg) {
      order: 2;
      margin: 0 auto;
    }
  }
}
</style>
