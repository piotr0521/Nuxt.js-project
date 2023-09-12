<template>
<!--	<Head>-->
<!--		<Title>Prime Insights - Our Mission</Title>-->
<!--		<Meta name="description" content="Our Mission: Empowering Panelists. Learn more about why we believe the key to high-quality sample are happy panelists and what we do at Prime Insights to offer our panelists the best experience possible." />-->
<!--	</Head>-->
	<main class="our-mission">
		<PageTitle
			class="text-center"
			:subtitle="subtitle"
			:title="title"
			gradient-title
		/>
		<PanelistsSection :content="panelistsSectionContent" />
		<div class="cards">
			<div class="cards__container container">
				<h2 class="cards__title gradient-text text-center">
					How we create a great experience <br />
					for our panelists
				</h2>
				<div class="cards__list">
					<CardItem
						v-for="card in features"
						:key="card.iconLabel"
						:icon-label="card.iconLabel"
						:title="card.title"
						:text="card.text"
						class="cards__item"
					/>
				</div>
			</div>
		</div>
		<BannerSection :content="bannerContent" />
	</main>
</template>
<script>
import PageTitle from "~/components/PageTitle/PageTitle.vue";
import CardItem from "~/components/MissionContent/CardItem.vue";
import PanelistsSection from "~/components/MissionContent/PanelistsSection.vue";
import BannerSection from "~/components/BannerSection/BannerSection.vue";
import missionImage from "~/assets/images/panelists.png";

export default {
	components: {
		BannerSection,
		PanelistsSection,
		PageTitle,
		CardItem,
	},
	data() {
		return {
			subtitle: "Our Mission",
			title: "Empowering Panelists",
			panelistsSectionContent: {
				image: {
					src: missionImage,
					alt: "mission",
				},
				title: "Why clients must care about the panelists",
				text: "We want to keep our panelists happy and satisfied to provide you - our clients - with the highest quality sample. As a client, you want respondents to answer surveys out of curiosity and enjoyment. In order to collect high-quality data, it is crucial to offer panelists a fair and convenient experience. Our experience has shown that when we are respectful of respondents' time and experience, we can expect sincerity and attentiveness in return. At Prime Insights, we obsess about providing the best user experience possible.",
				note: {
					text: `<p>
                  <em>In order to collect high-quality data, it is crucial to offer panelists a fair and convenient experience.</em>
                </p>`,
					blockquote: true,
				},
			},
			features: [
				{
					iconLabel: "id-card",
					title: "Transparency",
					text: `
          <p>
            After a survey attempt, we redirect the respondent back to our panel and communicate the outcome to him regardless of whether it is a screen-out or a complete. Many panels use a router to keep a user in an endless loop until they can get a complete out of him. We do not employ a router as it encourages participants to give insincere responses to escape the router.
          </p>
          `,
				},
				{
					iconLabel: "megafone",
					title: "User Feedback",
					text: `
          <p>
            Each time a respondent enters a survey experience, we ask them for feedback on their experience. This includes drop-outs which are hard to gather feedback on for most panels. In the interest of our clients, we sustain an inventory of surveys providing a fair and pleasant user experience. We rigorously remove surveys from our panel that do not satisfy our requirements for user satisfaction.
          </p>
          `,
				},
				{
					iconLabel: "target",
					title: "Accurate matching",
					text: `
          <p>
            We accurately match panelists with surveys based on their profiles and the surveys’ qualifications and quotas. We do not send users into surveys they will most likely get screened-out from. Properly matched respondents have shown to be more focused and honest, hence producing a more accurate sample. We always deliver a representative unbiased sample based on our clients' requirements.
          </p>
          `,
				},
				{
					iconLabel: "timer",
					title: "Real-time survey data",
					text: `
          <p>
            We are constantly refreshing our survey data to ensure we send only panelists into active surveys they qualify for.
          </p>
          <p>
            Keeping qualifications and quotas continuously up-to-date ensures that each panelist has a fair chance to complete the survey he enters.
          </p>
          `,
				},
			],
			bannerContent: {
				title:
					"Our focus on the user experience goes hand in hand with our stringent requirements for excellent user quality.",
				text: `
        <p>
          Sincere and attentive users can expect a pleasant experience.
          Fraudulent or dishonest users and professional survey takers have no
          space in our panel.
        </p>
        <p>
          We employ an extensive range of algorithms, tools, and features to
          identify and remove such users.
        </p>
        `,
			},
		};
	},
  head() {
    return {
      title: 'Prime Insights - Our Mission',
      meta: [
        {
          hid: 'missionpage',
          name: 'description',
          content: 'Our Mission: Empowering Panelists. Learn more about why we believe the key to high-quality sample are happy panelists and what we do at Prime Insights to offer our panelists the best experience possible.'
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
<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';
.our-mission {
	.page-title {
		margin-top: 104px;
		margin-bottom: 12px;
		@include breakpoint(0, $md) {
			margin-top: 30px;
		}
	}

	.cards {
		position: relative;
		padding: 80px 0 36px;
		@include breakpoint(0, $md) {
			padding-top: 45px;
		}

		&:before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			width: 100%;
			height: 90%;
			z-index: -1;
			background: linear-gradient(180deg, #fafbff 0%, #ffffff 100%);
			@include breakpoint(0, $lg) {
				height: 100%;
			}
		}

		&__title {
			margin-bottom: 62px;
			font-size: 28px;
			font-weight: 600;
			line-height: 1.3;
			@include breakpoint(0, $md) {
				margin-bottom: 36px;
				font-size: 24px;
			}
		}

		&__list {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: auto auto;
			grid-gap: 36px;
			@include breakpoint(0, $md) {
				grid-template-columns: 1fr;
				grid-template-rows: auto;
				grid-gap: 24px;
			}
		}
	}
}
</style>
