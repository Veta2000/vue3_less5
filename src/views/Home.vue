<template>
    <div>
      <h1>Добро пожаловать!</h1>
      <Counter v-model="counter" />
      <CustomSelect :options="['Option 1', 'Option 2', 'Option 3']" v-model="selectedOption" />
      <Toggle v-model="toggleState" />
      <button @click="goToLogin">Войти</button>
      <button @click="goToUserPage">Страница пользователя</button>
      <button @click="goToAdminPage">Страница администратора</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Counter from '../components/Counter.vue';
  import CustomSelect from '../components/CustomSelect.vue';
  import Toggle from '../components/Toggle.vue';
  import { useRouter } from 'vue-router';
  
  
  const counter = ref(0);
  const selectedOption = ref('');
  const toggleState = ref(false);
  
  const router = useRouter();
  
  const goToLogin = () => {
    router.push('/login');
  };
  
  const goToUserPage = () => {
    const role = localStorage.getItem('role');
    if (role === 'user') {
      const username = localStorage.getItem('username');
      router.push(`/user/${username}/info`);
    } else {
      router.push('/404');
    }
  };
  
  const goToAdminPage = () => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      router.push('/admin');
    } else {
      router.push('/404');
    }
  };
  </script>
  
  <style scoped>
  h1 {
    color: #000b6b;
  }
  button {
    margin: 8px;
  }
  </style>
  