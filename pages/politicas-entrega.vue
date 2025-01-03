<template>
  <v-container fluid class="background-container">
    <v-row justify="center">
      <v-col cols="12" md="10">
        <!-- Cabeçalho da Política de Entrega -->
        <v-card class="policy-header" elevation="2">
          <v-card-title class="header-title">
            <v-icon large color="primary">mdi-truck-delivery-outline</v-icon>
            <span>Política de Entrega</span>
          </v-card-title>
          <v-card-subtitle class="header-subtitle">
            Tire suas dúvidas sobre prazos, custos e modalidades de entrega.
          </v-card-subtitle>
        </v-card>

        <!-- Seções de Entrega em formato de cartão -->
        <v-row class="content-sections" dense>
          <!-- Prazo e Valores -->
          <v-col cols="12" class="policy-section">
            <v-card outlined class="section-card">
              <v-card-title class="section-title">
                <v-icon color="primary" class="mr-2">mdi-clock-outline</v-icon>
                Prazo e Valores
              </v-card-title>
              <v-card-text>
                O preço do envio varia de região e quantidade de produtos. Para consultar o valor, adicione um produto ao carrinho e informe o seu CEP na área “opções de frete”. O site exibirá o preço e prazo de acordo com os Correios e/ou transportadora parceira.
                <br /><br />
                Você receberá um código de rastreamento para acompanhar o status do pedido, situação e data de postagem e entrega. O prazo de postagem é de até 3 dias úteis após aprovação do pedido e pagamento (até 24h para aprovação do pagamento).
              </v-card-text>
            </v-card>
          </v-col>

          <!-- Retirada na Loja -->
          <v-col cols="12" class="policy-section">
            <v-card outlined class="section-card">
              <v-card-title class="section-title">
                <v-icon color="primary" class="mr-2">mdi-storefront-outline</v-icon>
                Retirada na Loja (Leme/SP)
              </v-card-title>
              <v-card-text>
                Para clientes de Leme/SP, oferecemos a opção de retirada na loja. Você deve retirar a compra pessoalmente com o pagamento aprovado ou, caso alguém venha em seu lugar, é necessário informar o nome e RG da pessoa autorizada.
              </v-card-text>
            </v-card>
          </v-col>

          <!-- Compras Internacionais -->
          <v-col cols="12" class="policy-section">
            <v-card outlined class="section-card">
              <v-card-title class="section-title">
                <v-icon color="primary" class="mr-2">mdi-earth</v-icon>
                Compras Internacionais
              </v-card-title>
              <v-card-text>
                Para compras internacionais, consulte o custo de envio pelo WhatsApp antes de finalizar a compra. Assim, garantimos que todas as informações e custos estejam claros.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
.background-container {
  background-color: #f0f4f8;
  padding: 2em 0;
}

.policy-header {
  background-color: #e0f7fa;
  text-align: center;
  padding: 1.5em;
  border-radius: 8px;
  margin-bottom: 2em;
}

.header-title {
  font-size: 1.8em;
  font-weight: 600;
  color: #00796b;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
}

.header-subtitle {
  font-size: 1.1em;
  color: #004d40;
}

.content-sections {
  gap: 1.5em;
}

.section-card {
  padding: 1.5em;
  border-radius: 8px;
}

.section-title {
  font-size: 1.5em;
  font-weight: 500;
  color: #00796b;
  display: flex;
  align-items: center;
}

ul {
  margin: 1em 0;
  padding-left: 1.5em;
}

ul li {
  margin-bottom: 0.5em;
}

/* Responsividade */
@media (max-width: 768px) {
  .header-title {
    font-size: 1.5em;
  }

  .section-title {
    font-size: 1.3em;
  }

  .policy-header,
  .section-card {
    padding: 1em;
  }
}
</style>
