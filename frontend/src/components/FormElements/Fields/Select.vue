<template>
  <div>
    <v-autocomplete
      item-text="nome"
      label="Escolha os funcionarios"
      multiple
      chips
      deletable-chips
      :items="result"
      :value="result"
      v-model="selectedValues"
      v-checked:[result]="selectedValues"
    ></v-autocomplete>
  </div>
</template>

<script>
import { api } from '../../../services/Api';
export default {
  props: {
    options: {
      required: true
    },
    value: {
      required: false,
      default: () => []
    }
  },
  watch: {
    selectedValues(newVal) {
      this.$emit('input', newVal);
    }
  },

  created() {
    if (this.value.length > 0) this.selectedValues = this.value;
  },
  directives: {
    checked(el, binding) {
      return binding.value.includes(binding.arg)
        ? (el.checked = true)
        : (el.checked = false);
    }
  },
  data() {
    return {
      selectedValues: [],
      result: []
    };
  },
  methods: {
    async getApi() {
      try {
        const response = await api.get('/funcionarios');
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
