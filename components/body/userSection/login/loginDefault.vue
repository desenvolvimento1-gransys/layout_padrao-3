<template>
  <v-row class="d-flex justify-center align-center" style="min-height: 60vh;">
    <!-- Coluna de Login -->
    <v-col
      cols="12"
      sm="5"
      class="d-flex flex-column align-center"
      style="padding: 20px;"
    >
      <h2 class="text-center mb-4">Já sou cadastrado</h2>
      <p class="text-center mb-4">
        Para se autenticar, informe seu e-mail ou CPF/CNPJ      </p>
      <v-btn
        color="success"
        class="mb-2"
        @click="$nuxt.$router.push({ path: '/login-user' })"
        style="width: 30vw; border: 2px solid #4caf50;"
      >
        Entrar
      </v-btn>
    </v-col>

    <!-- Coluna de Cadastro -->
    <v-col
      cols="12"
      sm="5"
      class="d-flex flex-column align-center"
      style="padding: 20px;"
    >
      <h2 class="text-center mb-4">Esta é minha primeira compra</h2>
      <p class="text-center mb-4">
        O cadastro em nossa loja é simples e rápido
      </p>
      <v-btn
        outlined
        color="success"
        class="mb-2"
        @click="$nuxt.$router.push({ path: '/criar-conta' })"
        style="width: 30vw; border: 2px solid #4caf50;"
      >
        Cadastre-se
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data: function () {
    return {
      formData: {},
    };
  },
  computed: {
    ...mapState("Layouts", ["layout"]),
    ...mapState("User", ["loginErrors", "errorsAccountLost"]),
  },
  methods: {
    ...mapActions("User", ["accountLost", "login", "cleanAccountLostErrors"]),
    forceLowerMail(value) {
      this.formData.email = value.toLowerCase();
    },
  },
  beforeDestroy: function () {
    this.cleanAccountLostErrors();
  },
};
</script>

<style>
.text-center {
  text-align: center;
}
.mb-2 {
  margin-bottom: 16px;
}
.mb-4 {
  margin-bottom: 32px;
}
.text-button {
  background: none;
  border: none;
  color: #1976d2;
  cursor: pointer;
  text-decoration: underline;
}
.text-button:hover {
  text-decoration: none;
}
</style>
