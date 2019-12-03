<template>
  <div>
    <v-card>
      <router-link to="/">
        <v-card-title>Relatorio das entradas</v-card-title>
      </router-link>

      <table class="table">
        <thead>
          <tr class="tr-th">
            <th @click="sort('quem')">Quem Criou</th>
            <th @click="sort('parceiro')">Parceiro</th>
            <th @click="sort('data')">Data</th>
            <th @click="sort('funcionarios')">Funcionarios</th>
            <th @click="sort('horas')">Horas</th>
            <th @click="sort('horaExtra')">Horas Extra</th>
            <th @click="sort('viagem')">Viagem</th>
            <th @click="sort('veiculos')">Veiculos</th>
            <th @click="sort('terceiros')">Terceiros</th>
            <th @click="sort('funcao')">Função</th>
            <th @click="sort('crea')">CREA</th>
            <th @click="sort('datahora')">Data/Hora</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="value in sortingResult" :key="value.id">
            <td>{{ value.quem }}</td>
            <td>{{ value.parceiro }}</td>
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
        </tbody>
      </table>
    </v-card>
    <v-flex text-center>
      <v-btn class="btn" color="secondary" @click="prevPage">Anterior</v-btn>
      <v-btn class="btn" color="primary" @click="nextPage">Próximo</v-btn>
    </v-flex>
  </div>
</template>

<script>
import { api } from '../services/Api';

export default {
  name: 'dashboard',

  data() {
    return {
      result: [],
      currentSort: 'quem',
      currentSortDir: 'asc',
      pagesize: 5,
      currentPage: 1
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
    },
    sort(s) {
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
      }
      this.currentSort = s;
    },

    nextPage() {
      if (this.currentPage * this.pagesize < this.result.length)
        this.currentPage++;
    },

    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    }
  },

  computed: {
    sortingResult() {
      return this.result
        .slice()
        .sort((a, b) => {
          let modifier = 1;
          if (this.currentSortDir === 'desc') modifier = -1;
          if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
          if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
          return 0;
        })
        .filter((row, index) => {
          const start = (this.currentPage - 1) * this.pagesize;
          const end = this.currentPage * this.pagesize;

          if (index >= start && index < end) return true;
        });
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

td {
  padding: 20px;
  color: white;
  font-weight: 500;
}

th {
  cursor: pointer;
}

tbody tr:nth-child(odd) {
  background-color: #2d37bd;
}

tbody tr:nth-child(even) {
  background-color: #517cda;
}

.btn {
  margin: 30px 10px 0 auto;
}

a {
  text-decoration: none;
}
</style>
