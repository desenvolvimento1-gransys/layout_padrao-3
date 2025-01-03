<template>
  <v-container fluid class="background-container">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="policy-header" elevation="2">
          <v-card-title class="header-title">
            <v-icon large color="primary">mdi-shield-lock-outline</v-icon>
            <span>Política de Privacidade</span>
          </v-card-title>
          <v-card-subtitle class="header-subtitle">
            Entenda como a Gransys protege e utiliza suas informações, conforme a LGPD.
          </v-card-subtitle>
        </v-card>

        <v-card class="policy-content" flat>
          <v-card-text>
            <h3 class="section-title">Coleta de Dados</h3>
            <p>
              Na Gransys, coletamos informações pessoais apenas quando necessário, sempre com transparência e mediante seu consentimento. Utilizamos esses dados para oferecer um serviço melhor e personalizado. As formas de coleta incluem:
            </p>
            <ul>
              <li>Preenchimento de formulários de contato e cadastro</li>
              <li>Interações com o site e pesquisas na barra de busca</li>
              <li>Participação em eventos e promoções organizados pela Gransys</li>
            </ul>
            <v-divider class="my-4"></v-divider>

            <h3 class="section-title">Dados que Podem Ser Coletados</h3>
            <p>
              Coletamos informações para melhor identificação dos nossos clientes e para aprimorar nossos serviços:
            </p>
            <ul>
              <li>Nome, e-mail, telefone e endereço</li>
              <li>CPF, CNPJ e data de nascimento</li>
              <li>Preferências de navegação e dados de interação com o site</li>
              <li>Histórico de compras e forma de pagamento</li>
            </ul>
            <v-divider class="my-4"></v-divider>

            <h3 class="section-title">Armazenamento dos Dados</h3>
            <p>
              Armazenamos seus dados de forma segura, utilizando criptografia e outras medidas de proteção. Dados sensíveis, como informações de pagamento, são processados por parceiros certificados e não ficam armazenados em nossos sistemas.
            </p>
            <v-divider class="my-4"></v-divider>

            <h3 class="section-title">Uso de Dados</h3>
            <p>
              Os dados coletados são utilizados para melhorar sua experiência com nossos serviços, facilitar a comunicação e garantir a segurança nas transações realizadas em nossa plataforma.
            </p>
            <v-divider class="my-4"></v-divider>

            <h3 class="section-title">Cookies</h3>
            <p>
              Utilizamos cookies para entender suas preferências e proporcionar uma experiência de navegação personalizada. Esses dados nos ajudam a melhorar nosso site e a oferecer conteúdos relevantes para você.
            </p>
            <v-divider class="my-4"></v-divider>

            <h3 class="section-title">Divulgação de Dados</h3>
            <p>
              A Gransys não compartilha suas informações com terceiros, exceto nos casos de:
            </p>
            <ul>
              <li>Determinação judicial ou solicitações de autoridades legais</li>
              <li>Parcerias com fornecedores essenciais, como intermediadores de pagamento e transporte</li>
              <li>Investigações de atividades ilícitas que possam comprometer a segurança da nossa plataforma</li>
            </ul>
            <v-divider class="my-4"></v-divider>

            <h3 class="section-title">Alterações na Política de Privacidade</h3>
            <p>
              A Gransys pode atualizar esta política a qualquer momento. Recomendamos que você revise periodicamente para estar ciente de nossas práticas de proteção de dados.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
.background-container {
  background-color: #f9fafb;
  padding: 2em 0;
}

.policy-header {
  background-color: #eef2f7;
  text-align: center;
  padding: 1.5em;
  border-radius: 8px;
  margin-bottom: 2em;
}

.header-title {
  font-size: 1.8em;
  font-weight: 600;
  color: #2e5d91;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
}

.header-subtitle {
  font-size: 1em;
  color: #4a6fa5;
  text-align: center;
  margin-top: 0.5em;
}

.policy-content {
  background-color: #ffffff;
  padding: 2em;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.section-title {
  font-size: 1.3em;
  font-weight: 600;
  color: #2e5d91;
  margin-top: 1em;
}

ul {
  margin-top: 0.5em;
  padding-left: 1.5em;
}

ul li {
  margin-bottom: 0.5em;
}

.v-divider {
  background-color: #d3dae6;
}

/* Responsividade */
@media (max-width: 768px) {
  .header-title {
    font-size: 1.5em;
  }

  .section-title {
    font-size: 1.1em;
  }

  .policy-content {
    padding: 1.5em;
  }
}
</style>
