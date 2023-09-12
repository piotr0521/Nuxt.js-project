<template>
  <NuxtLink
    v-if="type === 'router'"
    class="btn"
    :class="`btn--${styleType}`"
    :to="link"
  >
    {{ caption }}
  </NuxtLink>
  <a
    v-else-if="type === 'url'"
    class="btn"
    :class="`btn--${styleType}`"
    :href="link"
    :target="target"
  >
    {{ caption }}
  </a>
  <button
    v-else-if="type === 'submit'"
    type="submit"
    class="btn btn--full"
    :class="{ 'btn--icon': hasIcon, [`btn--${styleType}`]: styleType }"
  >
    <span>{{ caption }}</span>
    <IconSubmit v-if="hasIcon" class="btn__icon" />
  </button>
  <button v-else class="btn" :class="`btn--${styleType}`">
    {{ caption }}
  </button>
</template>

<script>
import IconSubmit from "~/components/icons/IconSubmit.vue";

export default {
  components: {
    IconSubmit,
  },
  props: {
    caption: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: "#",
    },
    styleType: {
      type: String,
      default: "primary",
    },
    target: {
      type: String,
      default: "_self",
    },
    type: {
      type: String,
      default: "button",
    },
    hasIcon: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';
.btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  padding: 14px 35px;
  min-width: 146px;
  border-radius: 8px;
  cursor: pointer;
  color: $primary;
  font-family: $primary-font-family;
  background-color: transparent;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.15;
  text-transform: capitalize;
  outline: none;
  overflow: hidden;
  text-align: center;
  text-decoration: none;
  text-overflow: ellipsis;
  transition: all 0.2s ease;
  -webkit-user-select: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  z-index: 1;

  @include breakpoint(0, $md) {
    padding-left: 22px;
    padding-right: 22px;
  }

  &:hover,
  &:focus {
    text-decoration: none;
    color: rgba($black, 0.91);
  }

  &--primary {
    box-shadow: $box-shadow-button;
    background: $button-gradient;
    color: $white;

    &:hover,
    &:focus {
      background: $primary;
      color: $white;
    }
  }

  &--outline {
    border: 2px solid $primary;
    padding: 12px 30px;

    @include breakpoint(0, $md) {
      padding-left: 10px;
      padding-right: 10px;
    }

    &:hover,
    &:focus {
      background-color: $primary;
      color: $white;
    }
  }

  &--link {
    padding: 0;
    min-width: 30px;
    border-radius: 0;
  }

  &--full {
    width: 100%;
  }

  &__icon {
    margin-left: 10px;
    line-height: 1;
    width: 24px;
    height: auto;
  }
}
</style>
