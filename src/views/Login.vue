<template> 
  <div>
    <h2>Логин</h2>
    <input v-model="username" placeholder="Имя пользователя" />
    <input v-model="password" type="password" placeholder="Пароль" />
    <button @click="login">Войти</button>
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
    localStorage.setItem('auth', true);  
    localStorage.setItem('role', 'admin'); 
    localStorage.setItem('username', username.value); 
    router.push('/'); 
  } else if (username.value === 'user' && password.value === 'password') {
    localStorage.setItem('auth', true); 
    localStorage.setItem('role', 'user');
    localStorage.setItem('username', username.value);
    router.push('/');
  } else {
    alert('Неверные данные');
  }
};
</script>

<style scoped>
h2 {
  color: #000b6b;
}
input {
  display: block;
  margin: 10px 0;
  padding: 8px;
  font-size: 16px;
}
button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
