import { acceptHMRUpdate, defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => ({
    notes: [
      {
        id: '1',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores at, nostrum non aut, laborum impedit placeat corrupti earum saepe molestiae veniam iusto quaerat tempora nihil delectus! Inventore, sapiente. Voluptatem, perspiciatis.'
      },
      {
        id: '2',
        content: 'This is a shorter note! Woo 1!'
      }
    ]
  }),
  actions: {
    addNote(content: string) {
      this.notes.push({
        id: `${this.notes.length + 1}`,
        content: content
      })
    },
    updateNote(id: string | string[], content: string) {
      const index = this.notes.findIndex((note) => note.id === id)
      this.notes[index].content = content
    },
    deleteNote(id: string) {
      this.notes = this.notes.filter((note) => note.id !== id)
    }
  },
  getters: {
    getNoteContent: (state) => {
      return (id: string | string[]): string => {
        const foundNote = state.notes.find((note) => note.id === id)
        return foundNote ? foundNote.content : ''
      }
    },
    getTotalNotesCount: (state) => state.notes.length,
    getTotalCharactersCount: (state) => {
      let content = 0
      state.notes.forEach((note) => {
        content += note.content.length
      })
      return content
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStoreNotes, import.meta.hot))
}
