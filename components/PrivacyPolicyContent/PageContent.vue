<template>
  <div class="page-content">
    <div class="page-content__container container">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';
.page-content {
  margin-bottom: 128px;
  color: $dark;
  font-size: 15px;

  @include breakpoint(0, $lg) {
    margin-bottom: 64px;
  }

  @include breakpoint(0, $md) {
    margin-bottom: 44px;
  }

  &__code {
    border: 1px solid $secondary;
    margin-bottom: 1rem;
    padding: 10px 20px;
    background-color: $grey;
    white-space: pre-line;
    word-break: break-all;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2em;
    margin-bottom: 1.4em;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  h3 {
    font-size: 16px;
  }

  h4 {
    margin-top: 0;
    margin-bottom: 0;
    font-size: inherit;
    font-weight: 600;
  }

  a {
    color: inherit;
    text-decoration: underline;
  }

  b,
  strong {
    font-weight: 600;
  }

  ul {
    margin-top: 0;
    margin-bottom: 1.4em;
    padding-left: 18px;
  }
}
</style>
