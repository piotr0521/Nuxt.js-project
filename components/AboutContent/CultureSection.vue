<template>
  <div class="culture">
    <div class="culture__container container">
      <div class="culture__row">
        <div class="culture__content">
          <ul
            v-if="content.statistics"
            class="culture__statistics list-unstyled"
          >
            <li
              class="culture__data"
              v-for="statistic in content.statistics"
              :key="statistic.data"
            >
              <h4 v-text="statistic.data" />
              <span v-text="statistic.description" />
            </li>
          </ul>
          <h3
            v-if="content.title"
            class="culture__title"
            v-text="content.title"
          />
          <div
            class="culture__text"
            v-if="content.text"
            v-html="content.text"
          />
        </div>
        <div v-if="content.image" class="culture__image">
          <img :src="content.image.src" :alt="content.image.alt" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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

.culture {
  position: relative;
  padding: 84px 0 64px;

  @include breakpoint(0, $md) {
    padding-top: 45px;
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

  &__container {
    position: relative;
    z-index: 10;
  }

  &__row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }

  &__content {
    width: 43.4%; // 508 - 1170

    @include breakpoint(0, $lg) {
      margin-bottom: 44px;
      width: 100%;
    }
  }

  &__image {
    width: 35.9%; // 420 - 1170
    max-width: 420px;

    @include breakpoint(0, $lg) {
      margin-left: auto;
      margin-right: auto;
      width: 100%;
    }
  }

  &__statistics {
    margin-bottom: 54px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 15px;

    @include breakpoint(0, $md) {
      margin-bottom: 36px;
    }
  }

  &__data {
    h4 {
      margin-bottom: 4px;
      font-size: 36px;
      font-weight: 600;
      line-height: 1.5;
      color: $dark;
    }

    span {
      font-weight: 400;
      font-size: 18px;
    }
  }

  &__title {
    margin-bottom: 0;
    font-size: 18px;
    line-height: 1.5;
    font-weight: 600;

    @include breakpoint(0, $md) {
      font-size: 20px;
    }
  }

  &__text {
    font-size: 16px;
    line-height: 1.5;
    color: $dark;
  }
}
</style>
