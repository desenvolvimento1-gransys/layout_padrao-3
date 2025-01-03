<template>
  <div class="curved-background">
    <div v-if="layout.index.carousel.itemsMobile">
      <v-row>
        <v-col cols="12">
          <v-carousel
            v-if="
              $vuetify.breakpoint.name == 'xs' &&
                layout.index.carousel.itemsMobile.length >= 1
            "
            :cycle="cycle"
            :height="calcHeight"
            hide-delimiter-background
            show-arrows-on-hover
            :interval="layout.index.carousel.interval"
            hide-delimiters
            app
            eager
            continuous
            :style="layout.navBar.carousel3"
          >
            <div
              v-for="(item, i) in layout.index.carousel.items.slice(1, 3)"
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
            class="index-fix"
            :style="layout.navBar.carousel3"
          >
            <v-container>
              <v-row>
                <v-col align-self="center" cols="12" md="12">
                  <div class="text-content">
                    <h2 class="carousel-title">Siga-nos no Instagram</h2>

                    <v-btn
                      icon
                      href="https://www.instagram.com/SEU_PERFIL"
                      target="_blank"
                      class="instagram-icon-btn"
                    >
                      <v-icon class="instagram-icon">mdi-instagram</v-icon>
                    </v-btn>
                    
                  </div>
                </v-col>

                <v-col
                  v-for="(item, i) in layout.index.carousel.items.slice(2, 4)"
                  :key="i"
                  cols="12"
                  md="12"
                >
                  <v-img
                    :src="item.src"
                    alt="Imagem do Carrossel"
                    class="image-size"
                  ></v-img>
                </v-col>
              </v-row>
            </v-container>
          </v-carousel>
        </v-col>
      </v-row>
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
        :style="layout.navBar.carousel"
      >
        <div
          v-for="(item, i) in layout.index.carousel.items"
          :key="i"
          class="image-with-gradient"
        >
          <v-carousel-item :src="item.src"></v-carousel-item>
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
  data: function() {
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
  width: 100%; /* Ajuste conforme necessário */
  height: 20em; /* Mantém a proporção da imagem */
  object-fit: cover; /* Ajusta a imagem para preencher o contêiner sem distorção */
}

.image-with-gradient::after {
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 30em;
}

.text-content {
  text-align: center;
  margin: 0 5em 0 5em;
}

.carousel-title {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 10px;
  color: #ffffff;
}

.carousel-description {
  font-size: 1.2em;
  line-height: 1.5;
  display: flex;
}

.image-size {
  width: 100%;
  height: 100%; /* Preenche toda a altura do carrossel */
  object-fit: cover;
  border-radius: 0; /* Remove bordas arredondadas para uma aparência mais ampla */
}

.index-fix >>> .v-carousel__controls {
  z-index: 0;
}

.curved-background {
  background: #5c4436; /* Cor de fundo para o exemplo */
  padding: 2em; /* Espaçamento interno para o conteúdo */
  margin-bottom: 2em; /* Espaçamento entre os componentes */
  width: 100%;
  height: auto; /* Altura ajustada conforme necessário */
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
}

.instagram-icon-btn {
  margin-bottom: 3em;
  background: linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
  border-radius: 50%;
  padding: 12px;
  transition: transform 0.3s ease;
}

.instagram-icon-btn:hover {
  transform: scale(1.1);
}

.instagram-icon {
  font-size: 4.5em;
  color: #fff;
}



</style>
