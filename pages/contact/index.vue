<template>
<!--	<Head>-->
<!--		<Title>Prime Insights - Contact us</Title>-->
<!--		<Meta name="description" content="Get in touch and drop us a message right now. Request our Panel Book and our ESOMAR 37 Answers. One of our team members will reach out to you within 24 hours." />-->
<!--	</Head>-->
	<main class="contact-us">
		<PageTitle :title="title" gradient-title />
		<ContactInfo :contacts="contacts" :form-title="formTitle" />
	</main>
</template>

<script>
import PageTitle from "~/components/PageTitle/PageTitle.vue";
import ContactInfo from "~/components/ContactInfo/ContactInfo.vue";

export default {
	components: {
		PageTitle,
		ContactInfo,
	},
	data() {
		return {
			title: "Contact Us",
			formTitle: "Drop us a message!",
			contacts: [
				{
					iconLabel: "address",
					caption: "Address",
					text: `
                 Prime Insights Group LLC, 8 The Green Ste R <br>
                 Dover, DE 19902, United States
            `,
				},
			],
		};
	},
  head() {
    return {
      title: 'Prime Insights - Contact us',
      meta: [
        {
          hid: 'contactpage',
          name: 'description',
          content: 'Get in touch and drop us a message right now. Request our Panel Book and our ESOMAR 37 Answers. One of our team members will reach out to you within 24 hours.'
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
