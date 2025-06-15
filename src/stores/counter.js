import { defineStore } from "pinia";

export const useCounterStore = defineStore('drax', {
    state: () => ({
        count: 0,
    }),
    actions: {
        increment() {
            this.count++;
            console.log(this.count);
        }
    }
})