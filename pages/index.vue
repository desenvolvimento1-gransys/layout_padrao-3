<template>
  <span translate="no">
    <div class="banner-style">
      <carousel v-show="!spinner" />
    </div>

    <div class="curved-background">
      <Carousel3 v-show="!spinner" />
    </div>

    <div class="curved-background">
      <search v-show="!spinner" />
    </div>

    <div class="curved-background">
      <Carousel2 v-show="!spinner" />
    </div>

    <div class="curved-background2">
      <Carousel4 v-show="!spinner" />
    </div>

    <!-- <information v-show="!spinner" /> -->
    <categories v-show="!spinner" />
    <customer-comments v-show="!spinner" />
  </span>
</template>

<script>
import Carousel from "@/components/body/indexComponents/carousel/carousel";
import Information from "@/components/body/indexComponents/information/information";
import Categories from "@/components/body/indexComponents/categorySession/categories";
import Search from "@/components/body/productSession/search/indexSearch";
import Carousel4 from "../components/body/indexComponents/carousel/components/carousel4.vue";
import Carousel3 from "../components/body/indexComponents/carousel/components/carousel3.vue";
import CustomerComments from "@/components/utils/customerComment";
import Carousel2 from "../components/body/indexComponents/carousel/components/carousel2.vue";

import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("Utils", ["spinner"]),
  },
  components: {
    Carousel,
    Carousel4,
    Carousel2,
    Carousel3,
    Information,
    Categories,
    Search,
    CustomerComments,
  },
};
</script>

<style scoped>
.curved-background {
  background: #5c4436; /* Cor de fundo para o exemplo */
  margin-bottom: 4em; /* Espaçamento entre os componentes */
  width: 100%;
  height: auto; /* Altura ajustada conforme necessário */
  overflow: hidden;

  /* Curvaturas na parte superior e inferior */

  /* Curvaturas invertidas */

  border-bottom-left-radius: 100% 100px; /* Curvatura invertida na parte inferior esquerda */
  border-bottom-right-radius: 100% 100px; /* Curvatura invertida na parte inferior direita */

  border-top-left-radius: 100% 100px; /* Curvatura invertida na parte inferior esquerda */
  border-top-right-radius: 100% 100px; /* Curvatura invertida na parte inferior direita */

  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
}
.curved-background2 {
  background: #5c4436; /* Cor de fundo para o exemplo */
  margin-bottom: 4em; /* Espaçamento entre os componentes */
  width: 100%;
  height: auto; /* Altura ajustada conforme necessário */
  overflow: hidden;

  /* Curvaturas na parte superior e inferior */

  /* Curvaturas invertidas */

  border-top-left-radius: 100% 100px; /* Curvatura invertida na parte inferior esquerda */
  border-top-right-radius: 100% 100px; /* Curvatura invertida na parte inferior direita */

  display: flex;
  align-items: center;
  justify-content: center;
}


.banner-style {
  background: #5c4436; /* Cor de fundo para o exemplo */
  height: auto; /* Altura ajustada conforme necessário */

  margin-top: 2em;
}
</style>
