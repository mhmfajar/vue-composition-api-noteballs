import { acceptHMRUpdate, defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => ({
    notes: [
      {
        id: 1,
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores at, nostrum non aut, laborum impedit placeat corrupti earum saepe molestiae veniam iusto quaerat tempora nihil delectus! Inventore, sapiente. Voluptatem, perspiciatis.'
      },
      {
        id: 2,
        content: 'This is a shorter note! Woo 1!'
      }
    ]
  }),
  actions: {
    addNote(content: string) {
      this.notes.push({
        id: this.notes.length + 1,
        content: content
      })
    },
    deleteNote(id: number) {
      this.notes = this.notes.filter((note) => {
        return note.id !== id
      })
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStoreNotes, import.meta.hot))
}
