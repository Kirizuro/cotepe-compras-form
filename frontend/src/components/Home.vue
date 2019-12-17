<template>
  <div>
    <v-row justify="center">
      <!--
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
                    persistent-hint
                    v-model="user"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Senha"
                    persistent-hint
                    v-model="password"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="black"
              text
              @click="dialog = false /*Login(user, password)*/"
              >Iniciar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>-->
    </v-row>
    <Home />
  </div>
</template>

<script>
import Home from '../views/Home';

import { api } from '../services/Api';

export default {
  name: 'home',
  components: {
    Home
  },

  data() {
    return {
      dialog: true,
      user: '',
      password: ''
    };
  },

  computed: {},

  methods: {
    async logIn() {
      const result = await api.post(`/login`, {
        data: {
          user: this.user,
          password: this.password
        }
      });
      this.dialog = false;
      return result;
    },

    async Login(user, password) {
      try {
        await api.post(`/login`, {
          user: user,
          password: password
        });
      } catch (error) {
        throw error;
      }
    }
  }
};
</script>
