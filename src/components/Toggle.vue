<template>
    <div>
      <label>
        <input type="checkbox" v-model="toggleValue" />
        {{ toggleValue ? 'Включено' : 'Выключено' }}
      </label>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const toggleValue = ref(false);
  </script>  
  
  <style>
  .active {
    background-color: rgb(4, 0, 128);
  }
  </style>
  