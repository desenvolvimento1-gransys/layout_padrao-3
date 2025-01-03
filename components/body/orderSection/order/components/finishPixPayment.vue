<template>
  <span style="margin: 0 auto !important">
    <v-row justify="center">
      <v-col align="center" style="min-width: 90%" cols="11" sm="10" xl="6">
        <div class="successfull-payment-div">
          <v-row justify="center">
            <v-col style="" align="center" cols="12">
              <i class="far fa-clock check-payment-succesfull"></i>
              <!-- <i class="fas fa-check"></i> -->
              <h1>Estamos quase lá !!!</h1>
              <!-- {{ pixQrCode }} -->
              <h2 class="mt-5 mb-5 ml-3 mr-3">
                Copie a chave pix gerada e efetue o pagamento do pedido
              </h2>

              <p>
                Clique no icone abaixo para copiar a chave ou escaneie o QR CODE
                abaixo
              </p>
              <v-row
                v-if="$vuetify.breakpoint.name !== 'xs'"
                align="center"
                style="
                  width: 50vw !important;
                  outline: 2px black solid;
                  border-radius: 5px;
                  height: auto;
                "
              >
                <v-col cols="9" align="center" style="width: 100% !important">
                  <p style="margin: 0 !important">{{ pixQrCode }}</p>
                </v-col>
                <v-col cols="3" align="center">
                  <v-btn icon @click="copyToClip(pixQrCode)">
                    <v-icon color="black">mdi mdi-content-copy </v-icon>
                  </v-btn>
                </v-col>
              </v-row>

              <v-row
                align="center"
                style="
                  width: 300px !important;
                  outline: 2px black solid;
                  border-radius: 5px;
                  height: auto;
                "
                v-else
              >
                <v-col cols="12" align="justify">
                  <p
                    style="
                      margin: 0 !important;
                      word-wrap: break-word !important;
                    "
                  >
                    {{ pixQrCode }}
                  </p>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" align="center">
                  <v-btn icon @click="copyToClip(pixQrCode)">
                    COPIAR <v-icon color="black">mdi mdi-content-copy </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <h3>QRCode para pagamento:</h3>
                  <img :src="qrCodeURL" alt="QR Code" />
                </v-col>
              </v-row>
              <p class="mb-5 mt-5">
                O número do Pedido é : #{{ this.$route.params.buyId }}
              </p>
              <!-- <i style="font-size: 50px;" class="fas fa-box-open mb-5"></i> -->
              <br />
              <br />
              <a href="/">Voltar a Loja</a>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </span>
</template>

<script>
import { mapState } from "vuex";
import QRCode from "qrcode";

export default {
  data: function () {
    return {
      whattsLink: null,
      qrCodeURL: "",
    };
  },
  computed: {
    ...mapState("Layouts", ["layout", "config"]),
    ...mapState("Payment", ["pixQrCode"]),
  },
  methods: {
    copyToClip(key) {
      navigator.clipboard.writeText(key);
      alert("Copiado !");
    },
    generateQRCode(code) {
      QRCode.toDataURL(code, (err, url) => {
        if (err) {
          console.error(err);
        } else {
          this.qrCodeURL = url;
        }
      });
    },
  },
  mounted() {
    this.whattsLink = `https://api.whatsapp.com/send?phone=55019999811912&text=Ola, gostaria de confirmar o pagamento do pedido: ${this.$route.params.buyId}`;
    this.generateQRCode(this.pixQrCode);
  },
};
</script>

<style scoped>
.check-payment-succesfull {
  margin: 15px 0 30px 0;
  font-size: 110px !important;
  color: green !important;
}

.successfull-payment-div {
  border: solid black 1px;
  margin: 40px;
  padding: 0 0 50px 0;
}
@media only screen and (max-width: 600px) {
  /* .check-payment-succesfull{
  
} */
  .successfull-payment-div {
    border: solid black 1px;
    margin: 5px;
    padding: 0 0 50px 0;
  }

  .successfull-payment-div h1 {
    font-size: 22px;
  }

  .successfull-payment-div h2 {
    font-size: 18px;
  }
}
</style>