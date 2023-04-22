import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
    id: 'counter',
    // state is just the storage for the data in the store
    state: () => ({
        count: 0
    }),
    // methods to access the data and modify it
    actions: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        }
    },
    // getters to access the data
    getters: {
        isOdd() {
            return this.count % 2 === 1
        }
    }
})