<template>
  <div>
    <label>
      <v-date-picker
        v-model="selectedValues"
        v-checked:[options]="selectedValues"
        no-title
        full-width
        scrollable
        :value="selectedValues"
        range
      ></v-date-picker>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedValues: []
    };
  },
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

  computed: {
    dateRangeText() {
      return this.selectedValues.join(' ~ ');
    }
  }
};
</script>
