<template>
  <div>
    <nav class="logo">
      <p>Inicio do cadastramento da PV</p>
      <p>
        Número Provisório dessa PV:
        <span>{{ pv.data.message.recordset.length }} </span>
      </p>
      <img src="../assets/img/logo cotepe.svg" alt="" />
    </nav>
    <form-config-provider />
    <!-- Action to future dashboard access
    <div v-show="this.show" @keydown.enter="adminShow">
      <router-link to="admin"><v-btn color="primary">teste</v-btn></router-link>
    </div>
    -->
  </div>
</template>

<script>
import FormConfigProvider from '../components/FormConfigProvider';
import { api } from '../services/Api';

export default {
  name: 'home',
  components: {
    FormConfigProvider
  },
  data() {
    return {
      date: new Date().getFullYear(),
      pv: ''
      //show: false
    };
  },
  methods: {
    async pvGet() {
      try {
        const result = await api.get('/pv');

        this.pv = result;
      } catch (error) {
        throw error;
      }
    }
    //adminShow() {
    //this.show = true;
    //}
  },
  beforeMount() {
    this.pvGet();
  }
};
</script>

<style>
@import '../assets/styles/main.css';
@import url('https://cdn.jsdelivr.net/npm/animate.css@3.5.1');
</style>
