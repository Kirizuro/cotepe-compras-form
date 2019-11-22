<template>
  <div>
    <nav class="logo">
      <p>Inicio do cadastramento da PV</p>
      <p>
        Número Provisório dessa PV:
        <span>{{ `${date}/${Math.floor(Math.random() * 1000)}` }} </span>
      </p>
      <img src="../assets/img/logo cotepe.svg" alt="" />
    </nav>
    <form-config-provider />
  </div>
</template>

<script>
import FormConfigProvider from '../components/FormConfigProvider';

export default {
  name: 'home',
  components: {
    FormConfigProvider
  },
  data() {
    return {
      date: new Date().getFullYear()
    };
  }
};
</script>

<style>
@import '../assets/styles/main.css';
@import url('https://cdn.jsdelivr.net/npm/animate.css@3.5.1');
</style>
