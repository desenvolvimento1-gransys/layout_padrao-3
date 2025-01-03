<template>
  <span>
    <div :style="layout.topBar.mobile.main">
      <v-row :style="layout.topBar.topBarBorderMobile" align="center" no-gutters>
        <v-col
          cols="12"
          class="d-flex align-center"
          style="justify-content: center"
        >
          <v-icon
            :style="layout.footer.logoSession.midiaLinks2[2].iconStyle"
            class="mdi mdi-shield-lock-outline"
          ></v-icon>
          <span style="color: white; margin-left: 5px; font-size: 12px"
            >Navegue com tranquilidade, nosso site é 100% seguro!
          </span>
        </v-col>

        <!-- <v-col
        cols="3"
        align="center"
        :class="layout.topBar.colClass"
        style="color: white; font-size: 10px"
      >
        <v-icon
          :style="layout.footer.logoSession.midiaLinks2[2].iconStyle"
          class="mdi mdi-google-maps"
        ></v-icon>
        <span style="color: white; margin-left: 5px; font-size: 14px">
          Rua Álvaro Pacheco Silveira, 115, Leme-SP
        </span>
      </v-col>

      <v-col cols="3" align="center" :class="layout.topBar.colClass">
        <v-icon
          :style="layout.footer.logoSession.midiaLinks2[2].iconStyle"
          class="mdi mdi-truck-check-outline"
        ></v-icon>
        <span style="color: white; margin-left: 5px; font-size: 14px">
          Frete grátis acima de R$ 399,99
        </span>
      </v-col> -->

        <!-- <v-col
          cols="6"
          class="d-flex align-center"
          style="justify-content: flex-end"
        >
          <v-icon
            :style="layout.footer.logoSession.midiaLinks2[2].iconStyle"
            class="mdi mdi-credit-card-check-outline"
          ></v-icon>
          <span style="color: white; margin: 5px; font-size: 12px">
            10x no cartão de crédito
          </span>
        </v-col>-->
      </v-row> 

      <v-row style="width: 100%">
        <v-col cols="3" align-self="center" align="center">
          <button
            v-if="primaryDrawer.type !== 'permanent'"
            @click.stop="primaryDrawer.model = !primaryDrawer.model"
          >
            <i
              :style="layout.topBar.mobile.navIcon.style"
              :class="layout.topBar.mobile.navIcon.icon"
            ></i>
          </button>
        </v-col>
        <v-col cols="6" align-self="center" align="center">
          <router-link to="/">
            <img
              :style="layout.topBar.mobile.logoStyle"
              :src="layout.topBar.mobile.logoUrl"
              alt="Logo da topBar"
            />
          </router-link>
        </v-col>
        <v-col cols="3" align-self="center" align="center">
          <v-btn
            style="
              background-color: transparent;
              color: transparent;
              border: none;
              box-shadow: none;
            "
            to="/carrinho"
          >
            <i
              :class="layout.topBar.mobile.cart.icon"
              :style="layout.topBar.mobile.cart.style"
            ></i>
            <span :style="layout.topBar.cartText">
              {{ getProductsWithoutSale.totalItems }}</span
            >
          </v-btn>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col align-self="center" align="center" cols="12">
          <v-container>
            <v-text-field
              flat
              solo
              hide-details
              v-model="searchText"
              v-on:keydown.enter="search()"
              :style="layout.topBar.searchInput"
              placeholder="O quê você procura?"
            >
              <template v-slot:append>
                <v-btn
                  icon
                  @click="search()"
                  :style="layout.topBar.searchInputBtn"
                >
                  <i class="mdi mdi-magnify"></i>
                </v-btn>
              </template>
            </v-text-field>
          </v-container>
        </v-col>
      </v-row>
    </div>

    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :clipped="primaryDrawer.clipped"
      :floating="primaryDrawer.floating"
      :mini-variant="primaryDrawer.mini"
      :permanent="primaryDrawer.type === 'permanent'"
      :temporary="primaryDrawer.type === 'temporary'"
      app
      class="drawer"
    >
      <nav-bar-one />
    </v-navigation-drawer>
  </span>
</template>

<script>
import NavBarOne from "@/components/header/navBar/components/mobile/navBarOne";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  components: {
    NavBarOne,
  },
  data: function () {
    return {
      searchText: "",
      fav: true,
      menu: false,
      message: false,
      hints: true,
      drawers: ["Default (no property)", "Permanent", "Temporary"],
      primaryDrawer: {
        model: null,
        type: "temporary",
        clipped: true,
        floating: false,
        mini: false,
      },
    };
  },
  computed: {
    ...mapState("Layouts", ["layout"]),
    ...mapGetters("Cart", ["totalAmountInCart", "getProductsWithoutSale"]),
  },
  methods: {
    ...mapActions("Cart", ["setCartModal"]),
    search() {
      if (this.searchText && this.searchText.length > 0) {
        $nuxt.$router.push(`/busca/texto/${this.searchText}`);
        this.searchText = "";
      }
    },
  },
};
</script>