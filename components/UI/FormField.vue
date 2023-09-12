<template>
  <textarea
    v-if="type === 'textarea'"
    class="form-field form-field--textarea"
    :name="name"
    :id="id"
    :placeholder="placeholder"
    :required="required"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
  <input
    v-else
    class="form-field"
    :type="type"
    :name="name"
    :id="id"
    :placeholder="placeholder"
    :required="required"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  emits: ["input"],
  props: {
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/utils/_variables.scss';
@import '@/assets/styles/utils/_mixins.scss';
label {
  display: inline-block;
  vertical-align: top;
  margin-bottom: 0.5rem;
  color: $dark;
}

.form-field {
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  margin-bottom: 16px;
  border: 1px solid $grey-600;
  padding: 17px 20px;
  background-color: $white;
  color: $dark;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  font-family: $primary-font-family;
  border-radius: 8px;

  &:last-child {
    margin-bottom: 0;
  }

  &--textarea {
    min-height: 150px;
    overflow: auto;
    resize: vertical;
  }

  &::placeholder {
    color: $grey-text;
  }

  &:focus {
    outline: none;
    border-color: $primary;
  }
}
</style>
