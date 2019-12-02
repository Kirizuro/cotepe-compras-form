<template>
  <v-card>
    <v-card-title>Relatorio das entradas</v-card-title>
    <table class="table">
      <tr class="tr-th">
        <th>Quem Criou</th>
        <th>Empresa</th>
        <th>Local</th>
        <th>Data</th>
        <th>Funcionarios</th>
        <th>Horas</th>
        <th>Horas Extra</th>
        <th>Viagem</th>
        <th>Veiculos</th>
        <th>Terceiros</th>
        <th>Função</th>
        <th>CREA</th>
        <th>Data/Hora</th>
      </tr>
      <tr v-for="value in result" :key="value.id">
        <td>{{ value.quem }}</td>
        <td>{{ value.empresa }}</td>
        <td>{{ value.local }}</td>
        <td>{{ value.data }}</td>
        <td>{{ value.funcionarios }}</td>
        <td>{{ value.horas }}</td>
        <td>{{ value.horaExtra }}</td>
        <td>{{ value.viagem }}</td>
        <td>{{ value.veiculos }}</td>
        <td>{{ value.terceiros }}</td>
        <td>{{ value.terceirosFunc }}</td>
        <td>{{ value.crea }}</td>
        <td>{{ value.datahora }}</td>
      </tr>
    </table>
  </v-card>
</template>

<script>
import { api } from '../services/Api';

export default {
  name: 'dashboard',

  data() {
    return {
      result: []
    };
  },

  methods: {
    async getApi() {
      try {
        const response = await api.get('/backupShow');
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

<style scoped>
.admin {
  font-weight: bold;
  text-align: center;
}

.table {
  table-layout: fixed;
  width: 100%;
  border: 3px solid black;
  border-collapse: collapse;
}

th,
td {
  padding: 20px;
}

tbody tr:nth-child(odd) {
  background-color: #2d37bd;
}

tbody tr:nth-child(even) {
  background-color: #517cda;
}
</style>
