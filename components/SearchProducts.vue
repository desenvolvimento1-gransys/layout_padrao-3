<template>
    <div class="search-container">
      <h2 class="title">Produtos</h2>
  
      <div v-if="loadedSearch">
        <v-row no-gutters v-if="displayedProducts.length > 0">
          <v-col
            v-for="(item, index) in displayedProducts"
            :key="item.id || index"
            sm="6"
            md="3"
            cols="6"
            xl="3"
          >
            <product-card-one :data="item" />
          </v-col>
        </v-row>
  
        <div class="ver-mais" v-if="list.length > displayedProducts.length">
          <v-btn color="primary" @click="loadMoreProducts">Ver Mais</v-btn>
        </div>
  
        <div v-else class="no-more-products">
          <p>Todos os produtos foram carregados.</p>
        </div>
      </div>
  
      <div v-else class="loading">
        <p>Carregando...</p>
      </div>
  
      <div v-if="!loadedSearch && !list.length" class="no-results">
        <p>Nenhum produto encontrado.</p>
      </div>
    </div>
  </template>
  
  <script>
  import ProductCardOne from "@/components/body/productSession/search/components/cards/productCardOne";
  import { mapState, mapActions } from "vuex";
  
  export default {
    components: {
      ProductCardOne,
    },
    data() {
      return {
        productsToShow: 16, // Define o número de produtos iniciais a serem exibidos
      };
    },
    computed: {
      ...mapState("Search", ["list", "loadedSearch"]),
      displayedProducts() {
        return this.list.slice(0, this.productsToShow);
      },
    },
    methods: {
      ...mapActions("Search", ["fetchProducts"]),
      loadMoreProducts() {
        this.productsToShow += 16; // Carrega mais 16 produtos ao clicar em "Ver Mais"
      },
    },
    mounted() {
      this.fetchProducts(); // Chama a action ao carregar o componente
    },
  };
  </script>
  
  <style scoped>
  .search-container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  
  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .v-row {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  .ver-mais {
    margin: 20px 0;
  }
  
  .v-btn {
    background-color: #1976d2;
    color: white;
  }
  
  .no-results,
  .no-more-products,
  .loading {
    color: #555;
    font-size: 18px;
    margin: 20px 0;
  }
  </style>
  