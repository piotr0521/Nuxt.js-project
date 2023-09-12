<template>
  <ul class="socials list-unstyled">
    <li v-for="link in links" :key="link.label" class="socials__item">
      <a
        :href="link.url"
        class="socials__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="sr-only" v-text="link.label" />
        <IconSocials :icon-label="link.iconLabel" />
      </a>
    </li>
  </ul>
</template>

<script>
import IconSocials from "~/components/icons/IconSocials.vue";

export default {
  name: "SocialLinks",
  components: { IconSocials },
  data() {
    return {
      links: [
        {
          iconLabel: "linkedin",
          url: "https://www.linkedin.com/company/prime-insights-group/",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';
.socials {
  display: flex;
  justify-content: center;
  align-items: center;

  &__item {
    margin-right: 24px;
    line-height: 1;

    &:last-child {
      margin-right: 0;
    }
  }

  &__link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;

    svg {
      max-width: 100%;
    }
  }
}
</style>
