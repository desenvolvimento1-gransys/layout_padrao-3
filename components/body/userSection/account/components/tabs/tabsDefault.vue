<template>
  <v-row justify="center" style="margin-top: 20px;">
    <!-- Container principal -->
    <v-col cols="12" sm="12" md="12">
      <v-card>
        <v-row no-gutters>
          <!-- Menu Lateral -->
          <v-col cols="12" sm="4" class="menu-lateral">
            <v-list dense>
              <v-list-item
                v-for="(item, index) in menuItems"
                :key="index"
                :to="item.route"
                :style="changeActiveStyle(item.route)"
                link
                class="menu-item-large"
              >
                <v-list-item-icon>
                  <v-icon large>{{ item.icon }}</v-icon> <!-- Aumenta o ícone -->
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="menu-item-text-large">
                    {{ item.text }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item
                @click="setExitDialog(true)"
                style="cursor: pointer;"
                class="menu-item-large"
              >
                <v-list-item-icon>
                  <v-icon large>mdi-logout</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="menu-item-text-large">
                    Sair
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>

          <!-- Conteúdo -->
          <v-col cols="12" sm="8">
            <v-card flat tile style="padding: 20px; height: 80%;">
              <slot></slot>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      tab: null,
      menuItems: [
        { text: "Minha conta", icon: "mdi-account", route: "/conta/minha-conta" },
        { text: "Meus pedidos", icon: "mdi-clipboard-text", route: "/conta/pedidos" },
        { text: "Meus endereços", icon: "mdi-map-marker", route: "/conta/enderecos" },
      ],
    };
  },
  computed: {
    ...mapState("Layouts", ["config", "layout"]),
  },
  methods: {
    ...mapActions("Utils", ["setExitDialog"]),
    changeActiveStyle(route) {
      return this.$nuxt.$route.path === route
        ? this.layout.account.tabs.activeStyle
        : this.layout.account.tabs.regularStyle;
    },
  },
};
</script>

<style>
/* Aumentando o tamanho da div */
.menu-item-large {
  padding: 20px 25px; /* Ajuste o tamanho para aumentar a área clicável */
  height: 70px; /* Altura maior */
}

/* Aumentando o texto */
.menu-item-text-large {
  font-size: 24px; /* Tamanho maior para o texto */
  font-weight: bold;
}

/* Ajustando o tamanho do ícone */
v-icon.large {
  font-size: 28px; /* Aumenta o tamanho do ícone */
}

/* Estilização adicional no hover */
.menu-item-large:hover {
  background-color: #f5f5f5;
  border-radius: 5px;
}
</style>
