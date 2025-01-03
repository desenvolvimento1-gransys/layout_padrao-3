<template>
  <v-container fluid class="background-container">
    <v-row class="pag" no-gutters align="center" justify="center">
      <!-- Coluna para o texto -->
      <v-col cols="12" md="8" lg="6">
        <div class="corpo">
          <h1 class="Title">Quem somos?</h1>
          <p class="SubTitle">
            <strong>Conheça a nossa trajetória:</strong>
          </p>
          <div class="texto">
            A Gransys é uma empresa de tecnologia especializada em soluções completas para e-commerce, atendendo clientes em todo o Brasil. Com uma equipe dedicada e experiente, buscamos sempre inovação e excelência para fornecer as melhores experiências em plataformas de venda online.
            <br /><br />
            Ao longo dos anos, conquistamos a confiança de pequenas, médias e grandes empresas, que encontram na Gransys um parceiro confiável para o desenvolvimento e gestão de suas operações de e-commerce. Nosso compromisso é proporcionar um ambiente de venda digital seguro, eficiente e com alta performance.
            <br /><br />
            Nossa abordagem é focada no cliente. Trabalhamos em estreita colaboração com cada parceiro para entender suas necessidades específicas e criar soluções sob medida que otimizem resultados. Oferecemos um portfólio completo de serviços, incluindo desenvolvimento de sites, integração de sistemas, automação de processos e análise de dados.
            <br /><br />
            Na Gransys, acreditamos no poder da tecnologia para transformar negócios e simplificar a vida dos consumidores. Nosso objetivo é evoluir continuamente, acompanhando as tendências do mercado e implementando inovações que impulsionam o sucesso de nossos clientes.
            <br /><br />
            Convidamos você a conhecer mais sobre nossos serviços e descobrir como a Gransys pode ser o parceiro ideal para o crescimento do seu e-commerce. Estamos à disposição para ajudá-lo em cada etapa da jornada digital, com comprometimento, qualidade e foco no resultado.
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
/* Fundo gradiente elegante */
.background-container {
  background: linear-gradient(135deg, #edf2f7, #e2e8f0);
  padding: 5em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* Container principal com estilo moderno */
.pag {
  border-radius: 20px;
  padding: 2em;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  background-color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.pag:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

/* Título principal */
.Title {
  font-size: 2.5em;
  font-weight: 700;
  color: #1a202c;
  text-align: center;
  margin-bottom: 0.5em;
  font-family: "Roboto", sans-serif;
}

/* Subtítulo */
.SubTitle {
  font-size: 1.3em;
  font-weight: 500;
  color: #4a5568;
  text-align: center;
  margin-bottom: 1.5em;
  font-family: "Roboto", sans-serif;
}

/* Estilo do texto principal com overflow */
.texto {
  font-family: "Roboto", sans-serif;
  font-size: 1em;
  line-height: 1.8em;
  color: #2d3748;
  background: rgba(245, 248, 250, 0.85);
  padding: 1.5em;
  border-radius: 12px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
  max-height: 500px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #cbd5e0 #f7fafc;
}

/* Estilo do scrollbar para modernizar */
.texto::-webkit-scrollbar {
  width: 8px;
}

.texto::-webkit-scrollbar-track {
  background: #f7fafc;
}

.texto::-webkit-scrollbar-thumb {
  background-color: #cbd5e0;
  border-radius: 20px;
  border: 2px solid #f7fafc;
}

/* Responsividade */
@media (max-width: 768px) {
  .Title {
    font-size: 2em;
  }

  .SubTitle {
    font-size: 1.1em;
  }

  .texto {
    font-size: 0.95em;
    padding: 1.2em;
  }

  .pag {
    padding: 1.5em;
  }
}
</style>
