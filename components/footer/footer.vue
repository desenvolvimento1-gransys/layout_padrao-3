<template>
  <span translate="no">
    <footer-one />
    <div :style="layout.footer.mainStyleRodape">
      <div>
        <v-row justify="center" align="center">
          <!-- Copyright -->
          <v-col
            align="center"
            cols="12"
            md="3"
            :style="layout.footer.titleStyle2"
          >
            <i class="far fa-copyright"></i>
            {{ layout.footer.copyrightSession.copyright }}
          </v-col>

          <!-- Institucional List -->
          <v-col
            class="d-none d-md-block"
            cols="4"
            sm="12"
            md="6"
            style="text-align: center"
          >
            <ul class="institucional-list">
              <li
                v-for="(item, index) in layout.footer.institucionalList"
                :key="index"
              >
                <a
                  :style="layout.footer.titleStyle3"
                  :href="item.route"
                  style="
                    color: inherit;
                    text-decoration: none;
                  "
                >
                  {{ item.name }}
                </a>
              </li>
            </ul>
          </v-col>

          <!-- Logo -->
          <v-col
            cols="3"
            align="center"
            :style="layout.footer.logoSession.logoContainerRodape"
          >
            <a href="http://gransys.com.br/">
              <img
                :style="layout.footer.logoSession.logoStyleRodape"
                width="80px"
                src="/Logo sem fundo - Preto(1).svg"
                alt="Logo"
              />
            </a>
          </v-col>
        </v-row>
      </div>
    </div>
  </span>
</template>


<script>
import FooterOne from "@/components/footer/components/footerOne";
import { mapState } from "vuex";
import CookieLaw from "@/components/utils/cookieLaw";

export default {
  components: {
    FooterOne,
    CookieLaw,
  },
  computed: {
    ...mapState("Layouts", ["layout"]),
  },
};
</script>

<style scoped>
.institucional-list {
  list-style: none; /* Remove bullets */
  padding: 0;
  margin: 0;
  display: flex; /* Alinha horizontalmente */
  justify-content: center; /* Centraliza os itens */
  gap: 20px; /* Espaço entre itens */
}

.institucional-list li {
  font-size: 14px;
  text-transform: capitalize;
}

.institucional-list a:hover {
  text-decoration: underline; /* Realça o link ao passar o mouse */
  color: #3498db; /* Cor do hover */
}
</style>


