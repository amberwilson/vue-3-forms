<template>
  <label :for="uuid" v-if="label">{{ label }}</label>
  <select
    class="field"
    :value="modelValue"
    v-bind="{
      ...$attrs,
      onChange: ($event) => { $emit('update:modelValue', $event.target.value) }
    }"
    :id="uuid"
    :aria-describedby="error ? `${uuid}-error` : null"
  >
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === modelValue"
    >{{ option }}</option>
  </select>
  <p
    v-if="error"
    class="error-message"
    :id="`${uuid}-error`"
    aria-live="assertive"
  >
    {{ error }}
  </p>
</template>

<script>
import UniqueId from '@/features/UniqueId'

export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    options: {
      type: Array,
      required: true
    }
  },
  setup () {
    return { uuid: UniqueId().getId() }
  }
}
</script>
