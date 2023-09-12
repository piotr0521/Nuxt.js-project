<template>
  <div class="results">
    <h3 class="results__title" v-html="title" />
    <div v-if="text" class="results__text" v-html="text" />
    <ul class="results__list list-unstyled">
      <ResultsItem
        v-for="item in items"
        :key="item.id"
        :name="item.name"
        :percent="item.percent"
        :hex-color="item.hexColor"
        class="results__item"
      />
    </ul>
    <div v-if="total" class="results__total" v-html="total" />
  </div>
</template>

<script>
import ResultsItem from "./ResultsItem.vue";

export default {
  components: { ResultsItem },
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
    },
    total: {
      type: String,
    },
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';
.results {
  padding: 24px;
  box-shadow: 0px 1px 3px rgba(63, 63, 68, 0.15),
    0px 0px 0px 1px rgba(63, 63, 68, 0.05);
  border-radius: 24px;
  background-color: $white;

  &__title {
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 18px;
  }

  &__text {
    margin-bottom: 16px;
    font-weight: 500;
    line-height: 1.25;
    color: $grey-text;
    font-size: 14px;
  }

  &__list {
    &.list-unstyled {
      margin-bottom: 16px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__total {
    font-weight: 600;
    font-size: 14px;
    color: $dark;
  }

  &__item {
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
