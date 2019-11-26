<template>
  <v-row>
    <v-col align-self="center" lg="12">
      <h1 v-for="teste in result" :key="teste.id">
        <div>
          {{ teste.nome }}
        </div>
      </h1>
    </v-col>
  </v-row>
</template>

<script>
import { api } from '../services/Api';

export default {
  name: 'teste',

  data() {
    return {
      result: []
    };
  },

  methods: {
    async getApi() {
      try {
        const response = await api.get('/funcionarios');
        this.result = response.data.result.recordset;
      } catch (error) {
        return error;
      }
    }
  },

  mounted() {
    this.getApi();
  }
};
</script>
