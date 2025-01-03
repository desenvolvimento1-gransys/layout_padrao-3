<template>
  <div style="height: 100%">
    <p v-show="false">
      {{ scrollDownOnLoad() }}
    </p>

    <v-row no-gutters class="product-row" v-if="list.length > 0">
      <v-col
        v-for="(item, index) in list.slice(0, 4)"
        :key="item.id || index"
        sm="6"
        md="3"
        cols="6"
        xl="3"
      >
        <div class="product-card-wrapper">
          <product-card-one :data="item" />
        </div>
      </v-col>
    </v-row>

    <v-row v-else :justify="layout.search.alert.justify" :align="layout.search.alert.align">
      <v-col v-if="loadedSearch" cols="12" sm="12" align="center">
        <v-alert
          :style="layout.search.alert.style"
          :icon="layout.search.alert.icon"
          :color="layout.search.alert.color"
          text
        >
          {{ layout.search.alert.text }}
        </v-alert>
      </v-col>
    </v-row>

    <!-- Botão "Ver Mais Produtos" -->
    <v-row justify="center" class="ver-mais-container">
      <v-col cols="auto">
        <v-btn class="ver-mais-button" @click="$router.push('/products')">
          Ver Mais Produtos
        </v-btn>
      </v-col>
    </v-row>

    <span>
      <empty-search></empty-search>
    </span>
  </div>
</template>

<script>
import ProductCardOne from "@/components/body/productSession/search/components/cards/productCardOne";
import nextPage from "@/components/body/productSession/search/components/searchComponents/components/nextPage";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    ProductCardOne,
    nextPage,
  },
  data() {
    return {
      scrollPosition: "",
      isFilteredSearch: "",
      isFilteredSearchEmpty: "",
    };
  },
  computed: {
    ...mapState("Search", ["list", "sectionName", "loadedSearch"]),
    ...mapState("Layouts", ["layout"]),
  },
  methods: {
    ...mapActions("Search", ["callSearch", "cleanList"]),

    checkIsFilteredSearch() {
      const path = this.$route.path.split("/");
      if (path.includes("busca")) {
        if (path.includes("texto")) {
          return false;
        }
        return true;
      }

      return false;
    },

    checkIsFilteredSearchEmpty() {
      if (Object.keys(this.$route.query).length == 0) {
        return false;
      } else if (this.$route.query.cores.length === 0) {
        return false;
      } else if (this.$route.query.tamanhos.length === 0) {
        return false;
      }

      return true;
    },

    async scrollDownOnLoad() {
      let route = $nuxt.$route.path;
      // console.log(route);
      if (route == "/") {
        let scrollPosition = localStorage.getItem("scrollPosition");
        await this.$nextTick();

        if (scrollPosition !== 0 && scrollPosition !== null) {
          window.scrollTo(0, 0);

          window.scrollTo({
            top: scrollPosition,
            behavior: "smooth",
          });
        }
      }
    },
  },
  watch: {
    $route() {
      this.isFilteredSearch = this.checkIsFilteredSearch();
      this.isFilteredSearchEmpty = this.checkIsFilteredSearchEmpty();
    },
  },
  mounted() {
    window.addEventListener("unload", function() {
      localStorage.removeItem("scrollPosition");
    });
    let text = null;
    this.callSearch({ text: this.$route.params.texto });

    this.isFilteredSearch = this.checkIsFilteredSearch();
    this.isFilteredSearchEmpty = this.checkIsFilteredSearchEmpty();
  },
  beforeDestroy() {
    this.cleanList();
  },
};
</script>

<style>


.ver-mais-container {
  margin-top: 20px;
  text-align: center;
}

.ver-mais-button {
  background-color: #8b5e3c; /* Tom de marrom que combina com seu design */
  color: #fff;              /* Cor do texto branco para contraste */
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 8px;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
}

.ver-mais-button:hover {
  background-color: #7a4e2e; /* Tom mais escuro ao passar o mouse */
}
</style>
