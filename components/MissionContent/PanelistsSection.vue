<template>
  <div class="panelist-section">
    <div class="panelist-section__container container">
      <div class="panelist-section__row">
        <div v-if="content.image" class="panelist-section__image-wrapper">
          <div class="panelist-section__image">
            <img :src="content.image.src" :alt="content.image.alt" />
          </div>
        </div>
        <div class="panelist-section__content">
          <h2
            v-if="content.title"
            class="panelist-section__title heading"
            v-html="content.title"
          />
          <p
            class="panelist-section__text"
            v-if="content.text"
            v-text="content.text"
          />
          <NoteItem
            v-if="content.note"
            class="panelist-section__note"
            :text="content.note.text"
            :blockquote="content.note.blockquote"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NoteItem from "~/components/NoteItem/NoteItem.vue";

export default {
  components: { NoteItem },
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';
.panelist-section {
  padding: 60px 0 84px;

  @include breakpoint(0, $md) {
    padding: 12px 0 0;
  }

  &__row {
    display: flex;
    justify-content: space-between;

    @include breakpoint(0, $lg) {
      flex-wrap: wrap;
    }
  }

  &__image-wrapper {
    flex: none;
    width: 43.4%; // 508 - 1170
    margin-right: 2%;
    max-width: 508px;

    @include breakpoint(0, $lg) {
      margin: 0 auto 24px;
      width: 100%;
    }
  }

  &__content {
    padding-top: 36px;

    @include breakpoint(0, $lg) {
      padding-top: 0;
    }
  }

  &__image {
    @include image-wrapper(100%);
  }

  &__title {
    margin-bottom: 22px;
    font-size: 22px;

    @include breakpoint(0, $md) {
      font-size: 20px;
    }
  }

  &__text {
    font-family: $secondary-font-family;
    font-size: 18px;

    @include breakpoint(0, $md) {
      font-size: 16px;
    }
  }

  &__note {
    margin-top: 50px;

    @include breakpoint(0, $md) {
      margin-top: 22px;
    }
  }
}
</style>
