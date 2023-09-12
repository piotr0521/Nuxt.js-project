<template>
  <div class="content-item" :class="{ 'content-item--lg': lgSize }">
    <div class="content-item__heading">
      <IconContent class="content-item__icon" :icon-label="iconLabel" />
      <h4 class="content-item__title" v-html="title" />
    </div>

    <div class="content-item__content">
      <div class="content-item__text" v-html="text" />
    </div>
  </div>
</template>

<script>
import IconContent from "~/components/icons/IconCards.vue";

export default {
  components: { IconContent },
  props: {
    iconLabel: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    lgSize: {
      type: Boolean,
      required: false,
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';
.content-item {
  &--lg {
    .content-item__icon {
      width: 44px;
      height: 44px;
    }

    .content-item__heading {
      margin-bottom: 22px;
    }

    .content-item__title {
      font-size: 22px;

      @include breakpoint(0, $sm) {
        font-size: 20px;
      }
    }

    .content-item__text {
      font-size: 16px;
    }
  }

  &__heading {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
  }

  &__icon {
    flex: none;
    margin-right: 12px;
    width: 32px;
    height: 32px;
    line-height: 1;
  }

  &__title {
    font-size: 14px;
    line-height: 1.2;
    font-weight: 700;
  }

  &__text {
    font-size: 13px;
  }
}
</style>
