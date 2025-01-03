<template>
    <v-row class="d-flex justify-center align-center" style="min-height: 60vh;">
      <!-- Coluna de Login -->
      <v-col
        cols="12"
        sm="5"
        class="d-flex flex-column align-center"
        style="padding: 20px; "
      >
        <h2 class="text-center mb-4">Já sou cadastrado</h2>
        <p class="text-center mb-4">
          Para se autenticar, informe seu e-mail ou CPF/CNPJ
        </p>
        <v-text-field
        outlined
        class="mb-2"
        color="primary"
        label="E-mail"
        v-model="formData.email"
        @keyup="forceLowerMail(formData.email)"
        style="width: 55vw; " 
      ></v-text-field>
      
      <v-text-field
        outlined
        class="mb-2"
        color="primary"
        label="Senha"
        type="password"
        v-model="formData.password"
        @keydown.enter="login(formData)"
        style="width: 55vw;" 
      ></v-text-field>
      
        <v-btn
          class="mb-2"
          color="success"
          @click="login(formData)"
          style="width: 30vw;"
        >
          Entrar
        </v-btn>
        <button
          class="text-button mt-2"
          @click="accountLost(formData.email)"
          style="text-align: center;"
        >
          Esqueci minha senha
        </button>
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
