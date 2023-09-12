<template>
  <main class="panel">
    <PageTitle
      class="text-center"
      :subtitle="subtitle"
      :title="title"
      :text="text"
      gradient-title
    />
    <BannerSection :content="bannerContent" />
    <OpinionSection :content="opinionContent" />
    <PresenceSection :content="presenceContent"/>
    <div class="bottom-cards">
      <div class="bottom-cards__container container">
        <div class="bottom-cards__list">
					<CardItem
						:key="features[2].iconLabel+'_duplication'"
						:icon-label="features[2].iconLabel"
						:title="features[2].title"
						:text="features[2].text"
						class="bottom-cards__item show-sm"
					/>
					<CardItem
						v-for="card in features"
						:key="card.iconLabel"
						:icon-label="card.iconLabel"
						:title="card.title"
						:text="card.text"
						class="bottom-cards__item"
					/>
        </div>
      </div>
    </div>
    <Partner :content="partnerContent"/>
  </main>
</template>
<script>
import PageTitle from "~/components/PageTitle/PageTitle.vue";
import BannerSection from "~/components/BannerSection/BannerSection.vue";
import OpinionSection from "~/components/PanelContent/OpinionSection.vue";
import PresenceSection from "~/components/PanelContent/PresenceSection.vue";
import Partner from "~/components/PanelContent/Partner.vue";
import CardItem from "~/components/PanelContent/CardItem.vue";

export default {
  components: {
    PageTitle,
    BannerSection,
    OpinionSection,
    PresenceSection,
    Partner,
    CardItem
  },
  data() {
    return {
			subtitle: "Welcome to Prime Opinion",
			title: "Your Gateway to<br class='show-sm'> Genuine Insights and <br>Empowering Data",
      text: "In an ever-evolving business landscape, having the right information at your fingertips is crucial to making effective decisions. That's why at Prime Insights, we have developed our panel, Prime Opinion - a rich, dynamic, and reliable source of market information.",
      bannerContent: {
        title: `
          What is  <br>
          Prime Opinion?
        `,
        text: `
          <p>
            Prime Opinion is our proprietary panel of highly-engaged, diverse, and carefully vetted respondents, curated with the intent to provide genuine, reliable and actionable insights. These are individuals across various demographics, locations, and interest areas who have consented to contribute their opinions, habits, and preferences on a wide array of topics. 
          </p>
          <p>
            From consumers of everyday products to high-level decision makers in industry-leading firms, our panelists represent an extensive range of viewpoints.
          </p>
        `,
        textWide: true,
      },
      opinionContent: {
        title: 'Prime Opinion in Numbers',
        subtitle: 'We believe numbers tell a story, and ours is one of scale, diversity, and reliability.',
        cards: [
          {
            iconLabel: "IconMegaphone",
            title: "2M+",
            text: `
              <p>
                Panelists contributing their valuable insights
              </p>
            `,
          },
          {
            iconLabel: "IconCheckCircle",
            title: "100.000",
            text: `
              <p>
                Projects completed, creating an enormous wealth of data
              </p>
            `,
          },
          {
            iconLabel: "IconGlobe",
            title: "40+",
            text: `
              <p>
                Countries represented, encompassing a global viewpoint
              </p>
            `,
          },
          {
            iconLabel: "IconSmiley",
            title: "98%",
            text: `
              <p>
                Client satisfaction rate, underlining our commitment to quality and service
              </p>
            `,
          },
        ]
      },
      presenceContent: {
        title: 'Our Global Presence',
        text: `
          <p>Prime Opinion extends across the globe, making it a truly international panel. We are active in a multitude of countries, <br class='hide-sm'> ensuring that no matter where your market research needs lie, we have you covered. </p>

          <p>Our panelists represent voices from:</p>
        `,
        continents: [
          {
            name: 'North America',
            countries: [
              {
                name: 'United States',
                flag: 'US'
              }, 
              {
                name: 'Canada',
                flag: 'CA'
              }, 
              {
                name: 'Mexico',
                flag: 'MX'
              }
            ]
          },
          {
            name: 'Europe',
            countries: [
              {
                name: 'United Kingdom',
                flag: 'GB'
              }, 
              {
                name:'Germany',
                flag: 'DE'
              }, 
              {
                name: 'Netherlands',
                flag: 'NL'
              },
              {
                name: 'Italy',
                flag: 'IT'
              }, 
              {
                name: 'Spain',
                flag: 'ES'
              }, 
              {
                name: 'France',
                flag: 'FR'
              }, 
              {
                name: 'Ireland',
                flag: 'IE'
              }, 
              {
                name: 'Austria',
                flag: 'AT'
              }, 
              {
                name: 'Belgium',
                flag: 'BE'
              }, 
              {
                name: 'Poland',
                flag: 'PL'
              }, 
              {
                name: 'Sweden',
                flag: 'SE'
              }, 
              {
                name: 'Switzerland',
                flag: 'CN'
              }, 
              {
                name: 'others'
              }]
          },
          {
            name: 'Oceania',
            countries: [
              {
                name: 'Australia',
                flag: 'AU'
              }, 
              {
                name: 'New Zealand',
                flag: 'NZ'
              }
            ]
          },
          {
            name: 'Asia',
            countries: [
              {
                name: 'India',
                flag: 'IN'
              }, 
              {
                name: 'Vietnam',
                flag: 'VN'
              }, 
              {
                name: 'Indonesia',
                flag: 'ID'
              }, 
              {
                name: 'United Arab Emirates',
                flag: 'AE'
              }, 
              {
                name: 'Malaysia',
                flag: 'MY'
              }, 
              {
                name: 'Singapore',
                flag: 'SG'
              }, 
              {
                name: 'Saudi Arabia',
                flag: 'SA'
              }, 
              {
                name: 'others'
              }
            ]
          },
          {
            name: 'South America',
            countries: [
              {
                name: 'Brazil',
                flag: 'BR'
              }, 
              {
                name: 'Argentina',
                flag: 'AR'
              }, 
              {
                name: 'others'
              }
            ]
          },
          {
            name: 'Africa',
            countries: [
              {
                name: 'South Africa',
                flag: 'ZA'
              }
            ]
          }
        ]
      },
      features: [
				{
					iconLabel: "IconAtom",
					title: "Our Panel Diversity",
					text: `
            <p>
              Prime Opinion is powered by diversity, echoing the multiplicity of voices in the real world. We understand that different research needs require different types of respondents. 
            </p>
            <p>
              That's why we've made sure our panel is diverse in terms of geography, age, profession, income level, and lifestyle. This means that whether you are looking to understand shopping behavior of millennials, or the business decisions of C-suite executives, Prime Opinion can cater to your research needs.
            </p>
          `,
				},
				{
					iconLabel: "IconTrophy",
					title: "Quality Assurance",
					text: `
            <p>
              Reliability and authenticity are key tenets of Prime Opinion. Our rigorous vetting process ensures that each panelist is genuine and their data, reliable. 
            </p>
            <p>
              We employ strict data verification procedures, privacy measures, and maintain frequent communication with our panelists to ensure data accuracy and integrity. Prime Insights consistently maintains high standards to guarantee the credibility of the data we provide.
            </p>
          `,
				},
				{
					iconLabel: "IconShieldCheck",
					title: "Data Security and Compliance",
					text: `
            <p>
              We take the privacy of our panelists very seriously. Adhering to the highest standards of data security protocols, Prime Insights is committed to protecting the information shared with us. 
            </p>
            <p>
              We comply with GDPR and other relevant data protection regulations such as CCPA and LGPD, ensuring that data is anonymized and securely stored.
            </p>
          `,
				},
      ],
      partnerContent: {
        title: 'Partner with Prime Insights',
        text: `
          <p>
            Discover the value of deep, accurate, and timely insights with Prime Opinion. With a commitment to quality, diversity, and <br> data integrity, Prime Insights offers you the perfect partner in your research journey. 
          </p>
          <p>
            Unearth the insights you need to drive your business forward and make decisions with confidence.
          </p>
        `,
      }
    }
  },
  head() {
    return {
      title: 'Prime Insights - Our Panel',
      meta: [
        {
          hid: 'panelpage',
          name: 'description',
          content: 'Our Panel: Discover Prime Opinion, Prime Insights\' proprietary panel of millions of engaged respondents across 20+ countries. Experience direct access to authentic and diverse insights'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://primeinsights.com' + this.$nuxt.$route.path,
        },
      ],
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';

.panel {
  @include breakpoint(0, $sm) {
    margin-top: 24px;
  }

  .show-sm {
    display: none;
    
    @include breakpoint(0, $sm) {
      display: block;
    }
  }

  .hide-sm {
    display: block;
    
    @include breakpoint(0, $sm) {
      display: none;
    }
  }

  .page-title {
		margin-top: 96px;

		@include breakpoint(0, $md) {
			margin-top: 30px;
		}

    &__container {
      @include breakpoint(0, $sm) {
        padding-left: 32px;
        padding-right: 32px;
      }
    }

    &__subheading {
      color: $primary;
      font-family: $primary-font-family;
      font-size: 14px;
      font-weight: 600;
      padding: 4px 12px;
    }

    &__heading {
      text-align: center;
      font-family: $primary-font-family;
      font-size: 36px;
      font-weight: 600;
      line-height: normal;
      margin-bottom: 24px;

      @include breakpoint(0, $sm) {
        font-size: 24px;
      }
    }

    &__text {
      color: $dark;
      text-align: center;
      font-family: $secondary-font-family;
      font-size: 18px;
      line-height: 1.4;
      margin-left: auto;
      margin-right: auto;

      @include breakpoint(0, $sm) {
        font-size: 14px;
      }
    }

    &__subheading {
      width: fit-content;
      margin-left: auto;
      margin-right: auto;
      background: #ddebfe;
      color: $primary;
      border-radius: 1rem;
      padding-left: 12px;
      padding-right: 12px;
      margin-bottom: 20px;
    }
  }

  .banner {
    margin-top: 54px;
    padding-bottom: 75px;

    @include breakpoint(0, $sm) {
      margin-top: 18px;
      padding-bottom: 54px;
    }

    &__row {
      padding-top: 70px;
      padding-bottom: 70px;

      @include breakpoint(0, $sm) {
        padding: 36px 24px;
      }
    }

    &__title {
      color: $white;
      font-family: $primary-font-family;
      font-size: 36px;
      font-weight: 700;
      line-height: normal;

      @include breakpoint(0, $sm) {
        font-size: 24px;
      }
    }

    &__text {
      color: $white;
      font-family: $primary-font-family;
      font-size: 15px;
      font-weight: 500;
      line-height: 1.5;

      @include breakpoint(0, $sm) {
        font-size: 14px;
      }
    }
  }
  
	.bottom-cards {
		position: relative;
		padding: 80px 0 36px;
    margin-bottom: 110px;

		@include breakpoint(0, $md) {
      margin-top: 38px;
			padding-top: 45px;
      margin-bottom: 18px;
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
        grid-auto-flow: row dense;
				grid-gap: 24px;
			}
      
      .card {
        padding: 36px;
        text-align: start;

        &__title {
          color: $gray-900;
          font-family: $primary-font-family;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.5;
          margin-bottom: 8px;
          
          @include breakpoint(0, $md) {
            font-size: 16px;
          }
        }

        p {
          margin-bottom: 10px;
        }
      }
		}

    &__item:last-child {
      grid-column: span 2;

			@include breakpoint(0, $md) {
        grid-column: span 1;
			}
      
			@include breakpoint(0, $sm) {
        display: none;
			}
    }

	}
}

</style>