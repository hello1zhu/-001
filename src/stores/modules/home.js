import { defineStore } from 'pinia';
import { getHotSuggests } from '@/service';

const homeStoreOptions = {
    state: () => ({
      hotSuggests: []
    }),
    actions: {
      async fetchHotSuggests() {
        const res = await getHotSuggests()
        this.hotSuggests = res.data
      }
    }
}
  
const useHomeStore = defineStore('home', homeStoreOptions)
  
export default useHomeStore