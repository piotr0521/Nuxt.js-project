<template>
  <div class="team-member">
    <div class="team-member__image" :class="{ placeholder: !image }">
      <img v-if="image" :src="image" :alt="name" />
      <IconAvatar v-else />
    </div>

    <div class="team-member__content">
      <div class="team-member__title">
        <h3 class="team-member__name" v-text="name" />

        <a
          v-if="linkedin"
          class="team-member__link"
          :href="linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="sr-only">Go to {{ name }} Linkedin profile</span>
          <IconLinkedin />
        </a>
      </div>

      <div class="team-member__position" v-text="position" />
    </div>
  </div>
</template>

<script>
import IconLinkedin from "~/components/icons/IconLinkedin.vue";
import IconAvatar from "~/components/icons/IconAvatar.vue";

export default {
  components: { IconLinkedin, IconAvatar },
  props: {
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    linkedin: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';
.team-member {
  &__image {
    @include image-wrapper(105%);
    margin-bottom: 10px;
    border-radius: 6px;

    @include breakpoint(0, $md) {
      border-radius: 4px;
    }

    &.placeholder {
      background-color: $grey-300;

      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -27px;
        margin-left: -27px;
        width: 55px;
        height: 54px;
      }
    }
  }

  &__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4px;

    @include breakpoint(0, $md) {
      margin-bottom: 2px;
    }
  }

  &__name {
    margin-bottom: 0;
    font-weight: 600;
    font-size: 18px;

    @include breakpoint(0, $lg) {
      font-size: 16px;
    }

    @include breakpoint(0, $md) {
      font-size: 14px;
    }
  }

  &__link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: none;
    margin-left: 4px;
    width: 28px;
    height: 28px;
    line-height: 1;

    svg {
      max-width: 28px;
    }
  }

  &__position {
    font-size: 16px;
    color: $grey-text;
    font-weight: 500;

    @include breakpoint(0, $lg) {
      font-size: 14px;
    }

    @include breakpoint(0, $md) {
      font-size: 12px;
    }
  }
}
</style>
