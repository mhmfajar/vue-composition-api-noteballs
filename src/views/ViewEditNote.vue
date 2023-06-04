<template>
  <div class="edit-note">
    <NoteForm
      v-model="noteContent"
      bgColor="link"
      ref="noteRef"
      placeholder="Edit note"
      label="Edit Note"
    >
      <template #button>
        <div class="buttons">
          <button class="button is-link is-light" type="button" @click="$router.back()">
            Cancel
          </button>
          <button
            @click="handleSaveClicked"
            class="button is-link"
            :disabled="!noteContent"
            type="button"
          >
            Save Note
          </button>
        </div>
      </template>
    </NoteForm>
  </div>
</template>

<script setup lang="ts">
// imports
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStoreNotes } from '@/stores/storeNotes'
import NoteForm from '@/components/Notes/NoteForm.vue'

// router
const route = useRoute()
const router = useRouter()

// store
const storeNotes = useStoreNotes()

// note
const noteContent = ref('')
noteContent.value = storeNotes.getNoteContent(route.params.id)

// save clicked
const handleSaveClicked = () => {
  storeNotes.updateNote(route.params.id, noteContent.value)

  router.push('/')
}
</script>
