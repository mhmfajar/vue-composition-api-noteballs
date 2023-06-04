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

    <NoteItem v-for="note in notes" :note="note" :key="note.id" @deleteClicked="deleteNote" />
  </div>
</template>

<script setup lang="ts">
// imports
import { ref } from 'vue'
import NoteItem from '@/components/Notes/NoteItem.vue'

// notes
const newNote = ref('')
const newNoteRef = ref<HTMLButtonElement>()
const notes = ref([
  {
    id: 1,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores at, nostrum non aut, laborum impedit placeat corrupti earum saepe molestiae veniam iusto quaerat tempora nihil delectus! Inventore, sapiente. Voluptatem, perspiciatis.'
  },
  {
    id: 2,
    content: 'This is a shorter note! Woo!'
  }
])

// add new note
const addNewNote = () => {
  // const addNewNote = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 1000))

  notes.value.push({
    id: notes.value.length + 1,
    content: newNote.value
  })

  newNote.value = ''
  newNoteRef.value?.focus()
}

// delete note
const deleteNote = (idNote: number) => {
  notes.value = notes.value.filter((note) => {
    return note.id !== idNote
  })
}
</script>

<style scoped>
.notes {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
