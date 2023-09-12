<template>
  <div class="team">
    <div class="team__container container">
      <PageTitle
        class="team__title text-center"
        :subtitle="content.subtitle"
        :title="content.title"
        gradient-title
        secondary-title
      />
      <div v-if="content.team" class="team__row">
        <TeamMember
          class="team__member"
          v-for="teamMember in content.team"
          :key="teamMember.name"
          :name="teamMember.name"
          :position="teamMember.position"
          :image="teamMember.image"
          :linkedin="teamMember.linkedin"
        />
      </div>
    </div>
  </div>
</template>
<script>
import PageTitle from "~/components/PageTitle/PageTitle.vue";
import TeamMember from "~/components/AboutContent/TeamMember.vue";
export default {
  components: {
    PageTitle,
    TeamMember,
  },
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
.team {
  padding: 64px 0 96px;

  @include breakpoint(0, $md) {
    padding: 44px 0 54px;
  }

  &__title {
    &.page-title {
      margin-top: 0;
      margin-bottom: 44px;
    }
  }

  &__row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 44px 23px;

    @include breakpoint(0, $lg) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto;
    }

    @include breakpoint(0, $md) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      grid-gap: 36px 20px;
    }
  }
}
</style>
