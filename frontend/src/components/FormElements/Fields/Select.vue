<template>
  <div>
    <div v-if="options === 'funcionarios'">
      <v-autocomplete
        item-text="nome"
        multiple
        chips
        deletable-chips
        :items="result"
        :value="result"
        v-model="selectedValues"
        v-checked:[result]="selectedValues"
      ></v-autocomplete>
    </div>
    <div v-else>
      <v-autocomplete
        item-text="CardName"
        :items="result"
        :value="result"
        v-model="selectedValues"
        v-checked:[result]="selectedValues"
      ></v-autocomplete>
    </div>
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
      result: [],
      regist: []
    };
  },
  methods: {
    async getApi(search) {
      try {
        const response = await api.get(`/${search}`);
        this.result = await response.data.result.recordset;
      } catch (error) {
        return error;
      }
    }
  },
  beforeMount() {
    this.getApi(this.options);
  }
};
</script>
