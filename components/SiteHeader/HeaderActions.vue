<template>
  <div class="actions">
    <PrimeButton
      v-for="action in actions"
      :key="action.id"
      class="actions__button"
      :caption="action.caption"
      :link="action.link"
      :style-type="action.styleType"
      :type="action.type"
      :target="action.target"
    />
  </div>
</template>

<script>
import PrimeButton from "~/components/UI/PrimeButton.vue";

export default {
  components: {
    PrimeButton,
  },
  props: {
    typeLink: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      actions: [
        {
          id: 1,
          caption: "contact us",
          link: "/contact",
          styleType: this.typeLink ? "link" : "outline",
          type: "router",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';
.actions {
  display: flex;

  @include breakpoint(0, $xlg) {
    flex-direction: column;
    align-items: center;
  }

  &__button {
    margin-right: 20px;

    @include breakpoint(0, $md) {
      min-width: 113px;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
