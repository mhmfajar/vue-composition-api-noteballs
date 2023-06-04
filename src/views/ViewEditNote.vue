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
          <button class="button is-link" :disabled="!noteContent" type="button">Save Note</button>
        </div>
      </template>
    </NoteForm>
  </div>
</template>

<script setup lang="ts">
// imports
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStoreNotes } from '@/stores/storeNotes'
import NoteForm from '@/components/Notes/NoteForm.vue'

// router
const route = useRoute()

// store
const storeNotes = useStoreNotes()

// note
const noteContent = ref('')
noteContent.value = storeNotes.getNoteContent(route.params.id)
</script>
