<template>
  <v-footer :style="layout.footer.mainStyle">
    <!-- <hr style="width: 100%; color: black" /> -->
    <v-container style="max-width: 1920px; margin: 0 auto">
      <v-row justify="center">
        <!-- <v-col
          class="d-none d-md-block"
          cols="12"
          sm="5"
          md="4"
          style="text-align: left; padding: 20px; display: flex"
        >
          <span :style="layout.footer.titleStyle">Sobre a Loja</span>
          <div>
            <span
              v-for="(item, index) in layout.footer.institucionalList"
              :key="index"
            >
              <a
                :style="layout.footer.titleStyle3"
                :href="item.route"
                style="
                  color: inherit;
                  text-decoration: none;
                  margin-bottom: 5px;
                "
              >
                {{ item.name }}
              </a>
            </span>
          </div>
        </v-col> -->
        <v-col
          align="center"
          cols="12"
          sm="4"
          md="4"
          xl="4"
          :style="layout.footer.titleStyle2"
        >
          <img
            :style="layout.footer.securityImg"
            src="/sslImg.svg"
            alt="logo"
          />
        </v-col>

        <v-col
          class="d-none d-md-block"
          cols="12"
          sm="4"
          md="4"
          xl="4"
          style="text-align: center"
        >
          <span :style="layout.footer.titleStyle">Contato</span>
          <div>
            <span
              v-for="(item, index) in layout.footer.contactList"
              :key="index"
              :style="layout.footer.titleStyle4"
            >
              <i :style="item.iconStyle" v-if="item.icon" :class="item.icon">{{
                item.name
              }}</i>
            </span>
          </div>
        </v-col>

        <v-col
          cols="12"
          sm="4"
          md="4"
          xl="4"
          style="
          display: flex;
          align-items: left;
          justify-content: center;
          padding: 20px 0;
        "
        >
          <span :style="layout.footer.logoSession.logoContainer">
            <img
              :style="layout.footer.logoSession.logoStyle"
              :src="layout.footer.logoSession.logoSrc"
              alt="Logo do footer"
            />
          </span>
        </v-col>

        <v-col
          :style="layout.footer.titleStyle4"
          cols="12"
          md="12"
          lg="12"
          xl="12"
        >
          <span :style="layout.footer.titleStyle4">Pagamentos</span>
          <payment-div />
        </v-col>
      </v-row>
    </v-container>
    <div
      class="d-block d-md-none"
      :style="layout.footer.logoSession.titleStyleMobile"
    >
    <v-expansion-panels>
      <!-- Painel "Sobre a Loja" -->
      <v-expansion-panel>
        <v-expansion-panel-header
          class="exp-panel-header"
        >
          <span class="exp-panel-title">Sobre a Loja</span>
          <template #actions>
            <v-icon style="color: white;" class="exp-panel-icon">mdi-chevron-down</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="exp-panel-content">
          <ul class="institucional-list">
            <li
              v-for="(item, index) in layout.footer.institucionalList"
              :key="index"
            >
              <a :href="item.route" class="institucional-link">
                {{ item.name }}
              </a>
            </li>
          </ul>
        </v-expansion-panel-content>
      </v-expansion-panel>
    
      <!-- Painel "Contato" -->
      <v-expansion-panel>
        <v-expansion-panel-header
          class="exp-panel-header"
        >
          <span class="exp-panel-title">Contato</span>
          <template #actions>
            <v-icon style="color: white;" class="exp-panel-icon">mdi-chevron-down</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="exp-panel-content">
          <ul class="contact-list">
            <li
              v-for="(item, index) in layout.footer.contactList"
              :key="index"
            >
              <a :href="item.route" class="contact-link">
                <i :class="item.icon" class="contact-icon"></i> {{ item.name }}
              </a>
            </li>
          </ul>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    
    </div>
  </v-footer>
</template>

<script src="./footerjs"></script>

<style scoped>
/* Estilos do Painel */
.exp-panel-header {
  background-color: #5c4436;
  padding: 10px;
  font-weight: bold;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; /* Garante que o painel ocupe a largura disponível */
  max-width: 400px; /* Define um tamanho máximo para o painel */
}

.exp-panel-title {
  font-size: 16px;
}

.exp-panel-icon {
  color: white; /* Define a cor branca */
  display: flex; /* Permite centralizar com flexbox */
  align-items: center; /* Alinha verticalmente */
  justify-content: center; /* Alinha horizontalmente */
  font-size: 24px; /* Aumenta o tamanho do ícone, se necessário */
  transition: transform 0.3s ease; /* Animação ao abrir o painel */
}

.exp-panel-icon.open {
  transform: rotate(180deg); /* Animação de rotação ao abrir */
}

.exp-panel-content {
  background-color: #5c4436;
  padding: 10px 15px;
}

d-block.d-md-none {
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  flex-direction: column; /* Empilha os itens verticalmente */
  min-height: 100vh; /* Garante que ocupe toda a altura da tela */
  padding: 20px; /* Adiciona espaçamento interno */
  background-color: #5c4436; /* Cor de fundo para destaque */
}

/* Estilos da Lista Institucional */
.institucional-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.institucional-list li {
  margin-bottom: 10px;
}

.institucional-link {
  color: white;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s;
}

.institucional-link:hover {
  color: #3498db;
  text-decoration: underline;
}

/* Estilos da Lista de Contato */
.contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-list li {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.contact-link {
  color: white;
  text-decoration: none;
  font-size: 14px;
  margin-left: 5px;
}

.contact-icon {
  margin-right: 8px;
}

.contact-link:hover {
  color: #3498db;
  text-decoration: underline;
}
</style>

