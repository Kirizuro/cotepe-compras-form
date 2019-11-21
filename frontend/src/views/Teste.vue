<template>
  <v-row>
    <v-col lg="12">
      <v-carousel>
        <v-carousel-item>
          <h1>
            {{ result }}
          </h1>
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
</template>

<script>
import api from '../services/Api';

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
        return (this.result = response.result);
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
