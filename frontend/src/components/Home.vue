<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="900px">
        <v-card>
          <v-card-title>
            <span class="headline"
              >Informe seu login (O mesmo login e senha da intranet)</span
            >
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Usuario"
                    hint="Mesmas credenciais da intranet"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Senha"
                    hint="Mesmas credenciais da intranet"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="black" text @click="(dialog = false), login"
              >Iniciar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <Home />
  </div>
</template>

<script>
import Home from '../views/Home';

import { api } from '../services/Api';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'home',
  components: {
    Home
  },

  data() {
    return {
      dialog: true
    };
  },

  computed: {
    ...mapGetters(['jwt', 'jwtData', 'jwtSubject', 'jwtIssuer'])
  },

  actions: {},

  methods: {
    ...mapActions([`fetchJwt`]),

    async logIn() {
      const result = await api.post(`/login`, {
        headers: new Headers({
          authorization: `Bearer: ${this.jwt}`
        })
      });
      return result;
    }
  },

  mounted() {
    this.fetchJwt({
      user: 'user',
      password: 'password'
    });
  }
};
</script>
