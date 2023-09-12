<template>
  <div v-if="flag" class="flag">
    <component :is="flagComponent" />
  </div>
</template>
<script>
export default {
  props: {
    flag: String,
    required: true
  },
  data() {
    return {

    }
  },
  computed: {
    flagComponent() {
      return () => import(`./${this.flag}.vue`);
    }
  }
}
</script>

<style lang="scss">
.flag {
  margin-right: 8px;
}
</style>