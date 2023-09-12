<template>
  <div class="form-checkbox">
    <input
      type="checkbox"
      :name="name"
      :id="id"
      :required="required"
      v-model="selectedOption"
    />
    <label :for="id" v-text="label" />
  </div>
</template>

<script>
export default {
  emits: ["input"],
  computed: {
    selectedOption: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
  props: {
    value: {
      type: Boolean,
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
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';
.form-checkbox {
  label {
    position: relative;
    margin-bottom: 0;
    padding: 2px 0 2px 28px;
    font-family: $primary-font-family;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.2;
    color: $dark;
    cursor: pointer;

    &:hover {
      &:before {
        border-color: $primary;
      }
    }

    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      margin-top: -10px;
      width: 20px;
      height: 20px;
      background-color: #fff;
      border: 1px solid $grey-700;
      border-radius: 4px;
      transition: background-color 0.2s linear, border-color 0.2s linear;
    }

    &:after {
      content: "";
      opacity: 0;
      position: absolute;
      left: 2px;
      top: 4px;
      width: 16px;
      height: 12px;
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: contain;
      background-image: url("data:image/svg+xml,%3Csvg width='16' height='12' viewBox='0 0 16 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.6668 1L5.50016 10.1667L1.3335 6' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
      transition: opacity 0.2s linear;
    }
  }

  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked {
      & + label {
        &:before {
          background-color: $primary;
          border-color: $primary;
        }

        &:after {
          opacity: 1;
        }
      }
    }
  }
}
</style>
