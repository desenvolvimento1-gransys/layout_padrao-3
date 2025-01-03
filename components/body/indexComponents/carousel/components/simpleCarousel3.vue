<template>
  <div class="about-us-section">
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" md="8" class="text-center">
          <router-link to="/">
            <img
              :style="layout.topBar.topBarLogoImg2"
              :src="layout.topBar.logoUrl"
              alt="Logo da topBar"
            />
          </router-link>
                    <p class="sub-title">
            Descubra quem somos, o que fazemos e como podemos ajudar você!
          </p>
          <div class="description">
            Por trás de cada grande projeto, há uma equipe apaixonada pelo que faz. Aqui, acreditamos em inovação, dedicação e na construção de soluções que realmente fazem a diferença.
            <br /><br />
            Explore nossa história, valores e propósito. Saiba como estamos transformando desafios em oportunidades e impactando positivamente aqueles que confiam no nosso trabalho.
            <br /><br />
            Estamos ansiosos para compartilhar nossa jornada com você. Clique no botão abaixo para conhecer mais sobre nossa missão e como podemos ser parceiros no seu sucesso.
          </div>
          <div class="button-container">
            <v-btn class="custom-button" large href="/quem-somos">
              Saiba Mais
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


  
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
    window.addEventListener("unload", function () {
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

<style scoped>
.about-us-section {
  background-color: #5c4436; /* Cor de fundo similar à imagem */
  color: #000000;              /* Texto em branco */
  text-align: center;
  border-radius: 8px;
  margin-top: 20px;
}

.main-title {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: Arial,Helvetica,sans-serif;
  color: white;
}

.sub-title {
  font-size: 28px;
  margin-bottom: 50px;
  margin-top: 30px;
  font-weight: 500;
  color: rgb(255, 255, 255);
}

.description {
  font-size: 16px;
  line-height: 1.8;
  margin: 0 auto;
  color: rgb(255, 255, 255);
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.button-container {
  margin-top: 40px;
}

.custom-button {
  background-color: #f5f5f5;
  color: #5c4033;
  font-size: 18px;
  border-radius: 25px;
  text-transform: none;
}

.custom-button:hover {
  background-color: #e0e0e0;
}
</style>
