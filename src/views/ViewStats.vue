<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ getTotalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Character (of all notes)</td>
          <td>{{ getTotalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
// imports
import { useStoreNotes } from '@/stores/storeNotes'

// store
const { getTotalCharactersCount, getTotalNotesCount } = useStoreNotes()
</script>

<style scoped>
.stats > .table th,
.stats > .table tr {
  text-align: center;
}
</style>
