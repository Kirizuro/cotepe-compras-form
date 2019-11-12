<template>
  <div>
    <v-select
      multiple
      label="Escolha os funcionarios"
      type="select"
      item-text="name"
      chips
      rounded
      :items="worker"
      :value="worker.name"
      :id="worker.id"
      v-model="selectedValues"
      v-checked:[worker]="selectedValues"
    ></v-select>
  </div>
</template>

<script>
import Workers from "../../../config/workersConfig"

export default {
  name: "Select",

  data() {
    return {
      selectedValues: [],
      worker: Workers
    }
  },
  props: {
    //worker: {},
    value: {
      required: true,
      default: () => []
    }
  },
  watch: {
    selectedValues(newVal) {
      this.$emit("v-select", newVal)
    }
  },

  created() {
    if (this.value.length > 0) this.selectedValues = this.value
  },
  directives: {
    checked(el, binding) {
      return binding.value.includes(binding.arg) ? (el.checked = true) : (el.checked = false)
    }
  }
}
</script>
