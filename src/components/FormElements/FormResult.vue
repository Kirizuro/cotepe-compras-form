<template>
  <v-container>
    <type-based-transition :transitionType="'fadeUpDown'">
      <div v-if="isComplete" id="complete" class="form-complete">
        <h1>As informações estão corretas?</h1>
        <v-layout>
          <v-flex wrap text-center>
            <v-btn class="btn" outlined color="primary">Estão</v-btn>
            <v-btn class="btn" outlined color="secondary">Não estão</v-btn>
          </v-flex>
        </v-layout>
        <v-row>
          <v-col
            xs="12"
            sm="12"
            md="6"
            lg="4"
            v-for="(item, key, index) in $store.state.lead.formData"
            :key="key"
            shaped
            disabled
          >
            <v-card height="100">
              <v-card-title v-colorswatch:color="index">
                {{ item }}
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </type-based-transition>
  </v-container>
</template>
<script>
import TypeBasedTransition from '../Transitions/TypeBasedTransition.vue';

export default {
  name: 'form-result',
  inject: ['formState'],
  components: {
    TypeBasedTransition
  },
  computed: {
    isComplete() {
      return this.formState.isComplete;
    }
  }
};
</script>

<style>
.btn {
  margin: 5px;
}
</style>
