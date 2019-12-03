<template>
  <type-based-transition :transitionType="'fadeUpDown'">
    <div v-if="isComplete" id="complete" class="form-complete">
      <h1>As informações estão corretas?</h1>
      <v-layout>
        <v-flex wrap text-center>
          <router-link to="/">
            <v-btn class="btn" @click="insert" color="primary">Estão</v-btn>
          </router-link>
        </v-flex>
      </v-layout>
      <v-row>
        <v-col
          xs="12"
          sm="12"
          md="6"
          lg="4"
          v-for="(item, key, index) in $store.state.lead.formData"
          :key="key"
          shaped
          disabled
        >
          <v-card height="100">
            <v-card-title v-colorswatch:color="index">
              {{ item }}
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </type-based-transition>
</template>
<script>
import TypeBasedTransition from '../Transitions/TypeBasedTransition.vue';
import { api } from '../../services/Api';

export default {
  name: 'form-result',
  inject: ['formState'],
  components: {
    TypeBasedTransition
  },
  computed: {
    isComplete() {
      return this.formState.isComplete;
    }
  },
  data() {
    return {
      formFilled: this.$store.state.lead.formData
    };
  },
  methods: {
    async insert() {
      try {
        const result = await api.post(`/backup`, {
          quem: this.formFilled.quem,
          parceiro: this.formFilled.parceiro,
          data: this.formFilled.idaVolta,
          funcionarios: this.formFilled.funcionarioNome,
          horas: this.formFilled.horasTrabalho,
          horasExtras: this.formFilled.horasExtras,
          viagem: this.formFilled.viagem,
          veiculos: this.formFilled.veiculos,
          terceiros: this.formFilled.terceiros,
          terceirosFunc: this.formFilled.funcaoTerc,
          crea: this.formFilled.crea
        });
        return result;
      } catch (error) {
        return error;
      }
    }
  }
};
</script>

<style>
.btn {
  margin: 5px;
}
</style>
