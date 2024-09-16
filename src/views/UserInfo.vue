<template>
    <div>
      <h2>Информация о пользователе</h2>
      <p><strong>ID пользователя:</strong> {{ userId }}</p>
      <p><strong>Имя пользователя:</strong> {{ userName }}</p>
      <p><strong>Email:</strong> {{ userEmail }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const userId = route.params.id;
  

  const userName = ref('Имя Фамилия');
  const userEmail = ref('Почта');
  </script>
  
  <style scoped>
  h2 {
    color: #007bff;
  }
  </style>
  