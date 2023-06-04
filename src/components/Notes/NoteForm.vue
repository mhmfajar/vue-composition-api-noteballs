<template>
  <div class="card has-background-success-dark p-4">
    <div class="field">
      <div class="control">
        <textarea
          :value="modelValue"
          @input="handleTextarea"
          class="textarea"
          placeholder="Add a new note"
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
