<template>
  <div v-if="heroContent" class="hero">
    <div class="hero__container container">
      <div class="hero__row">
        <div class="hero__content">
          <h1
            v-if="heroContent.title"
            class="hero__title main-title gradient-text"
            v-html="heroContent.title"
          />
          <div
            v-if="heroContent.text"
            class="hero__text"
            v-html="heroContent.text"
          />
          <div
            v-if="heroContent.actions && heroContent.actions.length"
            class="hero__actions"
          >
            <PrimeButton
              class="hero__button"
              v-for="action in heroContent.actions"
              :key="action.id"
              :caption="action.caption"
              :link="action.link"
              :styleType="action.styleType"
              :type="action.type"
              :target="action.target"
            />
          </div>
          <ul
            v-if="heroContent.statistics && heroContent.statistics.length"
            class="hero__statistics list-unstyled"
          >
            <StatisticItem
              v-for="statistic in heroContent.statistics"
              :key="statistic.iconLabel"
              :icon-label="statistic.iconLabel"
              :text="statistic.text"
              class="hero__statistic"
            />
          </ul>
        </div>
        <div
          v-if="heroContent.map && windowWidth > 767"
          class="hero__image hero__image--map"
        >
          <InteractiveMap
            :add-animation="heroContent.map.addAnimation"
            :frequency="heroContent.map.frequency"
            :animation-fade-in-duration="
              heroContent.map.animationFadeInDuration
            "
            :animation-fade-out-duration="
              heroContent.map.animationFadeOutDuration
            "
            :delay-range-start="heroContent.map.delayRangeStart"
            :delay-range-end="heroContent.map.delayRangeEnd"
          />
        </div>
        <div v-else-if="heroContent.image" class="hero__image">
          <img :src="heroContent.image" :alt="heroContent.imageAlt" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PrimeButton from "~/components//UI/PrimeButton.vue";
import StatisticItem from "~/components/HeroSection/StatisticItem.vue";
import InteractiveMap from "~/components/InteractiveMap/InteractiveMap.vue";

export default {
  components: {
    PrimeButton,
    StatisticItem,
    InteractiveMap,
  },
  props: {
    heroContent: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      windowWidth: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
    this.windowWidth = window.innerWidth;
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';
.hero {
  padding: 113px 0 61px;

  @include breakpoint(0, $xlg) {
    padding: 100px 0;
  }

  @include breakpoint(0, $lg) {
    padding: 30px 0 35px;
  }

  @include breakpoint(0, $md) {
    padding: 34px 0 20px;
  }

  &__row {
    display: flex;
    align-items: center;

    @include breakpoint(0, $lg) {
      flex-wrap: wrap;
    }
  }

  &__content {
    width: 52%;
    flex: none;

    @include breakpoint(0, $xl) {
      width: 50%;
    }

    @include breakpoint(0, $lg) {
      margin-bottom: 30px;
      width: 100%;
    }

    @include breakpoint(0, $md) {
      margin-bottom: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__image {
    width: 60%;
    //max-width: 665px;
    flex: none;
    text-align: center;
    line-height: 0;

    @include breakpoint(0, $xl) {
      width: 50%;
    }

    @include breakpoint(0, $lg) {
      width: 100%;
    }

    @include breakpoint(0, $md) {
      display: none;
    }

    img {
      max-width: 100%;
    }

    svg {
      max-width: 100%;
      height: auto;
    }
  }

  &__title {
    margin-bottom: 8px;

    @include breakpoint(0, $md) {
      margin-bottom: 16px;
    }

    &.main-title {
      @include breakpoint(0, $sm) {
        font-size: 26px;
      }
    }
  }

  &__text {
    margin-bottom: 24px;

    @include breakpoint(0, $md) {
      margin-bottom: 16px;
    }

    &:last-child {
      margin-bottom: 0;
    }

    br {
      @include breakpoint(0, $lg) {
        display: none;
      }
    }
  }

  &__actions {
    display: flex;
    margin-bottom: 64px;

    @include breakpoint(0, $lg) {
      margin-bottom: 48px;
    }

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

  &__statistics {
    display: flex;
    flex-wrap: wrap;
  }

  &__statistic {
    margin-right: 36px;
    margin-bottom: 12px;

    @include breakpoint(0, $md) {
      margin-right: 24px;
    }

    @include breakpoint(0, $sm) {
      margin-right: 16px;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
