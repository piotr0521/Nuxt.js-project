<template>
  <ul class="properties list-unstyled" :class="`properties--${type}`">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="properties__item"
      :class="type"
    >
      <div class="properties__icon">
        <IconCheck v-if="type === 'pros'" />
        <IconDiffer v-else />
      </div>
      <span>{{ item }}</span>
    </li>
  </ul>
</template>

<script>
import IconCheck from "../icons/IconCheck.vue";
import IconDiffer from "../icons/IconDiffer.vue";

export default {
  components: {
    IconCheck,
    IconDiffer,
  },
  props: {
    type: {
      type: String,
      default: "pros",
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
.properties {
  &--pros {
    font-weight: 600;

    @include breakpoint(0, $md) {
      width: max-content;
      flex: none;
      max-width: 200px;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    font-weight: 600;
    line-height: 1.2;
    font-size: 14px;
    color: $dark;

    @include breakpoint(0, $md) {
      font-size: 12px;
    }

    &:last-child {
      margin-bottom: 0;
    }

    &.pros {
      position: relative;

      &:last-child {
        .properties__icon {
          &:before {
            display: none;
          }
        }
      }

      .properties__icon {
        position: relative;

        &:before {
          content: "";
          position: absolute;
          top: 100%;
          top: calc(100% + 3px);
          left: 50%;
          transform: translateX(-50%);
          width: 3px;
          height: 18px;
          border-radius: 50px;
          background-color: inherit;

          @include breakpoint(0, $md) {
            display: none;
          }
        }
      }
    }

    &.cons {
      margin-bottom: 12px;
      font-weight: 500;

      &:last-child {
        margin-bottom: 0;
      }

      .properties__icon {
        background-color: rgba($red, 0.12);

        svg {
          max-width: 18px;
        }
      }
    }
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: none;
    margin-right: 12px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: $green;

    @include breakpoint(0, $md) {
      margin-right: 8px;
      width: 28px;
      height: 28px;
    }

    svg {
      max-width: 24px;

      @include breakpoint(0, $md) {
        max-width: 18px;
      }
    }
  }
}
</style>
