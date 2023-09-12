<template>
  <div class="contacts">
    <div class="contacts__container container">
      <div class="contacts__row">
        <ContactForm class="contacts__form" :form-title="formTitle" />
        <div class="contacts__info">
          <ul class="contacts__list list-unstyled">
            <li
              class="contacts__list-item contact"
              v-for="contact in contacts"
              :key="contact.iconLabel"
            >
              <IconContacts
                class="contact__icon"
                :icon-label="contact.iconLabel"
              />
              <div class="contact__data">
                <h3 class="contact__caption caption" v-text="contact.caption" />
                <div class="contact__text" v-html="contact.text" />
              </div>
            </li>
          </ul>
          <div class="contacts__map">
            <img :src="mapImage" alt="map" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from "~/components/ContactForm/ContactForm.vue";
import IconContacts from "~/components/icons/IconContacts.vue";
import mapImage from "~/assets/images/map-contact.svg";

export default {
  components: {
    ContactForm,
    IconContacts,
  },
  props: {
    formTitle: {
      type: String,
    },
    contacts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      mapImage,
    };
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';
.contacts {
  padding: 10px 0 90px;

  @include breakpoint(0, $lg) {
    padding-bottom: 64px;
  }

  @include breakpoint(0, $md) {
    padding-top: 0;
    padding-bottom: 44px;
  }

  &__row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
  }

  &__form {
    width: 530px;
    margin-right: 15px;
    max-width: 100%;
    flex: none;

    @include breakpoint(0, $lg) {
      order: -1;
      margin: 0 auto 54px;
    }

    &.form {
      @include breakpoint(0, $lg) {
        padding: 0;
        background-color: transparent;
        box-shadow: none;
        border-radius: 0;
      }
    }

    .form__title {
      @include breakpoint(0, $lg) {
        display: none;
      }
    }
  }

  &__info {
    width: 46%; // 540 - 1170
    max-width: calc(100% - 545px);

    @include breakpoint(0, $lg) {
      margin: 0 auto;
      width: 530px;
      max-width: 100%;
    }
  }

  &__list {
    margin-bottom: 54px;

    @include breakpoint(0, $md) {
      margin-bottom: 0;
    }
  }

  &__map {
    @include breakpoint(0, $md) {
      display: none;
    }
  }

  &__list-item {
    margin-bottom: 45px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__map {
    img {
      width: 100%;
    }
  }
}

.contact {
  margin-bottom: 54px;
  display: flex;

  @include breakpoint(0, $md) {
    margin-bottom: 44px;
  }

  &:last-child {
    margin-bottom: 0;
  }

  br {
    @include breakpoint(0, $md) {
      display: none;
    }
  }

  &__icon {
    flex: none;
    margin-right: 12px;
    width: 32px;
    height: 32px;
    line-height: 1;
  }

  &__caption {
    margin-bottom: 8px;

    &.caption {
      line-height: 32px;
    }
  }

  &__text {
    font-size: 16px;
    font-weight: 500;
  }

  a {
    color: inherit;

    &:hover {
      color: $primary;
    }
  }
}
</style>
