<template>
    <div>
      <h1>Вход</h1>
      <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="Имя пользователя" />
        <input type="password" v-model="password" placeholder="Пароль" />
        <button type="submit">Войти</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const username = ref('');
  const password = ref('');
  const router = useRouter();
  
  const login = () => {
    if (username.value === 'admin' && password.value === 'password') {
      router.push('/admin');
    } else {
      alert('Неверные данные');
    }
  };
  </script>
  