<template>
  <nav class="menu">
    <NuxtLink class="menu__link" to="/">
      Home
    </NuxtLink>
    <NuxtLink
      class="menu__link"
      to="/mission"
    >
      Our Mission
    </NuxtLink>
    <NuxtLink class="menu__link" to="/panel">
      Our Panel
    </NuxtLink>
    <NuxtLink class="menu__link" to="/about">
      About Us
    </NuxtLink>
  </nav>
</template>

<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';

.menu {
  display: flex;
  @include breakpoint(0, $lg) {
    flex-direction: column;
    align-items: flex-start;
  }
  &__link {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin: 0 22px;
    padding: 12px 0;
    color: $dark;
    font-family: $primary-font-family;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.2;
    transition: color 0.2s ease;
    white-space: nowrap;
    text-decoration: none;
    @include breakpoint(0, $lg) {
      margin: 0 0 36px;
      padding: 0 0 12px;
      font-size: 22px;
      line-height: 1.05;
    }
    &.nuxt-link-exact-active,
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
      transition: opacity 0.2s linear;
    }
  }
}
</style>
