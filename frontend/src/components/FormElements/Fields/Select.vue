<template>
  <div>
    <v-autocomplete
      item-text="nome"
      label="Escolha os funcionarios"
      multiple
      chips
      deletable-chips
      :items="options"
      :value="options"
      v-model="selectedValues"
      v-checked:[option]="selectedValues"
    ></v-autocomplete>
  </div>
</template>

<script>
import api from '../../../services/Api';
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
      results: []
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
