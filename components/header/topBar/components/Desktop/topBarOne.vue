<template>
  <span translate="no" :style="layout.topBar.main">
    <v-row align="center">
      <!-- Menu ao lado do logo -->
      <v-col cols="4" class="d-flex align-center">
        <v-menu v-model="menuOpen" offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon class="menu-button" v-bind="attrs" v-on="on" @click="toggleMenu">
              <v-icon class="menu-icon">mdi-menu</v-icon>
            </v-btn>
          </template>

          <v-list class="custom-menu">
            <nav-bar-one @click.native.stop />
          </v-list>
        </v-menu>
      </v-col>

      <!-- Logo -->
      <v-col cols="4" class="d-flex justify-center">
        <router-link to="/" class="logo-container">
          <img
            :style="layout.topBar.topBarLogoImg"
            :src="layout.topBar.logoUrl"
            alt="Logo da topBar"
          />
        </router-link>
      </v-col>

      <!-- Ícones de Conta, Meus Pedidos e Carrinho -->
      <v-col cols="4" class="d-flex justify-end icons-container">
        <button class="cart-button" @click.stop="callPrimaryDrawer()" @click="setCartModal(!cartDialog)">
          <i class="mdi mdi-cart-outline"></i>
          <span class="cart-text">{{ getProductsWithoutSale.totalItems }}</span>
        </button>
      </v-col>
    </v-row>
  </span>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import cartDialog from "../../../../body/orderSection/cart/components/cartDialogLegacy.vue";
import NavBarOne from "@/components/header/navBar/components/mobile/navBarOne";

export default {
  components: { cartDialog, NavBarOne },

  data() {
    return {
      menuOpen: false,
    };
  },
  computed: {
    ...mapState("Layouts", ["layout", "config"]),
    ...mapState("User", ["user"]),
    ...mapGetters("Cart", ["totalAmountInCart", "getProductsWithoutSale"]),
    ...mapState("Cart", ["primaryDrawer", "cartDialog"]),
  },
  methods: {
    ...mapActions("Cart", ["setCartModal", "callPrimaryDrawer"]),
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
/* Estilização geral do menu */
.menu-button {
  background-color: #ffffff; /* Cor de fundo marrom */
  color: #fff;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.menu-button:hover {
  background-color: #8b5e3c; /* Cor mais clara no hover */
}

.menu-icon {
  font-size: 28px;
}

/* Lista do menu */
.custom-menu {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  min-width: 200px;
}

.custom-menu >>> .v-list-item {
  padding: 10px 20px;
  transition: background-color 0.3s ease;
}

.custom-menu >>> .v-list-item:hover {
  background-color: #f5f5f5;
}

/* Ícones de conta e carrinho */
.icons-container {
  gap: 20px;
}

.cart-button {
  text-decoration: none;
  margin-right: 2em; /* Ajusta o carrinho um pouco mais para a esquerda */
  display: flex;
  align-items: center;
}

.cart-button:hover {
  color: #8b5e3c;
}

.cart-button i {
  font-size: 28px;
  margin-right: 5px;
}

.cart-text {
  font-weight: bold;
}

/* Logo */
.logo-container {
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 600px) {
  .icons-container {
    gap: 10px;
  }

  .cart-button i {
    font-size: 24px;
  }

  .menu-icon {
    font-size: 24px;
  }
}
</style>
