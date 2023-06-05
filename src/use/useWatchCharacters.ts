import { watch, type Ref } from 'vue'

export const useWatchCharacters = (valueToWatch: Ref, maxCharLength: number = 100) => {
  watch(valueToWatch, (newValue) => {
    if (newValue.length === maxCharLength) alert(`Only ${maxCharLength} characters allowed!`)
  })
}
