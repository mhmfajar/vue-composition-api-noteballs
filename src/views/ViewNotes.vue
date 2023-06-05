<template>
  <div class="notes">
    <NoteForm v-model="newNote" ref="noteRef" placeholder="Add a new note" label="Add Note">
      <template #button>
        <div class="buttons">
          <button :disabled="!newNote" @click="addNewNote" class="button is-success">
            Add New Note
          </button>
        </div>
      </template>
    </NoteForm>

    <hr class="divider my-3" />

    <NoteItem v-for="note in storeNotes.notes" :note="note" :key="note.id" />

    <ModalNote />
  </div>
</template>

<script setup lang="ts">
// imports
import { ref, type Ref } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'
import { useWatchCharacters } from '@/use/useWatchCharacters'
import NoteItem from '@/components/Notes/NoteItem.vue'
import NoteForm from '@/components/Notes/NoteForm.vue'
import ModalNote from '@/components/Notes/ModalNote.vue'

// stores
const storeNotes = useStoreNotes()

// notes
const newNote = ref('')
const noteRef: Ref = ref(null)

// add new note
const addNewNote = () => {
  storeNotes.addNote(newNote.value)

  newNote.value = ''
  noteRef.value?.focusTextArea()
}

// watch characters
useWatchCharacters(newNote)
</script>

<style scoped>
.notes {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
