<template>
  <v-container fluid class="background-container">
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-card class="policy-header" elevation="2">
          <v-card-title class="header-title">
            <v-icon large color="primary">mdi-swap-horizontal-bold</v-icon>
            <span>Política de Trocas</span>
          </v-card-title>
          <v-card-subtitle class="header-subtitle">
            Confira nossa política de trocas e devoluções para uma experiência de compra tranquila.
          </v-card-subtitle>
        </v-card>

        <v-row class="content-sections" dense>
          <v-col cols="12" class="policy-section">
            <v-card outlined class="section-card">
              <v-card-title class="section-title">
                <v-icon color="primary" class="mr-2">mdi-calendar-clock</v-icon>
                Prazo de Troca - 7 Dias Corridos
              </v-card-title>
              <v-card-text>
                Passados o prazo de troca após o recebimento da peça em mãos, não efetuamos a troca.
                <br />
                Entrar em contato pelo WhatsApp <strong>(99) 9 9999-9999 </strong>.
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" class="policy-section">
            <v-card outlined class="section-card">
              <v-card-title class="section-title">
                <v-icon color="primary" class="mr-2">mdi-checkbox-marked-circle</v-icon>
                Condições de Troca
              </v-card-title>
              <v-card-text>
                A etiqueta deve estar fixada à peça intacta, afixada conforme enviada.
                <ul>
                  <li>Informar o número do pedido, as peças a serem trocadas e motivo.</li>
                  <li>A troca pode ser feita tanto na loja física quanto online.</li>
                  <li>O frete referente à troca é de responsabilidade do cliente.</li>
                  <li>A sua peça não pode ter nenhum sinal de avaria.</li>
                  <li>Não trocamos peças do OUTLET.</li>
                  <li>Caso haja alguma incoerência no item de troca, a solicitação será cancelada e o produto devolvido.</li>
                  <li>A peça será trocada sem custo ao cliente em caso de defeito ou erro da empresa.</li>
                  <li>Trocas por motivos de tamanho, cor ou modelo são de responsabilidade do cliente.</li>
                </ul>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" class="policy-section">
            <v-card outlined class="section-card">
              <v-card-title class="section-title">
                <v-icon color="primary" class="mr-2">mdi-alert-circle</v-icon>
                Recusa de Produto
              </v-card-title>
              <v-card-text>
                <p class="grife">Em casos de:</p>
                <ul>
                  <li>Embalagem aberta, violada ou danificada.</li>
                  <li>Produto avariado, quebrado ou danificado.</li>
                  <li>Produto em desacordo com o pedido.</li>
                </ul>
                <p><strong>RECUSE O RECEBIMENTO E ESCREVA O MOTIVO DA RECUSA NO VERSO DO DANFE!</strong></p>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" class="policy-section">
            <v-card outlined class="section-card">
              <v-card-title class="section-title">
                <v-icon color="primary" class="mr-2">mdi-package-variant</v-icon>
                Devolução
              </v-card-title>
              <v-card-text>
                Em casos de devoluções, entre em contato pelo WhatsApp <strong>(99) 9 9999-9999 </strong> no prazo máximo de 7 dias corridos após o recebimento da mercadoria, com a peça intacta e etiquetas afixadas conforme enviada.
                <ul>
                  <li>Informar o número do pedido, as peças a serem trocadas e motivo.</li>
                  <li>No caso de devolução, o cliente deve enviar a peça de volta para a loja no prazo estipulado acima, em sua embalagem original, com etiqueta, brindes e nota fiscal.</li>
                  <li>O produto passará por um padrão de qualidade para verificação das condições de troca. Caso aprovada, entraremos em contato.</li>
                  <li>O valor será estornado da mesma forma que foi efetuado o pagamento.</li>
                </ul>
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

.grife {
  font-weight: bold;
}

ul {
  margin: 1em 0;
  padding-left: 1.5em;
}

ul li {
  margin-bottom: 0.5em;
}

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
