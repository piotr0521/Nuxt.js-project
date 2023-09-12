<template>
  <div class="opinion">
    <div v-if="content" class="opinion__container container">
      <h2
        v-if="content.title"
        class="opinion__title gradient-text"
        v-html="content.title" 
        />
      <p v-if="content.subtitle" class="opinion__subtitle" v-text="content.subtitle" />
      <div class="opinion__row">
        <div class="opinion__cards">
					<CardItem
						v-for="card in content.cards"
						:key="card.iconLabel"
						:icon-label="card.iconLabel"
						:title="card.title"
						:text="card.text"
						class="opinion__item text-center"
					/>
        </div>
        <div class="opinion__phone" :style="{backgroundImage: `url(${blobSvg})`}">
          <img :src="iPhoneImg" class="img-iphone" alt="iPhone Image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import blobSvg from '~/assets/images/Blob.svg';
import iPhoneImg from '~/assets/images/iPhone_12.svg';

import CardItem from "~/components/PanelContent/CardItem.vue";

export default {
  components: {
    CardItem
  },
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      blobSvg,
      iPhoneImg
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';

.opinion {
  align-items: center;

  @include breakpoint(0, $sm) {
    margin-bottom: 128px;
  }
  
  &__title {
    font-size: 28px;
  }

  &__subtitle {
    color: $dark;
    font-family: $secondary-font-family;
    font-size: 18px;
  }

  &__row {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 512px;
    grid-template-rows: auto auto;
    grid-gap: 0 96px;
    margin-top: 60px;

    @include breakpoint(0, $lg) {
      justify-content: center;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }
    
    @include breakpoint(0, $sm) {
      grid-gap: 63px;
    }
  }
  
  &__cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 64px 32px;
    margin-bottom: 12px;

    @include breakpoint(0, $sm) {
      grid-template-columns: 1fr;
      grid-gap: 24px;
    }

  }
  
  &__phone {
    display: flex;
    justify-content: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;

    @include breakpoint($sm, $lg) {
      background-size: auto;
      margin-bottom: 128px;
    }
  }

  .img-iphone {
    @include breakpoint(0, $sm) {
      width: 75%;
    }
  }

  .card {
    &__text {
      @include breakpoint(0, $sm) {
        font-size: 16px;
      }
    }
  }
}
</style>