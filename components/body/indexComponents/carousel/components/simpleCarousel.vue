<template>
  <div>
    <div v-if="layout.index.carousel.itemsMobile">
      <v-carousel
        v-if="
          $vuetify.breakpoint.name == 'xs' &&
          layout.index.carousel.itemsMobile.length >= 1
        "
        :cycle="cycle"
        hide-delimiter-background
        show-arrows-on-hover
        :interval="layout.index.carousel.interval"
        hide-delimiters
        app
        eager
        continuous
        :style="layout.index.carousel"
      >
        <div
          v-for="(item, i) in layout.index.carousel.itemsMobile"
          :key="i"
          class="image-with-gradient"
        >
          <v-carousel-item
            :href="item.link"
            :src="item.src"
            alt="Imagem do Carrossel"
            class="image-size"
          ></v-carousel-item>
        </div>
      </v-carousel>

      <v-carousel
        v-else
        :cycle="cycle"
        :height="calcHeight"
        hide-delimiter-background
        show-arrows-on-hover
        :interval="layout.index.carousel.interval"
        eager
        class="index-fix"
        :style="layout.index.carousel"
      >
        <div v-if="layout.index.carousel.items.length > 0" class="image-with-gradient">
          <v-carousel-item 
            :src="layout.index.carousel.items[0].src" 
            alt="Imagem do Carrossel"
            class="image-size"
          ></v-carousel-item>
        </div>
      </v-carousel>
    </div>

    <div v-else>
      <v-carousel
        :cycle="cycle"
        :height="calcHeight"
        hide-delimiter-background
        show-arrows-on-hover
        :interval="layout.index.carousel.interval"
        eager
        class="index-fix"
        :style="layout.index.carousel"
      >
        <div v-for="(item, i) in layout.index.carousel.items" :key="i" class="image-with-gradient">
          <v-carousel-item :src="item.src" class="image-size"></v-carousel-item>
        </div>
      </v-carousel>
      <br />
    </div>
  </div>
</template>



<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("Layouts", ["layout"]),
  },
  data: function () {
    return {
      windowWidth: null,
      calcHeight: null,
      cycle: true,
    };
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
      // Define altura com base em uma proporção da largura
      let baseHeight = this.windowWidth * this.layout.index.carousel.frameRate;
      // Limites mínimos e máximos de altura
      this.calcHeight = `${Math.min(Math.max(baseHeight, 680), 1200)}px`;
    },
  },
  created() {
    if (process.client) {
      window.addEventListener("resize", this.onResize);
      this.onResize();
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener("resize", this.onResize);
    }
  },
};
</script>

<style scoped>
.image-size {
  width: 100%;           /* Ajuste conforme necessário */
  height: 100%;          /* Mantém a altura proporcional */
  object-fit: cover;     /* Ajusta a imagem para preencher o contêiner sem distorção */
  margin-top: 5em;
}

.image-with-gradient {
  display: flex;
  justify-content: center;  /* Centraliza horizontalmente */
  align-items: center;      /* Centraliza verticalmente */
}

.index-fix >>> .v-carousel__controls {
  z-index: 0;
}
</style>
