<template>
  <li class="result">
    <div class="result__data">
      <span class="result__name" v-text="name" />
      <span class="result__percent" v-text="`${percent}%`" />
    </div>
    <div class="result__progress">
      <div
        class="result__bar"
        :style="{ width: `${barWidth}%`, backgroundColor: `${hexColor}` }"
      />
    </div>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    percent: {
      type: Number,
      required: true,
    },
    hexColor: {
      type: String,
    },
  },
  computed: {
    barWidth() {
      if (this.percent > 100) {
        return 100;
      }
      return this.percent;
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';
.result {
  &__data {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.28;
    font-family: $secondary-font-family;
    color: $dark;
  }

  &__name {
    margin-right: 10px;
  }

  &__progress {
    position: relative;
    border-radius: 12px;
    background-color: $grey-500;
    height: 6px;
    overflow: hidden;
  }

  &__bar {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 0;
    border-radius: 12px;
    background-color: $dark;
    transition: width 0.2s ease-in;
  }
}
</style>
