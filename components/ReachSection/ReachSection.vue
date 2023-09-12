<template>
  <div v-if="reachContent" class="reach">
    <div class="reach__container container">
      <div class="reach__row">
        <div class="reach__content">
          <h2
            v-if="reachContent.title"
            class="reach__title main-title gradient-text"
            v-html="reachContent.title"
          />

          <div
            v-if="reachContent.text"
            class="reach__text"
            v-html="reachContent.text"
          />

          <div
            v-if="reachContent.actions && reachContent.actions.length"
            class="reach__actions"
          >
            <PrimeButton
              class="reach__button"
              v-for="action in reachContent.actions"
              :key="action.id"
              :caption="action.caption"
              :link="action.link"
              :styleType="action.styleType"
              :type="action.type"
              :target="action.target"
            />
          </div>
        </div>

        <PrimeSlider
          v-if="reachContent.screens && reachContent.screens.length"
          class="reach__slider"
          :screens="reachContent.screens"
          :flags="reachContent.flags"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PrimeButton from "~/components/UI/PrimeButton.vue";
import PrimeSlider from "~/components/PrimeSlider/PrimeSlider.vue";

export default {
  components: {
    PrimeSlider,
    PrimeButton,
  },
  props: {
    reachContent: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';
.reach {
  position: relative;
  padding: 72px 0;
  border-bottom: 1px solid $grey-400;
  overflow-x: hidden;
  z-index: 5;

  @include breakpoint(0, $lg) {
    padding: 56px 0;
  }

  @include breakpoint(0, $md) {
    padding: 50px 0 52px;
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 225px;
    background: linear-gradient(180deg, #fafbff 0%, #fff 100%);
    z-index: 2;
  }

  &__row {
    position: relative;
    display: flex;
    align-items: center;
    z-index: 5;

    @include breakpoint(0, $lg) {
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  &__content {
    margin-right: 5%; // 60 - 1170
    width: 65%; // 760 - 1170

    @include breakpoint(0, $lg) {
      margin-right: 0;
      width: 100%;
    }
  }

  &__slider {
    width: 305px;
    margin-left: auto;

    @include breakpoint(0, $lg) {
      order: -1;
      margin: 0 auto 44px;
      width: 100%;
    }
  }

  &__title {
    margin-bottom: 12px;
  }

  &__text {
    margin-bottom: 36px;
    font-size: 15px;

    @include breakpoint(0, $md) {
      font-size: 16px;
    }

    &:last-child {
      margin-bottom: 0;
    }

    b,
    strong {
      font-weight: 600;
      color: $dark;
    }
  }

  br {
    @include breakpoint(0, $lg) {
      display: none;
    }
  }

  &__actions {
    display: flex;

    @include breakpoint(0, $sm) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  &__button {
    margin-right: 20px;

    @include breakpoint(0, $sm) {
      margin-bottom: 20px;
    }

    &:last-child {
      margin: 0;
    }
  }
}
</style>
