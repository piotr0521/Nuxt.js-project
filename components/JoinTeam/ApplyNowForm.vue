<template>
  <form class="form" @submit.prevent="onSubmit" action="#">
    <h3 v-if="formTitle" class="form__title text-center" v-html="formTitle" />

    <div class="form__fields">
      <FormField
        class="form__input"
        type="text"
        name="name"
        id="name"
        placeholder="Your name"
        v-model="name"
        required
      />

      <FormField
        class="form__input"
        type="url"
        name="linkedinUrl"
        id="linkedinUrl"
        placeholder="LinkedIn Profile"
        v-model="linkedinUrl"
        required
      />

      <FormField
        class="form__input"
        type="email"
        name="email"
        id="apply-now-email"
        placeholder="E-mail"
        v-model="email"
        required
      />

      <FormUpload
        @onUploadFile="handleFileUpload"
        name="resume"
        id="resume"
        :size="5242880"
        accept=".pdf,.doc,.docx,.txt"
        label="Upload CV"
        required
      />
    </div>

    <PrimeButton
      class="form__button"
      caption="Submit"
      styleType="primary"
      type="submit"
    />

    <transition name="fade">
      <FormAlert
        v-if="showAlert"
        :submit-status="submitStatus"
        form-type="contact"
      />
    </transition>
  </form>
</template>

<script>
import FormField from "~/components/UI/FormField.vue";
import PrimeButton from "~/components/UI/PrimeButton.vue";
import FormAlert from "~/components/ContactForm/FormAlert.vue";
import FormUpload from "~/components/UI/FormUpload.vue";

export default {
  components: {
    FormUpload,
    FormField,
    PrimeButton,
    FormAlert,
  },
  props: {
    formTitle: {
      type: String,
    },
  },
  data() {
    return {
      timeout: null,
      showAlert: false,
      submitStatus: "sending",
      name: '',
      email: '',
      linkedinUrl: '',
      resume: null,
    };
  },
  computed: {
    apiUrl() {
			if (this.$config.JOIN_TEAM_API) {
				return this.$config.JOIN_TEAM_API;
			}

      return null;
    },
  },
  methods: {
    handleFileUpload(file) {
      this.resume = file;
    },
    onSubmit(event) {
      this.showAlert = true;
      const url = this.apiUrl;

      if (!url) {
        this.submitStatus = "noApiKey";
        return;
      }

      const formData = new FormData();
      formData.append("name", this.name);
      formData.append("email", this.email);
      formData.append("linkedin_url", this.linkedinUrl);
      formData.append("resume", this.resume);

      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((results) => results)
        .then((data) => {
          if (data.status === 202 || data.status === 200) {
            this.submitStatus = "success";
            event.target.reset();
          } else {
            this.submitStatus = "error";
          }
        })
        .catch((error) => {
          if (error) {
            this.submitStatus = "error";
          }
        })
        .finally(() => {
          this.timeout = setTimeout(() => {
            this.submitStatus = "sending";
            this.showAlert = false;
            clearTimeout(this.timeout);
          }, 5000);
        });
    },
  },
};
</script>
