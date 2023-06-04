<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="mt-2 has-text-right has-text-grey-light">
          <small>{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a @click.prevent="handleDeleteClicked" href="#" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// type
interface Note {
  id: number
  content: string
}

// props
const props = defineProps({
  note: {
    type: Object as () => Note,
    required: true
  }
})

// emits
const emit = defineEmits(['deleteClicked'])

// character length
const characterLength = computed(() => {
  const length = props.note.content.length
  const description = length > 1 ? 'characters' : 'character'

  return `${length} ${description}`
})

// handle delete clicked
const handleDeleteClicked = () => {
  emit('deleteClicked', props.note.id)
}
</script>

<style scoped></style>
