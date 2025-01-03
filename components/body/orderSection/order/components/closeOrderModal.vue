<template>
  <v-dialog
    class="overflow-hidden dialog-container"
    width="800"
    v-model="closeOrderModal"
    @click:outside="setCloseOrderModal(false)"
  >
    <register-address :title="registerTitle" v-if="registerNewAddress" />
    <v-card class="p-6 container-card enhanced-card" v-else>
      <v-row class="no-gutters align-items-center mb-4">
        <v-col cols="10" sm="11" align="left">
          <h3 class="font-weight-bold">Confirme os dados:</h3>
        </v-col>
        <v-col cols="1" align="center">
          <v-btn icon @click="setCloseOrderModal(false)" color="red">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <modal-spinner>
        <v-row>
          <v-col cols="12" class="mb-3">
            <small class="text-subtitle-1 font-weight-medium">Endereço de Entrega</small>
            <v-select
              :color="layout.payment.closeOrderModal.input.color"
              v-show="list.length > 0"
              dense
              single-line
              item-value="id"
              v-model="sendAddressId"
              :items="list"
              outlined
              class="mt-2 select-input enhanced-select"
            >
              <template v-slot:item="{ item }">
                {{ `${item.street} - ${item.number}, ${item.neighborhood} - ${item.city}/${item.state}` }}
              </template>
              <template v-slot:selection="{ item }">
                {{ `${item.street} - ${item.number}, ${item.neighborhood} - ${item.city}/${item.state}` }}
              </template>
            </v-select>
            <v-btn
              @click="setRegisterNewAddress(!registerNewAddress)"
              rounded
              v-show="!registerNewAddress"
              :style="layout.payment.closeOrderModal.addressBtn.style"
              class="mt-3 address-btn enhanced-btn"
              color="primary"
            >
              Cadastrar endereço
            </v-btn>
            <v-radio-group v-model="deliveryType" class="mt-4 radio-group enhanced-radio-group">
              <v-radio
                v-for="(item, index) in deliveryList"
                :key="index"
                :color="layout.payment.closeOrderModal.input.color"
                :value="item.type"
                :label="item.text"
                class="mb-2 radio-item enhanced-radio"
              />
            </v-radio-group>
          </v-col>
          <v-col cols="12">
            <p v-if="list.length < 1" class="red--text font-weight-bold">
              *Para finalizar a compra cadastre um endereço !!!
            </p>
          </v-col>
          <v-col cols="12" align="center">
            <v-btn
              :style="layout.payment.closeOrderModal.buyBtn.style"
              :disabled="!deliveryType"
              @click="createBuy()"
              color="success"
              class="mt-4 buy-btn enhanced-buy-btn"
            >
              Finalizar Compra
            </v-btn>
            <p v-if="!deliveryType" class="red--text font-weight-bold mt-2">
              *Para Finalizar selecione o tipo de entrega !!
            </p>
          </v-col>
        </v-row>
      </modal-spinner>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import ModalSpinner from "@/components/utils/modalSpinner";
import RegisterAddress from "@/components/body/userSection/account/components/addresses/registerAddressDefault";

export default {
  data() {
    return {
      registerTitle: "Cadastrar novo Endereço",
    };
  },
  watch: {
    sendAddressId() {
      const selected = this.list.find((item) => item.id === this.sendAddressId);
      this.checkDelivery(selected.cep);
    },
    list() {
      if (this.list.length > 0) {
        this.sendAddressId = this.list[this.list.length - 1].id;
      } else {
        this.setRegisterNewAddress(true);
        this.registerTitle = "Para finalizar a Compra, cadastre um endereço";
      }
    },
  },
  components: {
    ModalSpinner,
    RegisterAddress,
  },
  computed: {
    ...mapGetters("Delivery", ["deliveryList"]),
    ...mapState("Order", ["closeOrderModal"]),
    ...mapState("Addressess", ["list"]),
    ...mapState("Addressess", ["registerNewAddress"]),
    ...mapState("Layouts", ["layout"]),
    sendAddressId: {
      get() {
        return this.$store.state.Order.sendAddressId;
      },
      set(value) {
        this.$store.commit("Order/SET_SENDADDRESSID", value);
      },
    },
    deliveryType: {
      get() {
        return this.$store.state.Delivery.deliveryType;
      },
      set(value) {
        this.$store.commit("Delivery/SET_DELIVERYTYPE", value);
      },
    },
  },
  methods: {
    ...mapActions("Order", ["setCloseOrderModal", "setAddressId"]),
    ...mapActions("Delivery", ["checkDelivery"]),
    ...mapActions("Addressess", ["setRegisterNewAddress"]),
    ...mapActions("Buy", ["createBuy"]),
  },
  mounted() {
    if (this.list.length < 1) {
      this.setRegisterNewAddress(true);
      this.registerTitle = "Para finalizar a Compra, cadastre um endereço";
    }
  },
};
</script>

<style scoped>
.dialog-container {
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}
.container-card {
  border: 1px solid #ddd;
  border-radius: 12px;
  background-color: #f7f7f9;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 20px;
}
.enhanced-card {
  border-radius: 15px;
  background: linear-gradient(135deg, #ffffff, #f1f1f1);
}
.select-input {
  border-radius: 8px;
}
.enhanced-select {
  background-color: #ffffff;
  transition: box-shadow 0.3s;
}
.enhanced-select:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.address-btn {
  font-weight: 600;
}
.enhanced-btn {
  background-color: #1e88e5;
  color: #fff;
}
.radio-group {
  padding: 10px 0;
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid #ccc;
}
.enhanced-radio-group {
  background-color: #fefefe;
  border: 1px solid #d1d1d1;
  padding: 15px;
}
.buy-btn {
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 128, 0, 0.2);
}
.enhanced-buy-btn {
  background-color: #43a047;
  color: #fff;
  font-weight: bold;
}
.red--text {
  color: #e53935 !important;
}
</style>
