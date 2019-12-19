<template>
  <type-based-transition :transitionType="'fadeUpDown'">
    <div v-if="isComplete" id="complete" class="form-complete">
      <h1>
        Antes de continuar registre essa proposta dentro do SAP, e use o novo
        número da PV a seguir:
      </h1>
      <v-row class="text-center">
        <v-col wrap text-center>
          <v-btn class="btn" to="/" @click="dialog = true" color="primary"
            >Confirmar</v-btn
          >
        </v-col>
      </v-row>
      <v-dialog v-model="dialog" persistent max-width="900px">
        <v-card>
          <v-card-title>
            <span class="headline">Insira o número da PV</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Proposta de Venda"
                    persistent-hint
                    v-model="pv"
                    type="number"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="black" text @click="insert">Confirmar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
</template>
<script>
import TypeBasedTransition from '../Transitions/TypeBasedTransition.vue';
import { api } from '../../services/Api';

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
  },
  data() {
    return {
      formFilled: this.$store.state.lead.formData,
      dialog: false,
      pv: ''
    };
  },
  methods: {
    async insert() {
      try {
        const result = await api.post(`/backup`, {
          quem: this.formFilled.quem,
          parceiro: this.formFilled.parceiro,
          data: this.formFilled.idaVolta,
          funcionarios: this.formFilled.funcionarioNome,
          horas: this.formFilled.horasTrabalho,
          horasExtras: this.formFilled.horasExtras,
          viagem: this.formFilled.viagem,
          veiculos: this.formFilled.veiculos,
          terceiros: this.formFilled.terceiros,
          terceirosFunc: this.formFilled.funcaoTerc,
          crea: this.formFilled.crea,
          pv: this.pv
        });
        return result;
      } catch (error) {
        throw error;
      }
    }
  }
};
</script>

<style>
.btn {
  margin: 5px;
}
</style>
