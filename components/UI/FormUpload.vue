<template>
  <div class="form-upload">
    <div class="form-upload__field">
      <input
        ref="fileupload"
        type="file"
        :id="id"
        @change="uploadFile($event)"
        :accept="accept"
        :size="size"
        :required="required"
      />
      <label :for="id">
        <span>{{ fileCaption }}</span>

        <IconUploadField
          v-if="!isFileUploaded"
          class="form-upload__icon"
          icon-label="upload"
        />
      </label>
      <button
        v-if="isFileUploaded"
        class="btn btn--link btn--icon form-upload__icon"
        @click.stop="resetFile"
      >
        <IconUploadField icon-label="remove" />
      </button>
    </div>
    <div v-if="isError" class="form-upload__error" v-text="errorMessage" />
  </div>
</template>

<script>
import IconUploadField from "~/components/icons/IconUploadField.vue";
export default {
  components: { IconUploadField },
  emits: ["onUploadFile"],
  props: {
    modelValue: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
    size: {
      type: Number,
      default: 5242880,
    },
    accept: {
      type: String,
    },
    label: {
      type: String,
    },
  },
  data() {
    return {
      fileCaption: "Upload File",
      isFileUploaded: false,
      isError: false,
      errorMessage: "",
    };
  },
  methods: {
    validate(file) {
      let isValid = true;
      const fileFormat = file.name.split(".").pop();
      const fileSize = file.size;
      const validFileFormats = this.accept.split(",");

      if (!validFileFormats.includes(`.${fileFormat}`)) {
        this.errorMessage = `File type is not valid. Please upload file in one of the ${validFileFormats.join(
          ", "
        )} formats`;
        isValid = false;
      } else if (fileSize > this.size) {
        this.errorMessage = `File size should be less than ${this.returnFileSize(
          this.size
        )}`;
        isValid = false;
      }

      if (!isValid) {
        this.isError = true;
        this.resetFile();
      }

      return isValid;
    },
    uploadFile(event) {
      this.isError = false;
      this.errorMessage = "";

      if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];

        if (this.validate(file)) {
          this.isFileUploaded = true;
          this.$emit("onUploadFile", file);
          this.fileCaption = file.name;
        }
      } else {
        this.resetFile();
      }
    },
    resetFile() {
      this.$refs.fileupload.value = null;
      this.isFileUploaded = false;
      this.fileCaption = this.label;
    },
    returnFileSize(number) {
      if (number < 1024) {
        return `${number} bytes`;
      } else if (number >= 1024 && number < 1048576) {
        return `${(number / 1024).toFixed(1)} KB`;
      } else if (number >= 1048576) {
        return `${(number / 1048576).toFixed(1)} MB`;
      }
    },
  },
  mounted() {
    this.fileCaption = this.label;
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';
.form-upload {
  &__field {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 52px;
  }

  input {
    position: absolute;
    border: 1px solid $grey-600;
    height: 100%;
    width: 100%;
    color: transparent;
    background-color: $white;
    border-radius: 8px;

    &::-webkit-file-upload-button,
    &::file-selector-button {
      visibility: hidden;
    }

    &:focus,
    &:active {
      border-color: $primary;

      & + label {
        color: $dark;
      }
    }
  }

  label {
    position: relative;
    z-index: 7;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0;
    padding: 17px 20px;
    width: 100%;
    color: $grey-text;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.2;
    font-family: $primary-font-family;
    cursor: pointer;
    white-space: nowrap;
    -webkit-user-select: none;

    span {
      text-overflow: ellipsis;
      width: calc(100% - 50px);
      overflow: hidden;
    }
  }

  &__icon {
    flex: none;
    width: 24px;
    height: 24px;
    margin-left: 10px;

    &.btn {
      position: absolute;
      z-index: 8;
      top: 50%;
      right: 17px;
      margin-top: -12px;
    }
  }

  &__error {
    margin-top: 5px;
    padding: 5px 20px;
    font-size: 12px;
    color: $error;
  }
}
</style>
