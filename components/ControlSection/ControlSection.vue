<template>
  <div v-if="controlContent" class="control">
    <div class="control__container container">
      <div class="control__heading">
        <h2
          v-if="controlContent.title"
          class="control__title main-title gradient-text"
          v-html="controlContent.title"
        />

        <div
          v-if="controlContent.text"
          class="control__text"
          v-html="controlContent.text"
        />
      </div>

      <div
        v-if="controlContent.features && controlContent.features.length"
        class="control__features"
      >
        <div class="control__list">
          <MonitoringItem
            v-for="feature in controlContent.features"
            :key="feature.iconLabel"
            :icon-label="feature.iconLabel"
            :title="feature.title"
            :text="feature.text"
            class="control__item"
          />
        </div>
      </div>

      <div class="control__row">
        <div v-if="controlContent.image" class="control__image">
          <img :src="controlContent.image" :alt="controlContent.imageAlt" />
        </div>

        <div class="control__content">
          <div class="control__properties">
            <ControlProperties
              v-if="controlContent.pros && controlContent.pros.length"
              class="control__property"
              type="pros"
              :items="controlContent.pros"
            />
            <ControlProperties
              v-if="controlContent.cons && controlContent.cons.length"
              class="control__property"
              type="cons"
              :items="controlContent.cons"
            />
          </div>

          <ControlResults
            v-if="controlContent.results"
            class="control__results"
            :title="controlContent.results.title"
            :text="controlContent.results.text"
            :total="controlContent.results.total"
            :items="controlContent.results.items"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MonitoringItem from "~/components/ControlSection/MonitoringItem.vue";
import ControlProperties from "~/components/ControlSection/ControlProperties.vue";
import ControlResults from "~/components/ControlSection/ControlResults.vue";

export default {
  components: {
    MonitoringItem,
    ControlProperties,
    ControlResults,
  },
  props: {
    controlContent: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';
.control {
  position: relative;
  padding: 36px 0 90px;

  @include breakpoint(0, $lg) {
    padding: 46px 0 42px;
  }

  @include breakpoint(0, $md) {
    padding: 32px 0 50px;
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 22px;
    width: 100%;
    height: 538px;
    z-index: -1;
    background: linear-gradient(
      180deg,
      rgba(236, 240, 253, 0) 0%,
      rgba(236, 240, 253, 0.53) 14.32%,
      #ecf0fd 45.83%,
      rgba(236, 240, 253, 0.43) 84.33%,
      rgba(236, 240, 253, 0) 100%
    );
    opacity: 0.31;

    @include breakpoint(0, $lg) {
      display: none;
    }
  }

  &__heading {
    margin-bottom: 36px;
  }

  &__title {
    margin-bottom: 18px;
  }

  br {
    @include breakpoint(0, $lg) {
      display: none;
    }
  }

  &__features {
    margin-bottom: 36px;

    @include breakpoint(0, $md) {
      margin-bottom: 16px;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 44px;

    @include breakpoint(0, $lg) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }

    @include breakpoint(0, $md) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      grid-gap: 20px;
    }
  }

  &__row {
    display: flex;

    @include breakpoint(0, $lg) {
      flex-wrap: wrap;
    }
  }

  &__image {
    width: 236px;
    flex: none;
    text-align: center;
    margin-right: 6.8%; // 80 - 1170

    @include breakpoint(0, $lg) {
      margin: 0 auto 36px;
    }

    @include breakpoint(0, $md) {
      display: none;
    }

    img {
      max-width: 100%;
    }
  }

  &__content {
    position: relative;
    padding-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;

    @include breakpoint(0, $md) {
      padding-top: 0;
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 17px;
      width: 100%;
      width: calc(100% - 211px);
      height: 60px;
      background-repeat: no-repeat;
      -webkit-background-size: contain;
      background-size: contain;
      background-position: 0 0;
      background-image: url("data:image/svg+xml,%3Csvg width='629' height='43' viewBox='0 0 629 43' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.5 41.1951C0.5 42.0235 1.17157 42.6951 2 42.6951C2.82843 42.6951 3.5 42.0235 3.5 41.1951H0.5ZM615.958 38.7552C616.543 39.341 617.493 39.341 618.079 38.7552L627.625 29.2093C628.211 28.6235 628.211 27.6738 627.625 27.088C627.039 26.5022 626.089 26.5022 625.504 27.088L617.018 35.5733L608.533 27.088C607.947 26.5022 606.997 26.5022 606.412 27.088C605.826 27.6738 605.826 28.6235 606.412 29.2093L615.958 38.7552ZM3.5 41.1951V26H0.5V41.1951H3.5ZM26 3.5H593.018V0.5H26V3.5ZM615.518 26V37.6946H618.518V26H615.518ZM593.018 3.5C605.445 3.5 615.518 13.5736 615.518 26H618.518C618.518 11.9167 607.102 0.5 593.018 0.5V3.5ZM3.5 26C3.5 13.5736 13.5736 3.5 26 3.5V0.5C11.9167 0.5 0.5 11.9167 0.5 26H3.5Z' fill='%232B735D'/%3E%3C/svg%3E%0A");

      @include breakpoint(0, $md) {
        display: none;
      }
    }
  }

  &__properties {
    margin-right: 15px;

    @include breakpoint(0, $md) {
      display: flex;
      justify-content: space-between;
      margin-right: 0;
      width: 100%;
    }
  }

  &__property {
    &.list-unstyled {
      margin-bottom: 64px;

      @include breakpoint(0, $md) {
        margin-bottom: 0;
        margin-right: 48px;
      }

      @include breakpoint(0, $xs) {
        margin-right: 24px;
      }

      &:last-child {
        margin-bottom: 0;

        @include breakpoint(0, $md) {
          margin-right: 0;
        }
      }
    }
  }

  &__results {
    width: 394px;
    flex: none;

    @include breakpoint(0, $md) {
      display: none;
    }
  }
}
</style>
