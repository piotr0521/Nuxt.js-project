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
        :required="true"
        v-model="name"
      />

      <FormField
        class="form__input"
        type="email"
        name="email"
        id="email-3"
        placeholder="E-mail"
        :required="true"
        v-model="email"
      />

      <FormField
        class="form__input"
        type="text"
        name="companyName"
        id="companyName"
        placeholder="Company"
        :required="true"
        v-model="company"
      />

      <FormField
        class="form__input"
        type="textarea"
        name="message"
        placeholder="Your message"
        id="message"
        :required="true"
        v-model="text_message"
      />

      <div class="form__row">
        <h6 class="form__caption">Send me</h6>

        <FormCheckbox
          class="form__checkbox"
          name="panelBook"
          id="panelBook"
          v-model="panelBook"
          label="Panel Book"
        />

        <FormCheckbox
          class="form__checkbox"
          name="esomarAnswers"
          id="esomarAnswers"
          v-model="esomarAnswers"
          label="ESOMAR 37 Answers"
        />
      </div>
    </div>

    <PrimeButton
      class="form__button"
      caption="send"
      styleType="primary"
      type="submit"
      has-icon
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
import FormCheckbox from "~/components/UI/FormCheckbox.vue";
import PrimeButton from "~/components/UI/PrimeButton.vue";
import FormAlert from "~/components/ContactForm/FormAlert.vue";

export default {
  components: {
    FormField,
    FormCheckbox,
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
      company: '',
      text_message: '',
      panelBook: false,
      esomarAnswers: false,
    };
  },
  computed: {
    apiUrl() {
      if (this.$config.CONTACT_API) {
        return this.$config.CONTACT_API;
      }

      return null;
    },
  },
  methods: {
    onSubmit(event) {
      this.showAlert = true;
      const url = this.apiUrl;

      if (!url) {
        this.submitStatus = "noApiKey";
        return;
      }

      const data = {
        name: this.name,
        email: this.email,
        company: this.company,
        text_message: this.text_message,
        send_me: {
          panel_book: this.panelBook,
          esomar: this.esomarAnswers,
        },
      };

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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
