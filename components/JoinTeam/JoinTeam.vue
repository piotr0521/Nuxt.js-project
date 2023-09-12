<template>
  <div v-if="content" class="join-team">
    <div class="join-team__container container">
      <div class="join-team__row">
        <div class="join-team__form-wrapper">
          <h3
            v-if="content.title"
            class="join-team__title gradient-text"
            v-html="content.title"
          />
          <h4
            v-if="content.subtitle"
            class="join-team__subtitle"
            v-html="content.subtitle"
          />
          <ApplyNowForm
            class="join-team__form"
            :form-title="content.formTitle"
          />
        </div>
        <div class="join-team__content">
          <h3
            v-if="content.title"
            class="join-team__title gradient-text"
            v-html="content.title"
          />
          <h4
            v-if="content.subtitle"
            class="join-team__subtitle"
            v-html="content.subtitle"
          />
          <div
            v-if="content.text"
            class="join-team__text"
            v-html="content.text"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApplyNowForm from "~/components/JoinTeam/ApplyNowForm.vue";
export default {
  components: { ApplyNowForm },
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';
.join-team {
  position: relative;
  padding: 84px 0 110px;

  @include breakpoint(0, $md) {
    padding: 40px 0 48px;
  }

  @include breakpoint(0, $md) {
    margin-top: 0;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 225px;
    background: linear-gradient(180deg, $grey-800 0%, $white 100%);
    z-index: 5;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 220px;
    background: $primary-gradient;
    border-radius: 44px 44px 0 0;
    z-index: 7;

    @include breakpoint(0, $lg) {
      border-radius: 24px 24px 0 0;
      height: 610px;
      background: $primary-gradient-mob;
    }

    @include breakpoint(0, $md) {
      height: 544px;
    }
  }

  &__container {
    position: relative;
    z-index: 10;
  }

  &__row {
    display: flex;
    justify-content: space-between;

    @include breakpoint(0, $lg) {
      flex-wrap: wrap;
    }
  }

  &__form-wrapper {
    flex: none;
    margin-right: 9.7%; // 114 - 1170
    width: 430px;
    max-width: 100%;

    @include breakpoint(0, $lg) {
      order: 2;
      margin: 0 auto;
    }

    .join-team__title,
    .join-team__subtitle {
      @include breakpoint(0, $lg) {
        display: none;
      }
    }
  }

  &__content {
    margin-bottom: 150px;

    @include breakpoint(0, $lg) {
      margin-bottom: 78px;
    }

    .join-team__title,
    .join-team__subtitle {
      display: none;

      @include breakpoint(0, $lg) {
        display: block;
      }
    }
  }

  &__title {
    margin-bottom: 8px;
    font-size: 28px;
    font-weight: 600;
  }

  &__subtitle {
    font-size: 22px;
    font-weight: 500;
    line-height: 1.5;

    @include breakpoint(0, $lg) {
      font-size: 20px;
    }

    @include breakpoint(0, $md) {
      font-size: 18px;
    }
  }

  &__form {
    margin-top: 74px;

    @include breakpoint(0, $lg) {
      margin-top: 0;
    }
  }

  &__text {
    font-size: 16px;
    color: $dark;

    @include breakpoint(0, $lg) {
      margin-top: 42px;
    }

    p {
      margin-bottom: 2em;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
