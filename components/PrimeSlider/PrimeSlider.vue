<template>
  <div class="slider">
    <div class="slider__wrapper">
      <div
        class="slider__item slide"
        v-for="(slide, index) in screens"
        :key="slide.id"
        :class="{ active: isItemActive(index) }"
      >
        <div class="slide__image">
          <img :src="slide.src" :alt="slide.alt" />
        </div>
      </div>

      <ul v-if="flags && flags.length" class="slider__bullets list-unstyled">
        <li
          v-for="(flag, index) in flags"
          :key="flag.langCode"
          class="slider__bullet bullet"
          :class="{
            interactive: isItemInteractiveLang(flag.langCode),
            active: isItemActiveLang(flag.langCode),
          }"
          @click="setActive(flag.langCode)"
        >
          <svg
            class="bullet__progress"
            width="74"
            height="74"
            viewBox="0 0 74 74"
          >
            <circle fill="transparent" cx="37" cy="37" r="34"></circle>
          </svg>
          <svg class="bullet__bar" width="74" height="74" viewBox="0 0 74 74">
            <linearGradient
              :id="`radial-gradient-${index}`"
              x1="-3.60066e-07"
              y1="20.9032"
              x2="91.4677"
              y2="24.6655"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#164ED0" />
              <stop offset="1" stop-color="#F13870" />
            </linearGradient>
            <circle
              fill="transparent"
              cx="37"
              cy="37"
              r="34"
              :stroke="`url(#radial-gradient-${index})`"
              :style="{
                strokeDashoffset: barOffset,
                strokeDasharray: barOffsetConst,
              }"
            ></circle>
          </svg>
          <IconFlags class="bullet__flag" :icon-label="flag.langCode" />
          <span class="sr-only">{{ flag.langCode }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import IconFlags from "~/components/icons/IconFlags.vue";

export default {
  components: {
    IconFlags,
  },
  props: {
    screens: {
      type: Array,
      required: true,
    },
    flags: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      intervalSliders: null,
      intervalProgress: null,
      currentLang: "EN",
      current: 0,
      autoplayDelay: 5000,
      barWidth: 0,
      barOffset: 0,
      radius: 34,
    };
  },
  computed: {
    barOffsetConst() {
      return Math.PI * (this.radius * 2);
    },
  },
  methods: {
    setProgress() {
      /* Reset Data */
      this.barWidth = 0;
      this.barOffset = this.barOffsetConst;
      clearInterval(this.intervalProgress);
      clearInterval(this.intervalSliders);

      this.startLoop();

      this.intervalProgress = setInterval(() => {
        this.barWidth++;
        this.barOffset = this.barOffset - this.barOffsetConst / 100;

        if (this.barWidth >= 99) {
          clearInterval(this.intervalProgress);
        }
      }, this.autoplayDelay / 100);
    },
    previous() {
      this.current =
        Math.abs(this.screens.length + (this.current - 1)) %
        this.screens.length;
      this.setProgress();
    },
    next() {
      this.current = (this.current + 1) % this.screens.length;
      this.currentLang = this.screens[this.current].langCode;
      this.setProgress();
    },
    startLoop() {
      this.intervalSliders = setInterval(this.next, this.autoplayDelay);
    },
    endLoop() {
      this.barWidth = 0;
      this.barOffset = this.barOffsetConst;
      clearInterval(this.intervalProgress);
      clearInterval(this.intervalSliders);
    },
    isItemActive(index) {
      return this.current === index;
    },
    isItemActiveLang(langCode) {
      return this.currentLang === langCode;
    },
    isItemInteractiveLang(langCode) {
      const index = this.screens.findIndex((screen) => {
        return screen.langCode === langCode;
      });

      return index !== -1;
    },
    setActive(langCode) {
      const index = this.screens.findIndex((screen) => {
        return screen.langCode === langCode;
      });

      if (index !== -1 && this.currentLang !== langCode) {
        this.currentLang = langCode;
        this.current = index;
        this.setProgress();
      }
    },
  },
  created() {
    this.barOffset = this.barOffsetConst;
    this.currentLang = this.screens[0].langCode;
    this.startLoop();
    this.setProgress();
  },
  beforeUnmount() {
    this.endLoop();
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';
.slider {
  position: relative;

  &__wrapper {
    position: relative;
    margin: 0 auto;
    width: 235px;
    height: 500px;
    filter: drop-shadow(0px 1px 3px rgba(63, 63, 68, 0.15));

    @include breakpoint(0, $sm) {
      max-width: 231px;
      height: 490px;
    }
  }

  &__item {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s ease-in;

    &.active {
      opacity: 1;
      transition: opacity 0.5s ease-out;
    }
  }
}

.slide {
  &__image {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}

.bullet {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: -30px;
  bottom: 87px;
  width: 54px;
  height: 54px;
  background: $white;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  line-height: 1;

  &:nth-child(2) {
    bottom: auto;
    left: -27px;
    top: 106px;
  }

  &:nth-child(3) {
    left: auto;
    right: -35px;
    bottom: 55px;
  }

  &:nth-child(4) {
    bottom: auto;
    left: auto;
    right: -27px;
    top: 63px;
  }

  &:nth-child(5) {
    bottom: auto;
    left: auto;
    top: 160px;
    right: -20px;
  }

  &:nth-child(6) {
    bottom: 170px;
    left: -20px;
  }

  &:nth-child(7) {
    bottom: -25px;
    left: 50px;
  }

  &.interactive {
    cursor: pointer;
  }

  &.active {
    cursor: default;

    .bullet__progress {
      opacity: 1;
    }
    .bullet__bar {
      opacity: 1;
    }
  }

  &__progress {
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    width: 62px;
    height: 62px;
    vertical-align: top;
    z-index: 2;
    opacity: 0;
    stroke: $grey-600;
    stroke-width: 6px;
    stroke-linecap: round;
  }

  &__bar {
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    width: 62px;
    height: 62px;
    opacity: 0;
    z-index: 2;
    transform: rotate(-90deg);

    circle {
      stroke-width: 6px;
      stroke-linecap: round;
    }
  }

  &__flag {
    position: relative;
    max-width: 32px;
    height: auto;
    z-index: 5;
  }
}
</style>
