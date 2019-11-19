<template>
  <v-row>
    <v-col lg="12">
      <v-carousel>
        <v-carousel-item>
          <p>teste</p>
          {{ test }}
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
</template>

<script>
import axios from 'axios';
import api from '../services/Api';

export default {
  name: 'teste',

  data() {
    return {
      test: ''
    };
  },

  methods: {
    async getApi() {
      try {
        const response = await axios.get(api);
        this.test = response;
        // eslint-disable-next-line
        console.log(response);
      } catch (error) {
        // eslint-disable-next-line
        console.log(error);
      }
    }
  },

  mounted() {},
  async getApi() {
    try {
      const response = await axios.get(api);
      this.test = response;
      // eslint-disable-next-line
      console.log(response);
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    }
  }
};
</script>
