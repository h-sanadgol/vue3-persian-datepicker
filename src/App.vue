<script lang="ts" setup>
  import DatePicker from './components/DatePicker.vue';
</script>

<template>
  <DatePicker
    alt-name="rest"
    type="time"
    :minute-step="10"
    :hour-step="2"
  ></DatePicker>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
