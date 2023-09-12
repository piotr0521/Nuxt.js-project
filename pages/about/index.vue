<template>
  <!--	<Head>-->
  <!--		<Title>Prime Insights - About us</Title>-->
  <!--		<Meta name="description" content="Prime Insights reaches millions of diverse users through our Market Research Panel. Learn about our culture and the people behind Prime Insights." />-->
  <!--	</Head>-->
  <main class="about">
    <PageTitle
      class="about__title text-center"
      :subtitle="subtitle"
      :title="title"
      gradient-title
    />
    <BannerSection :content="bannerContent" />
    <CultureSection :content="cultureContent" />
    <div class="about__note">
      <div class="about__container container">
        <NoteItem :text="note" />
      </div>
    </div>
    <TeamSection :content="teamContent" />
    <JoinTeam :content="joinTeamContent" />
  </main>
</template>

<script>
import teamBenjamin from "~/assets/images/team-Benjamin.jpg";
import teamRoman from "~/assets/images/team-Roman.jpg";
import teamIrakli from "~/assets/images/team-Irakli.jpg";
import teamBogdan from "~/assets/images/team-Bogdan.jpg";
import teamMateusz from "~/assets/images/team-Mateusz.jpg";
import teamQui from "~/assets/images/team-Qui.jpg";
import teamIlya from "~/assets/images/team-Ilya.jpg";
import teamKuba from "~/assets/images/team-Kuba.jpg";
import teamMarharyta from "~/assets/images/team-Marharyta.jpg";
import teamTato from "~/assets/images/team-Tato.jpg";
import teamAgustin from "~/assets/images/team-Agustin.jpg";
import teamJames from "~/assets/images/team-James.jpg";
import teamJohnry from "~/assets/images/team-Johnry.jpg";
import teamJean from "~/assets/images/team-Jean.jpg";
import team from "~/assets/images/team.png";
import PageTitle from "~/components/PageTitle/PageTitle.vue";
import BannerSection from "~/components/BannerSection/BannerSection.vue";
import CultureSection from "~/components/AboutContent/CultureSection.vue";
import NoteItem from "~/components/NoteItem/NoteItem.vue";
import TeamSection from "~/components/AboutContent/TeamSection.vue";
import JoinTeam from "~/components/JoinTeam/JoinTeam.vue";

export default {
  components: {
    JoinTeam,
    PageTitle,
    BannerSection,
    CultureSection,
    NoteItem,
    TeamSection,
  },
  data() {
    return {
      subtitle: "About Prime",
      title: `
              We reach millions of diverse users through <br>
              our proprietary Market Research Panel.
            `,
      bannerContent: {
        title: `
              About <br>
              Prime Insights
            `,
        text: `
        <p>
          Insights Prime Insights is headquartered in Delaware, US and Dusseldorf, Germany. We reach millions of diverse users through our proprietary Market Research Panel. Our innovative technology supports our international community and gives our members a world-class survey taking experience.
        </p>
        <p>
          Our mission is to match our authentic members to our client's market research surveys which allows our clients to achieve meaningful insights from the sample we deliver via online quantitative research. Members are rewarded with meaningful incentives, ensuring their sincere participation.
        </p>
        `,
        textWide: true,
      },
      cultureContent: {
        image: {
          src: team,
          alt: "Team",
        },
        title: "Our Culture",
        text: `
          <p>
              At Primeinsights we practice diversity and inclusion to create a pleasant and prosperous working environment for everyone. We believe the wide range of backgrounds and experiences in our team is a driver for new ideas and innovation and a key to our success.
          </p>
          <p>
              Our diverse team has a background of 11 nationalities, speaks 12 languages, and works from 8 different countries.</p>
          <p>
              Our <b>fully-remote work place</b> enables us to attract a wide pool of talent regardless of their background. We've found that giving our employees control over their work environment and schedules leads to a better work-life balance, lower stress levels, and increased productivity. By letting our team work from wherever they choose, we make it easy for them to fit work into their lives, no matter how they live.
          </p>
        `,
        statistics: [
          {
            data: "10+",
            description: "Nationalities",
          },
          {
            data: "20+",
            description: "Team Members",
          },
        ],
      },
      note: `
        <p class="text-lg">
            Our team consists of more than 20 highly skilled and dedicated professionals who are committed to delivering the best possible products and services to our customers.
        </p>
        <p>
            We come from a variety of backgrounds and bring a wealth of experience and expertise to the table. At the heart of our team is a shared passion for excellence and a desire to constantly push the boundaries of what is possible. We believe that by working together and pooling our talents, we can create great products and make a real difference in the world of Market Research.
        </p>
        <p>
            We are developing new technologies, solving complex problems and help our customers to achieve their goals. We are proud of the work we do and the impact we have, and we are always looking for ways to improve and grow as a team.
        </p>
      `,
      teamContent: {
        subtitle: "Team",
        title: "The people behind Prime Insights",
        team: [
          {
            name: "Benjamin Ritzka",
            position: "CEO",
            image: teamBenjamin,
            linkedin: "https://www.linkedin.com/in/benjaminritzka",
          },
          {
            name: "Roman Nehrulenko",
            position: "Head of Software Engineering",
            image: teamRoman,
            linkedin: "https://www.linkedin.com/in/roman-nehrulenko",
          },
          {
            name: "Irakli Shengelia",
            position: "Team Lead Engineering",
            image: teamIrakli,
            linkedin: "https://www.linkedin.com/in/iraklishengelia",
          },
          {
            name: "Bogdan Todosiciuc",
            position: "Director of User Acquisition",
            image: teamBogdan,
            linkedin:
              "https://www.linkedin.com/in/bogdan-adrian-todosiciuc-4a0814b5",
          },
          {
            name: "Mateusz Walczyna",
            position: "Backend Developer",
            image: teamMateusz,
            linkedin: "https://www.linkedin.com/in/mateusz-walczyna",
          },
          {
            name: "Qui Nguyen",
            position: "Backend Developer",
            image: teamQui,
            linkedin: "https://www.linkedin.com/in/qui-nguyen-878582a3",
          },
          {
            name: "Kuba Karmiński",
            position: "Backend Developer",
            image: teamKuba,
            linkedin: "https://www.linkedin.com/in/kubakarminski",
          },
          {
            name: "Ilya Kirsanov",
            position: "Frontend Developer",
            image: teamIlya,
            linkedin: "https://www.linkedin.com/in/ilyakirsanov",
          },
          {
            name: "Marharyta Kardashevska",
            position: "Frontend Developer",
            image: teamMarharyta,
            linkedin:
              "https://www.linkedin.com/in/margaret-kardashevska-538929176",
          },
          {
            name: "Tato Beqtashashvili",
            position: "Product Designer",
            image: teamTato,
            linkedin: "https://www.linkedin.com/in/tato-beqtashashvili",
          },
          {
            name: "Hleb Kemeisha",
            position: "Quality Assurance",
            linkedin: "https://www.linkedin.com/in/hleb-kemeisha-858803218",
          },
          {
            name: "Agustin Sanchez Volpe",
            position: "Panelist Experience Expert",
            image: teamAgustin,
            linkedin: "https://www.linkedin.com/in/agustin-sanchez-volpe",
          },
          {
            name: "James Mendoza",
            position: "Panelist Experience Expert",
            image: teamJames,
            linkedin: "https://www.linkedin.com/in/jamesmendoza77",
          },
          {
            name: "Johnry Ancheta",
            position: "Panelist Experience Expert",
            image: teamJohnry,
            linkedin: "https://www.linkedin.com/in/johnry-ancheta-61000a244",
          },
          {
            name: "Jean Vestil",
            position: "Panelist Experience Expert",
            image: teamJean,
            linkedin: "https://www.linkedin.com/in/jean-vestil-1a93ab244/",
          },
          {
            name: "Jane Olive",
            position: "Finance Manager",
          },
          {
            name: "Sven Olaf",
            position: "Quality Assurance Manager",
            linkedin: "https://www.linkedin.com/in/sven-b%C3%BCnting-a8324021a",
          },
        ],
      },
      joinTeamContent: {
        formTitle: "Apply now",
        title: "Join our Team",
        subtitle:
          "We are always looking for talented and passionate individuals",
        text: `
          <p class="text-lg">
            We are always looking for talented and passionate individuals to join us in our mission to empower panelists and create meaningful insights for our clients. If you believe in what we do and want to make a difference, we encourage you to apply.
          </p>
          <p>
            As a member of our team, you will have the opportunity to work with a diverse group of individuals and make an impact in Market Research. You will also have access to professional development opportunities and the support of a dynamic and collaborative work environment.
          </p>
          <p>
            We welcome and value diversity at our company and encourage people from all backgrounds to apply. If you are ready to take on new challenges and grow with us, we encourage you to submit your resume and cover letter for consideration.
          </p>
        `,
      },
    };
  },
  head() {
    return {
      title: 'Prime Insights - About us',
      meta: [
        {
          hid: 'aboutpage',
          name: 'description',
          content: 'Prime Insights reaches millions of diverse users through our Market Research Panel. Learn about our culture and the people behind Prime Insights.'
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
.about {
  &__title {
    margin-top: 104px;
    margin-bottom: 12px;

    @include breakpoint(0, $md) {
      margin-top: 30px;
    }
  }
}
</style>
