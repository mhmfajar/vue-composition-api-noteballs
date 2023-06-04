<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            class="textarea"
            placeholder="Add a new note"
            ref="newNoteRef"
          ></textarea>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <div class="buttons">
            <button :disabled="!newNote" @click="addNewNote" class="button is-success">
              Add New Note
            </button>
          </div>
        </div>
      </div>
    </div>

    <hr class="divider my-3" />

    <NoteItem v-for="note in storeNotes.notes" :note="note" :key="note.id" />
  </div>
</template>

<script setup lang="ts">
// imports
import { ref } from 'vue'
import NoteItem from '@/components/Notes/NoteItem.vue'
import { useStoreNotes } from '@/stores/storeNotes'

// stores
const storeNotes = useStoreNotes()

// notes
const newNote = ref('')
const newNoteRef = ref<HTMLButtonElement>()

// add new note
const addNewNote = () => {
  // const addNewNote = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 1000))

  storeNotes.addNote(newNote.value)

  newNote.value = ''
  newNoteRef.value?.focus()
}
</script>

<style scoped>
.notes {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
