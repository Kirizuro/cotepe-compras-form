<template>
  <div>
    <div v-if="options != false">
      <label v-for="(option, key) in options" :key="key">
        <input
          type="radio"
          :value="option"
          @input="$emit('input', $event.target.value)"
          :checked="option === value"
        />
        {{ option }}
      </label>
    </div>
    <div v-else>
      <label v-for="(options, key) in result" :key="key">
        <input
          type="radio"
          :value="options.nome"
          @input="$emit('input', $event.target.value)"
          :checked="options === value"
        />
        {{ options.nome }}
      </label>
    </div>
  </div>
</template>

<script>
import { api } from '../../../services/Api';

export default {
  props: ['options', 'value'],
  data() {
    return {
      result: []
    };
  },
  methods: {
    async getApi() {
      try {
        const response = await api.get('/vendas');
        this.result = await response.data.result.recordset;
      } catch (error) {
        return error;
      }
    }
  },
  beforeMount() {
    this.getApi();
  }
};
</script>
