<template>
    <div>
      <h1>Добро пожаловать!</h1>
      <Counter v-model="counter" />
      <CustomSelect :options="['Option 1', 'Option 2', 'Option 3']" v-model="selectedOption" />
      <Toggle v-model="toggleState" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Counter from '../components/Counter.vue';
  import CustomSelect from '../components/CustomSelect.vue';
  import Toggle from '../components/Toggle.vue';
  
  const counter = ref(0);
  const selectedOption = ref('');
  const toggleState = ref(false);
  </script>
  