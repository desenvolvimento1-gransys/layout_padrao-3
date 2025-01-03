<template>
  <div>
    <div v-if="layout.index.carousel.itemsMobile">
      <v-row class="flex-wrap-reverse">
        <!-- Carrossel -->
        <v-col cols="12" md="5">
          <v-carousel
            v-if="
              $vuetify.breakpoint.name === 'xs' &&
                layout.index.carousel.itemsMobile.length >= 1
            "
            :cycle="cycle"
            :height="calcHeight"
            hide-delimiter-background
            :interval="layout.index.carousel.interval"
            hide-delimiters
            app
            eager
            continuous
            :style="layout.navBar.carousel"
          >
            <v-carousel-item
              v-for="(item, i) in layout.index.carousel.itemsMobile"
              :key="i"
              :href="item.link"
              :src="item.src"
              alt="Imagem do Carrossel"
              class="image-size"
            ></v-carousel-item>
          </v-carousel>

          <v-carousel
            v-else
            :cycle="cycle"
            :height="calcHeight"
            hide-delimiter-background
            :interval="layout.index.carousel.interval"
            eager
            class="index-fix"
            :style="layout.navBar.carousel2"
          >
            <v-carousel-item
              v-if="layout.index.carousel.items.length > 1"
              :src="layout.index.carousel.items[1].src"
              alt="Imagem do Carrossel"
              class="image-size"
            ></v-carousel-item>
          </v-carousel>
        </v-col>

        <!-- Texto ao lado do carrossel -->
        <v-col cols="12" md="6" class="d-flex align-center justify-center">
          <div class="text-content">
            <h2 class="carousel-title">Título do Conteúdo</h2>
            <p class="carousel-description">
              Este é um exemplo de texto ao lado do carrossel. Você pode personalizar este conteúdo para adicionar informações relevantes ou descrições detalhadas.
            </p>
            <v-btn 
            color="primary" 
            large 
            href="https://wa.me/SEU_NUMERO" 
            target="_blank"
          >
            WhatsApp
          </v-btn>
                    </div>
        </v-col>
      </v-row>
    </div>

    <!-- Carrossel padrão caso `itemsMobile` não esteja definido -->
    <div v-else>
      <v-carousel
        :cycle="cycle"
        :height="calcHeight"
        hide-delimiter-background
        :interval="layout.index.carousel.interval"
        eager
        class="index-fix"
        :style="layout.navBar.carousel"
      >
        <v-carousel-item
          v-for="(item, i) in layout.index.carousel.items"
          :key="i"
          :src="item.src"
          class="image-size"
        ></v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("Layouts", ["layout"]),
  },
  data() {
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
      this.calcHeight = `${Math.min(Math.max(baseHeight, 700), 1000)}px`;
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
  width: 100%;
  height: 100%;
  object-fit: cover; /* Preenche o contêiner mantendo a proporção */
}

.text-content {
  text-align: center;
  align-items: center;
}

.carousel-title {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 10px;
  color: #ffffff;
}

.carousel-description {
  font-size: 1em;
  color: #ffffff;
  line-height: 1.5;
  text-align: center;
  margin: 3px;
  display: flex;
}

@media (max-width: 960px) {
  .carousel-title {
    font-size: 1.5em;
  }
  .carousel-description {
    font-size: 1em;
  }
}

.index-fix >>> .v-carousel__controls {
  z-index: 0;
}
</style>
