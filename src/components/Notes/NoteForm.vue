<template>
  <div class="card p-4" :class="`has-background-${bgColor}-dark`">
    <label v-if="label" for="content" class="label has-text-white">{{ label }}</label>

    <div class="field">
      <div class="control">
        <textarea
          id="content"
          :value="modelValue"
          @input="handleTextarea"
          class="textarea"
          :placeholder="placeholder"
          ref="textareaRef"
        ></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="button" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// props
defineProps({
  modelValue: {
    type: String,
    required: true
  },
  bgColor: {
    type: String,
    default: 'success'
  },
  placeholder: {
    type: String,
    default: 'Type Something ...'
  },
  label: {
    type: String
  }
})

// emits
const emit = defineEmits(['update:modelValue'])

// handle textarea
const handleTextarea = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLTextAreaElement).value)
}

// focus textarea
const textareaRef = ref<HTMLTextAreaElement | null>(null)

const focusTextArea = () => {
  textareaRef.value?.focus()
}

defineExpose({
  focusTextArea
})
</script>

<style scoped></style>
