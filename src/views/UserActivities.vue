<template>
    <div>
      <h2>Активности пользователя</h2>
      <ul>
        <li v-for="(activity, index) in activities" :key="index">
          {{ activity }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const userId = route.params.id;
  
  
  const activities = ref([
    'Посетил ',
    'Участвовал в ',
  ]);
  </script>
  
  <style scoped>
  h2 {
    color: #000b6b;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    padding: 8px 0;
  }
  </style>
  