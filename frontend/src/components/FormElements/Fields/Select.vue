<template>
  <div>
    <v-autocomplete
      item-text="name"
      label="Escolha os funcionarios"
      multiple
      chips
      deletable-chips
      :items="options"
      :value="options"
      :id="options.id"
      v-model="selectedValues"
    ></v-autocomplete>
  </div>
</template>

<script>
import api from '../../FormTemplate';

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
      selectedValues: []
      /*results: [],
      result: results.map(el => {
        return el.id;
      })*/
    };
  },

  mounted() {
    this.getApi();
  },

  methods: {
    async getApi() {
      try {
        const response = await api.get(`/funcionarios`);
        this.result = response.data;
      } catch (error) {
        return error;
      }
    }
  }
};
</script>
