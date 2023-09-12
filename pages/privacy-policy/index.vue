<template>
	<main class="privacy-policy">
		<PageTitle :title="title" />
		<PageContent>
			<template #content>
				<PrivacyPolicyContent />
			</template>
		</PageContent>
	</main>
</template>

<script>
import PageTitle from "~/components/PageTitle/PageTitle.vue";
import PageContent from "~/components/PrivacyPolicyContent/PageContent.vue";
import PrivacyPolicyContent from "~/components/PrivacyPolicyContent/PrivacyPolicyContent.vue";

export default {
	components: {
		PageTitle,
		PageContent,
		PrivacyPolicyContent,
	},
	data() {
		return {
			title: "Privacy Policy",
		};
	},
  head() {
    return {
      title: 'Prime Insights - Privacy Policy',
      meta: [
        {
          hid: 'privacy-policy',
          name: 'description',
          content: 'Your privacy is important to us. It is Prime Insights\' policy to respect your privacy regarding any information we may collect from you across our website, primeinsights.com, and other sites we operate.'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://primeinsights.com' + this.$nuxt.$route.path,
        },
      ],
    }
  },
};
</script>
