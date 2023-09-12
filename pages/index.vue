<template>
<!--	<Head>-->
<!--		<Title>Prime Insights - Quality Panelists for meaningful insights</Title>-->
<!--		<Meta name="description" content="Quality Market Research at scale. Prime Insights connects you with real respondents worldwide for meaningful insights. Get high-quality sample worldwide." />-->
<!--	</Head>-->

	<main class="home">
		<HeroSection :hero-content="heroContent" />
		<FeaturesSection :features-content="featuresContent" />
		<ControlSection :control-content="controlContent" />
		<ReachSection :reach-content="reachContent" />
		<MarketplacesSection :marketplaces-content="marketplacesContent" />
		<CtaSection id="contact-us" :cta-content="ctaContent" />
	</main>
</template>

<script>
import HeroSection from "@/components/HeroSection/HeroSection.vue";
import FeaturesSection from "@/components/FeaturesSection/FeaturesSection.vue";
import ControlSection from "@/components/ControlSection/ControlSection.vue";
import ReachSection from "@/components/ReachSection/ReachSection.vue";
import MarketplacesSection from "@/components/MarketplacesSection/MarketplacesSection.vue";
import CtaSection from "@/components/CtaSection/CtaSection.vue";
import UserQualified from "~/assets/images/UserQualified.png";
import logoInnovateMR from "~/assets/images/logo-innovateMR.png";
import logoPureSpectrum from "~/assets/images/logo-purespectrum.png";
import logoSchlesinger from "~/assets/images/logo-schlesinger.png";
import logoCint from "~/assets/images/logo-cint.png";
import logoDynata from "~/assets/images/logo-dynata.png";
import logoLucid from "~/assets/images/logo-lucid.png";
import userQualifiedDE from "~/assets/images/UserQualifiedDE.svg";
import userQualifiedEN from "~/assets/images/UserQualifiedEN.svg";
import userQualifiedES from "~/assets/images/UserQualifiedES.svg";
import userQualifiedFR from "~/assets/images/UserQualifiedFR.svg";

export default {
	components: {
		HeroSection,
		FeaturesSection,
		ControlSection,
		MarketplacesSection,
		ReachSection,
		CtaSection,
	},
	data() {
		return {
			heroContent: {
				title: `
          Quality Sample <br>
          for meaningful insights
        `,
				text: `
            <p>
            Quality Market Research at scale. Prime Insights connects you  <br>
            with real respondents worldwide for meaningful insights.
            </p>
        `,
				actions: [
					{
						id: 1,
						caption: "Start Now",
						link: "/#contact-us",
						styleType: "primary",
						type: "router",
					},
				],
				statistics: [
					{
						iconLabel: "respondents", // icon name
						text: "2M panelists",
					},
					{
						iconLabel: "countries",
						text: "20 countries",
					},
					{
						iconLabel: "languages",
						text: "12 languages",
					},
				],
				map: {
					addAnimation: true,
					frequency: 10,
					animationFadeInDuration: 100,
					animationFadeOutDuration: 8000,
					delayRangeStart: 2000,
					delayRangeEnd: 4000,
				},
			},
			featuresContent: {
				title: "Diverse Respondents for meaningful insights",
				features: [
					{
						iconLabel: "mobile", // icon name
						title: "Mobile-First Market Research",
						subtitle: `Prime Insights operates a mobile-first <br> Market Research approach.`,
						text: `
            <p>
              91 % of the world’s population and 97 % of Americans use a smartphone. In order to deliver a representative sample we need to reach users where they spend their time, on their phones.
            </p>
            <p>
              Our focus on mobile users guarantees a diverse audience which produces meaningful and unbiased insights.
            </p>
            `,
					},
					{
						iconLabel: "respondents", // icon name
						title: "Unique Respondents",
						subtitle: `Direct first-party access to high-quality respondents.`,
						text: `
            <p>
              Prime Insights operates several panels and communities with a loyal inventory of respondents built over more than a decade that can not be reached through other suppliers.
            </p>
            <p>
              All our panels rely on a single technology aggregating all our panelists to ensure every panelist is unique and our overall sample remains representative at all times.
            </p>
            `,
					},
				],
			},
			controlContent: {
				title: "Relentless Quality Control",
				image: UserQualified,
				imageAlt: "User Qualified",
				pros: ["Real Respondents", "High Quality Profiles", "Genuine Answers"],
				cons: [
					"Bots, Fakes, VPNs",
					"Suspicious Profiles",
					"Duplicate Users",
					"Low Quality Answers",
				],
				results: {
					title: "Your Results",
					text: `
            <p>
                Which of these streaming services do you use?
            </p>
          `,
					total: "5.000 Respondents",
					items: [
						{
							id: 0,
							name: "Netflix",
							percent: 78,
							hexColor: "#E50914",
						},
						{
							id: 1,
							name: "Amazon Prime Video",
							percent: 72,
							hexColor: "#FF9900",
						},
						{
							id: 2,
							name: "Hulu",
							percent: 50,
							hexColor: "#6ADD8A",
						},
						{
							id: 3,
							name: "Disney +",
							percent: 47,
							hexColor: "#2C50F6",
						},
						{
							id: 4,
							name: "HBO Max",
							percent: 36,
							hexColor: "#632ED0",
						},
						{
							id: 5,
							name: "Apple TV",
							percent: 27,
							hexColor: "#202223",
						},
					],
				},
				features: [
					{
						iconLabel: "globe", // icon name
						title: "Data Analysis",
						text: `
            <p>
              Prime Insights verifies that panelists are real and who they say they are. We monitor various data points like the respondent's IP address, User Agent (Browser), Device ID, and Fingerprint to ensure users are real and unique. Furthermore, we continuously check our panelists profiling information to confirm that their answers are logical and consistent.
            </p>
            `,
					},
					{
						iconLabel: "id-card", // icon name
						title: "Behavioral Analysis",
						text: `
            <p>
              Prime Insights monitors each respondent’s behavior to guarantee that participants are giving attentive and sincere responses. Our proprietary algorithms ensure all respondents meet our strict quality benchmarks by successfully detecting suspicious behavior, speeding, straight-lining and data patterns.
            </p>
            `,
					},
				],
			},
			reachContent: {
				title: "Worldwide Reach",
				text: `
            <p>
              At Prime Insights, we are proud to offer a panel with a global reach, allowing our clients to conduct market research and gather insights from panelists around the world. Our panel is active in a wide range of countries and regions, and we have the ability to conduct surveys in multiple languages to ensure that we can reach a diverse user base.
            </p>
            <p>
              Our panelist are diverse in terms of demographics such as age, gender, income, and education level, ensuring that we can provide a representative sample for any research project. We have a track record of success in helping our clients achieve their research goals on a global scale.
            </p>
            `,
				actions: [
					{
						id: 1,
						caption: "get panel book",
						link: "/#contact-us",
						styleType: "primary",
						type: "router",
					},
				],
				screens: [
					{
						id: 0,
						langCode: "DE",
						src: userQualifiedDE,
						alt: "Benutzer Qualifiziert",
					},
					{
						id: 1,
						langCode: "EN",
						src: userQualifiedEN,
						alt: "User Qualified",
					},
					{
						id: 2,
						langCode: "ES",
						src: userQualifiedES,
						alt: "Usuario Calificado",
					},
					{
						id: 3,
						langCode: "FR",
						src: userQualifiedFR,
						alt: "Utilisateur Qualifié",
					},
				],
				flags: [
					{
						id: 0,
						langCode: "DE",
					},
					{
						id: 1,
						langCode: "EN",
					},
					{
						id: 2,
						langCode: "ES",
					},
					{
						id: 3,
						langCode: "FR",
					},
				],
			},
			marketplacesContent: {
				title: "Find us on your <br> favourite Marketplace",
				text: `
            <p>
              We are proud to power some of the best companies in market research.
            </p>
            `,
				marketplaces: [
					{
						name: "InnovateMR",
						logoSrc: logoInnovateMR,
						url: "https://www.innovatemr.com/",
					},
					{
						name: "PureSpectrum",
						logoSrc: logoPureSpectrum,
						url: "https://www.purespectrum.com/",
					},
					{
						name: "Schlesinger",
						logoSrc: logoSchlesinger,
						url: "https://www.schlesingergroup.com/",
					},
					{
						name: "Cint",
						logoSrc: logoCint,
						url: "https://www.cint.com/",
					},
					{
						name: "Dynata",
						logoSrc: logoDynata,
						url: "https://www.dynata.com/",
					},
					{
						name: "Lucid",
						logoSrc: logoLucid,
						url: "https://www.luc.id/",
					},
				],
			},
			ctaContent: {
				title: `Reach out to us <br> for a direct integration`,
				text: `
            <p>
              Get real-time insights worldwide
            </p>
            `,
				formTitle: "Drop us a message!",
			},
		};
	},
  head() {
    return {
      title: 'Prime Insights - Quality Panelists for meaningful insights',
      meta: [
        {
          hid: 'homepage',
          name: 'description',
          content: 'Quality Market Research at scale. Prime Insights connects you with real respondents worldwide for meaningful insights. Get high-quality sample worldwide.'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://primeinsights.com',
        },
      ],
    }
  },
};
</script>
