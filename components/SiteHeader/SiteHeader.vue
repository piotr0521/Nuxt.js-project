<template>
  <header class="site-header">
    <div class="site-header__container container">
      <div class="site-header__row">
        <div class="site-header__logo">
          <NuxtLink class="site-header__link" to="/">
            <IconLogo />
          </NuxtLink>
        </div>

        <HeaderMenu class="site-header__menu" />

        <HeaderActions class="site-header__actions" />

        <button
          class="site-header__burger burger btn btn--link"
          :class="{ active: menuOpen }"
          @click="openMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          class="site-header__mobile-menu mobile-menu"
          :class="{ active: menuOpen }"
        >
          <button
            class="mobile-menu__burger burger btn btn--link"
            :class="{ active: menuOpen }"
            @click="closeMenu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <HeaderMenu class="mobile-menu__menu"/>

          <HeaderActions
            class="mobile-menu__actions"
            type-link
          />
        </div>

        <div
          v-if="menuOpen"
          class="mobile-menu__overlay"
          :class="{ active: menuOpen }"
          @click="closeMenu"
        />
      </div>
    </div>
  </header>
</template>

<script>
import HeaderMenu from "~/components/SiteHeader/HeaderMenu.vue";
import HeaderActions from "~/components/SiteHeader/HeaderActions.vue";
import IconLogo from "~/components/icons/IconLogo.vue";

export default {
  components: {
    IconLogo,
    HeaderMenu,
    HeaderActions,
  },
  data() {
    return {
      menuOpen: false,
    };
  },
  watch: {
    '$route' () {
      this.closeMenu();
    }
  },
  methods: {
    closeMenu() {
      this.menuOpen = false;
    },
    openMenu() {
      this.menuOpen = true;
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';
.site-header {
  top: 0;
  padding: 40px 0 20px;
  width: 100%;
  z-index: 99;

  @include breakpoint(0, $md) {
    padding-top: 36px;
    padding-bottom: 10px;
  }

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    max-width: 173px;
    display: flex;
    align-items: center;

    @include breakpoint(0, $md) {
      max-width: 152px;
    }

    a {
      display: inline-flex;
      align-items: center;
      width: 100%;
      height: 100%;
    }

    svg,
    img {
      width: 100%;
      height: auto;
    }
  }

  &__menu {
    margin: 0 auto;

    @include breakpoint(0, $lg) {
      display: none !important;
    }
  }

  &__actions {
    @include breakpoint(0, $lg) {
      display: none !important;
    }
  }

  .burger {
    position: relative;
    display: none;
    border: 1px solid $primary;
    border-radius: 8px;
    padding: 0;
    height: 44px;
    width: 44px;
    min-width: 25px;
    background-color: transparent;
    z-index: 10;
    overflow: visible;

    @include breakpoint(0, $lg) {
      display: flex;
    }

    span {
      display: inline-flex;
      vertical-align: middle;
      transition: all 0.2s ease;
      position: absolute;
      left: 50%;
      margin-left: -9px;
      top: 14px;
      height: 2px;
      width: 18px;
      background-color: $primary;
      cursor: pointer;

      &:nth-child(2) {
        top: 21px;
      }

      &:nth-child(3) {
        top: 28px;
      }
    }

    &.active {
      span {
        top: 21px;

        &:nth-child(1) {
          transform: rotate(45deg);
        }

        &:nth-child(2) {
          display: none;
        }

        &:nth-child(3) {
          transform: rotate(-45deg);
        }
      }
    }
  }

  .mobile-menu {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    max-width: 337px;
    padding-top: 40px;
    padding-bottom: 40px;
    margin-left: auto;
    background-color: $white;
    height: 100%;
    transform: translateX(100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease;
    flex-direction: column;

    @include breakpoint(0, $lg) {
      display: flex;
    }

    @include breakpoint(0, $md) {
      padding-top: 36px;
    }

    &.active {
      transform: translateX(0);
      z-index: 100;
      opacity: 1;
      visibility: visible;
      overflow-y: auto;
    }

    &__burger {
      flex: none;
      margin-left: auto;
      margin-bottom: 24px;
      margin-right: 20px;
    }

    &__menu {
      padding-left: 36px;
      padding-right: 36px;
      margin-bottom: 36px;
      border-bottom: 1px solid $grey-400;
    }

    &__actions {
      align-items: flex-start;
      padding-left: 36px;
      padding-right: 36px;

      .actions__button {
        padding-bottom: 12px;
        color: $dark;
        font-family: $primary-font-family;
        font-weight: 500;
        font-size: 22px;
        line-height: 1.05;

        &.router-link-exact-active,
        &:hover,
        &:focus {
          font-weight: 600;
          color: $primary;
          text-decoration: none;

          &:before {
            opacity: 1;
          }
        }

        &:before {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background-color: $primary;
          opacity: 0;
          transition: opacity 0.2s ease;
        }
      }
    }

    &__overlay {
      display: none;
      background: rgba(0, 0, 0, 0.7);
      opacity: 0;
      width: 100%;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 99;

      @include breakpoint(0, $lg) {
        display: block;
      }

      &.active {
        opacity: 1;
        transition: opacity 0.3s linear;
      }
    }
  }
}
</style>
