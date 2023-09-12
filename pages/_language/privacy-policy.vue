<template>
  <main class="privacy-policy">
    <PageTitle :title="title" />
    <PageContent>
      <template #content>
        <NuxtDynamic :component="component"/>
      </template>
    </PageContent>
  </main>
</template>

<script>
import PageTitle from "~/components/PageTitle/PageTitle.vue";
import PageContent from "~/components/PrivacyPolicyContent/PageContent.vue";
import policyTranslated from "~/components/PrivacyPolicyContent/translations";

export default {
  components: {
    PageTitle,
    PageContent,
  },
  asyncData({params, redirect}) {
    const language = params.language;
    if (language) {
      const translatedPolicy = policyTranslated[language]
      if(translatedPolicy) {
        return {
          component:translatedPolicy.component,
          title: translatedPolicy.title,
          head: translatedPolicy.head
        }
      } else {
        redirect('/privacy-policy')
      }
    }
  },
  head() {
    return {
      title: this.head.title,
      meta: [
        {
          hid: this.head.meta.hid,
          name: this.head.meta.hid,
          content: this.head.meta.content
        }
      ],
    };
  },
};
</script>
