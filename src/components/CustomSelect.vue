<template>
    <select v-model="selected">
      <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
    </select>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const props = defineProps(['modelValue', 'options']);
  const emit = defineEmits(['update:modelValue']);
  
  const selected = ref(props.modelValue);
  
  watch(selected, (newValue) => {
    emit('update:modelValue', newValue);
  });
  </script>
  