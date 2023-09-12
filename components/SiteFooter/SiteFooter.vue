<template>
  <footer class="site-footer">
    <div class="site-footer__container container">
      <div class="site-footer__row">
        <div class="site-footer__col">
          <p class="site-footer__copy">
            &copy; {{ date.getFullYear() }} PrimeInsights. All rights reserved.
          </p>
        </div>

        <div class="site-footer__col">
          <ul class="site-footer__menu list-unstyled">
            <li>
              <NuxtLink :to="policyUrl">Privacy Policy</NuxtLink>
            </li>

            <li>
              <NuxtLink to="/contact">Contact</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="site-footer__col site-footer__col--actions">
          <a
             class="site-footer__logo"
             href="https://community.esomar.org/web/mmark_corporate/validation.php?id=1778"
             target="_blank"
             rel="noopener noreferrer">
            <span class="sr-only">ESOMAR Corporate</span>
            <img :src="esomarLogo" alt="ESOMAR Corporate" width="107" height="38">
          </a>
          <SocialLinks class="site-footer__socials" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import SocialLinks from "~/components/SiteFooter/SocialLinks.vue";
import policyTranslations from "~/components/PrivacyPolicyContent/translations"
import esomarLogo from "~/assets/images/ESOMAR-logo.png";

export default {
  components: {
    SocialLinks,
  },
  data() {
    return {
      date: new Date(),
      policyUrl: '',
      esomarLogo,
    };
  },
  mounted() {
    const language =  navigator.language.length > 2
      ? navigator.language.slice(0, 2)
      : navigator.language;

    this.policyUrl  = language !== "en" && policyTranslations[language]
      ? `/${language}/privacy-policy`
      : "/privacy-policy";
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';
.site-footer {
  padding: 28px 0;
  color: $white;
  background-color: $secondary;
  font-size: 14px;
  line-height: 1.7;

  @include breakpoint(0, $lg) {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  &__row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-right: -15px;
    margin-left: -15px;

    @include breakpoint(0, $lg) {
      justify-content: center;
    }
  }

  &__col {
    padding: 0 15px;
    //width: 33.33%;

    @include breakpoint(0, $lg) {
      margin-bottom: 22px;
      width: 50%;
    }

    @include breakpoint(0, $md) {
      width: 100%;
    }

    &:first-child {
      @include breakpoint(0, $lg) {
        width: 100%;
        text-align: center;
      }
    }

    &:last-child {
      @include breakpoint(0, $lg) {
        margin-bottom: 0;
      }
    }

    &--actions {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      @include breakpoint(0, $lg) {
        justify-content: center;
      }
    }
  }

  &__menu {
    display: flex;
    justify-content: center;
    margin: 0 -12px;

    li {
      padding: 0 12px;
    }

    a {
      color: $white;
      text-decoration: none;

      &:hover,
      &:focus {
        color: $grey;
        text-decoration: underline;
      }
    }
  }

  &__socials {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @include breakpoint(0, $md) {
      justify-content: center;
    }
  }

  &__logo {
    margin-right: 36px;
    line-height: 1;

    @include breakpoint(0, $md) {
      margin-right: 26px;
    }
  }
}
</style>
