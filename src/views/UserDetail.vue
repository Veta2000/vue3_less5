<template>
    <div>
      <h1>Профиль пользователя {{ id }}</h1>
    </div>
  </template>
  
  <script setup>
  const props = defineProps(['id']);
  </script>
  