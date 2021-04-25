<template>
  <input
    type="checkbox"
    :checked="modelValue"
    @change="$emit('update:modelValue', $event.target.checked)"
    class="field"
    :id="uuid"
    :aria-describedby="error ? `${uuid}-error` : null"
  />
  <label :for="uuid" v-if="label">{{ label }}</label>
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
      type: Boolean,
      default: false
    }
  },
  setup () {
    return { uuid: UniqueId().getId() }
  }
}
</script>
