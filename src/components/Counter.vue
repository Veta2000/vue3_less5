<template>
    <div>
      <button @click="counter--">-</button>
      <span>{{ counter }}</span>
      <button @click="counter++">+</button>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const props = defineProps(['modelValue']);
  const emit = defineEmits(['update:modelValue']);
  
  const counter = ref(props.modelValue);
  
  watch(counter, (newValue) => {
    emit('update:modelValue', newValue);
  });
  </script>
  