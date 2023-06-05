<template>
  <teleport to="body">
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{ title }}</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <slot name="content" />
        </section>
        <footer class="modal-card-foot is-justify-content-flex-end">
          <button class="button">Cancel</button>
          <button class="button" :class="`is-${btnColorSubmit}`">{{ btnTextSubmit }}</button>
        </footer>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Modal Title'
  },
  btnColorSubmit: {
    type: String,
    default: 'link'
  },
  btnTextSubmit: {
    type: String,
    default: 'Edit'
  }
})
</script>
