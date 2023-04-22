<script setup>
import { ref, computed } from 'vue'
import { useCounterStore } from './stores/counter'

const storeCounter = useCounterStore()

const count = ref(0)

const isOdd = computed(() => count.value % 2 === 1)
</script>

<template>
  <div id="app">
    <div class="count">
      {{ storeCounter.count }}
    </div>
    <div class="buttons">
      <!-- use storeCounter actions -->
      <button @click="storeCounter.decrement" >-</button>
      <button @click="storeCounter.increment">+</button>
    </div>    
    <hr>
    <div>
      <!-- use storeCounter getters -->
      This counter is: {{ storeCounter.isOdd ? 'odd' : 'even' }}
    </div>
    <hr>
    <div>
      <!-- binding to storeCounter.count -->
      Edit counter:
      <input type="number" v-model.number="storeCounter.count">
    </div>
  </div>
</template>>