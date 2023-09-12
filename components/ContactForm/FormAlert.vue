<template>
  <div class="alert" :class="submitStatus">
    <div class="alert__icon">
      <IconSend />
    </div>
    <div class="alert__text" v-html="statusText" />
  </div>
</template>

<script>
import IconSend from "../icons/IconSend.vue";
export default {
  components: { IconSend },
  props: {
    formType: {
      type: String,
      default: "contact",
    },
    submitStatus: {
      type: String,
      default: "sending",
    },
  },
  computed: {
    statusText() {
      switch (this.submitStatus) {
        case "success":
          if (this.formType === "newsletter") {
            return "<h4>Successfully Subscribed!</h4>";
          }
          return `
                <h4>Message has been sent</h4>
                <p>We will contact you shortly</p>
                `;
        case "noApiKey":
          return "<h4>No API Key provided</h4>";
        case "error":
          return `
                <h4>There has been error</h4>
                <p>Please, try again later</p>
                `;
        default:
          return "<h4>Sending...</h4>";
      }
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';

.alert {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 36px 26px;
  height: 100%;
  width: 100%;
  border-radius: 6px;
  z-index: 10;
  background-color: $white;
  text-align: center;

  &.error {
    path {
      stroke: $red !important;
    }
    path[fill^="#"] {
      fill: $red !important;
    }
  }

  &__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    margin-bottom: 36px;
    line-height: 1;

    @include breakpoint(0, $md) {
      width: 44px;
      height: 44px;
      margin-bottom: 26px;
    }

    svg {
      max-width: 100%;
    }
  }

  &__text {
    text-align: center;
    font-weight: 500;
    line-height: 1.1;
  }

  h4 {
    margin-bottom: 12px;
    line-height: 1.1;
  }
}
</style>
