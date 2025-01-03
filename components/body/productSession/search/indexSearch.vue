<template>
  <div class="search-container">
    <div
      class="adjust-title"
      v-if="layout.search.home.title && $nuxt.$route.path == '/'"
    >
    <h3
    :style="layout.search.home.titleStyle"
    v-show="spinner == false"
  >
    {{ layout.search.home.title }}
  </h3>
    
    </div>
    <div class="adjust-title" v-else-if="this.$route.params.texto">
      <h3
        class="titleStyleMobile d-md-none"
        v-show="spinner == false"
        :style="layout.search.category.titleStyle"
      >
        Você procurou por: {{ this.$route.params.texto }}
      </h3>
      <h2
        class="titleStyleDesktop d-none d-md-block"
        v-show="spinner == false"
        :style="layout.search.category.titleStyle"
      >
        Você procurou por: {{ this.$route.params.texto }}
      </h2>
    </div>
    <simple-search />
  </div>
</template>

<script>
import SimpleSearch from "@/components/body/productSession/search/components/searchComponents/simpleSearchCoponent";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("Layouts", ["layout"]),
    ...mapState("Utils", ["spinner"]),
  },
  components: {
    SimpleSearch,
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap');

/* Estilos principais */
.titleStyle {
  text-transform: uppercase;
  font-size: 34px;
  letter-spacing: 3px;
  color: white;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  padding: 12px 0;
  text-align: center;
  border-radius: 8px; /* Bordas arredondadas */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  /* Linhas acima e abaixo */
  border-bottom: 1px solid #000000; /* Linha inferior */
}

.titleStyleMobile {
  font-size: 22px;
  text-align: center;
  letter-spacing: 2px;
  margin-top: 15px;
}

.titleStyleDesktop {
  font-size: 26px;
  text-align: center;
  letter-spacing: 3px;
  color: #444;
}

.search-container {
  margin: 0 auto 90px;
  padding: 10px;
  max-width: 100%; /* Limita a largura máxima para uma melhor apresentação */
  max-height: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); /* Sombra sutil para dar profundidade */
  animation: fadeIn 0.5s ease; /* Animação de entrada */
  margin: 0 5em 0 5em;

}

.adjust-title {
  padding: 0 12px;
}

/* Animação de fade-in para o container */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media only screen and (max-width: 600px) {
  .titleStyle {
    font-size: 20px;
    letter-spacing: 2px;
    text-align: center;
  }
  .search-container {
    margin: 0 12px 90px 12px;
    padding: 16px;
  }
  .adjust-title {
    padding: 0 8px;
  }
}
</style>
