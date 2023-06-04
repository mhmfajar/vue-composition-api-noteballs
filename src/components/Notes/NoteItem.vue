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
      <RouterLink :to="`/edit-note/${note.id}`" class="card-footer-item">Edit</RouterLink>
      <a @click.prevent="storeNotes.deleteNote(note.id)" href="#" class="card-footer-item"
        >Delete</a
      >
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'

// stores
const storeNotes = useStoreNotes()

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

// character length
const characterLength = computed(() => {
  const length = props.note.content.length
  const description = length > 1 ? 'characters' : 'character'

  return `${length} ${description}`
})
</script>

<style scoped></style>
