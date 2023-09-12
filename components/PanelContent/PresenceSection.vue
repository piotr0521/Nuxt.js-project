<template>
  <div v-if="content" class="presence container text-center">
    <h2 
      v-if="content.title"
      class="presence__title gradient-text">
      {{ content.title }}
    </h2>

    <div class="presence__text" v-html="content.text"/>
    
    <div class="map-view">
      <img :src="mapSvg" alt="mapView">
    </div>

    <div class="continent-list">
      <div class="continent-list__item" v-for="item in content.continents">
        <h3 class="continent-list__name">{{ item.name }}</h3>
        <p class="continent-list__countries">{{ countryName(item.countries) }}</p>
      </div>
    </div>

    <div class="continent-mobile">
      <div v-for="item, index in content.continents" :key="index" class="continent-mobile__item">
        <div class="flag-list">
          <Flag v-for="{name, flag} in item.countries" :key="name" :flag="flag" />
        </div>
        <div class="name">{{ item.name }}</div>
        <div class="country-names">
          {{ countryName(item.countries) }}
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Flag from '~/components/flags/index.vue';
import mapSvg from '~/assets/images/Map1.svg';

export default {
  components: {
    Flag
  },
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      mapSvg
    }
  },
  methods: {
    countryName(list) {
      return list.map((obj) => obj.name).join(', ').replace(', others', ' and others');
    },
    countryFlag(list) {
      return list.map((obj) => obj.flag).join(', ');
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';

.presence {
  margin-top: 100px;
  
  &__title {
    font-family: $primary-font-family;
    font-size: 36px;
    font-weight: 600;
    line-height: normal;
    
    @include breakpoint(0, $sm) {
      font-size: 24px;
    }
  }

  &__text {
    color: $dark;
    text-align: center;
    font-family: $secondary-font-family;
    font-size: 18px;
    
    @include breakpoint(0, $sm) {
      font-size: 14px;
      padding: 0 12px;
    }
  }
  
  .map-view {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 64px;

    @include breakpoint(0, $md) {
      margin-top: 54px;
      display: none;
    }
  }

  .continent-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 76px 40px;
    text-align: start;
    margin-top: 64px;
    margin-bottom: 78px;
    
    @include breakpoint(0, $md) {
      margin-top: 46px;
      display: none;
    }

    &__name {
      color: $gray-900;
      font-family: $primary-font-family;
      font-size: 16px;
      font-weight: 600;
      line-height: 1.875;
      margin-bottom: 8px;
    }

    &__countries {
      color: $gray-600;
      font-family: $secondary-font-family;
      font-size: 18px;
      line-height: 1.5
    }

  }

  .flag-list {
    display: flex;
  }

  .continent-mobile {
    display: none;

    @include breakpoint(0, $md) {
      margin-top: 46px;
      display: grid;
      text-align: start;
    }

    &__item {
      padding-top: 24px;
      padding-bottom: 24px;
      border-bottom-width: 1px;
      border-bottom-style: solid;
      border-bottom-color: $grey-400;

      &:last-child {
        border-bottom: none;
      }

      .name {
        padding: 8px 0;
        color: $gray-900;
        font-family: $primary-font-family;
        font-size: 16px;
        font-weight: 600;
        line-height: 1.875;
      }

      .country-names {
        color: $gray-600;
        font-family: $secondary-font-family;
        font-size: 14px;
        line-height: 1.5;
      }
    }
  }
}
</style>