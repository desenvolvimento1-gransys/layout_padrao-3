<template>
  <v-card
    translate="no"
    @click="saveScrollAndPush()"
    color="white"
    class="black--text card-product-class"
    outlined
    :style="layout.search.productCard.mainStyle"
  >
    <v-hover>
      <div slot-scope="{ hover }">
        <v-img
          :style="
            $vuetify.breakpoint.name !== 'xs'
              ? 'height: auto'
              : 'height: auto'
          "
          :aspect-ratio="layout.search.productCard.imgAspectRatio"
          v-if="data.product_image[1] && hover"
          :src="`${urlImg + data.product_image[1].img_name}300.jpg`"
          alt="Imagem do produto"
          class="product-image"
        >
          <template v-slot:placeholder>
            <v-skeleton-loader type="image"></v-skeleton-loader>
            <v-skeleton-loader type="image"></v-skeleton-loader>
          </template>
        </v-img>
        <v-img
          style="height: auto"
          :style="
            $vuetify.breakpoint.name !== 'xs'
              ? 'height: auto'
              : 'height: auto'
          "
          :aspect-ratio="layout.search.productCard.imgAspectRatio"
          v-else-if="data.product_image[0]"
          :src="`${urlImg + data.product_image[0].img_name}300.jpg`"
          alt="Imagem do produto"
          class="product-image"
        >
          <template v-slot:placeholder>
            <v-skeleton-loader type="image"></v-skeleton-loader>
            <v-skeleton-loader type="image"></v-skeleton-loader>
          </template>
        </v-img>
        <v-img
          contain
          v-else
          :style="
            $vuetify.breakpoint.name !== 'xs'
              ? 'height: auto'
              : 'height: auto'
          "
          :aspect-ratio="layout.search.productCard.imgAspectRatio"
          :src="layout.search.productCard.placeholder"
          alt="Placeholder da imagem do produto"
        />
      </div>
    </v-hover>
    <v-row>
      <v-col align="center" style="height: 75px">
        <p
          :style="layout.search.productCard.nameStyle"
          class="productName"
          translate="no"
        >
          {{ data.product_name }}
        </p>
      </v-col>
    </v-row>
    <v-col
    cols="12"
    align="center"
    :style="layout.search.productCard.installmentPriceStyle"
    v-if="layout.search.productCard.installmentConfig"
    class="productPriceInstallments"
  >
     {{ maximumInstallment }}x R$ {{ minimumValue }} Sem juros!
  </v-col>
    <v-row
      align="center"
      :style="layout.search.productCard.textArea.style"
      no-gutters
      v-if="data.balance > 0"
    >
      <v-col
        cols="12"
        align="center"
        v-if="data.actived_promotions && data.actived_promotions.length >= 1"
      >
        <div
          :style="layout.search.productCard.discountPriceStyle"
          class="productDiscountPrice"
        >
          R$
          {{
            (
              parseFloat(data.actived_promotions[0].discount_value) +
              parseFloat(data.price)
            ).toLocaleString("pt-BR", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })
          }}
        </div>
      </v-col>
      <v-col
        cols="12"
        align="center"
        :style="layout.search.productCard.priceStyle"
        class="productPrice"
      >
        R$
        {{
          parseFloat(data.price).toLocaleString("pt-BR", {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          })
        }} A vista!
      </v-col>

      <br />
   
    </v-row>
    <v-row
      align="center"
      :style="layout.search.productCard.textArea.style"
      no-gutters
      v-else
    >
      <v-col align="center" cols="12">
        <p
          :style="layout.search.productCard.noBalanceProduct.style"
          :class="layout.search.productCard.noBalanceProduct.class"
        >
          {{ config.productWithoutStockPhrase }}
        </p>
      </v-col>
    </v-row>
    
    <!-- <v-btn
    :style="layout.search.productCard.buttonStyle"
    x-small
    v-if="layout.search.productCard.btnName"
  >
    <div style="display: flex; align-items: center; justify-content: center;">
      <p class="text" style="margin: 0; font-size: 15px;">{{ layout.search.productCard.btnName }}</p>
    </div>
  </v-btn> -->
  


    <hr class="mt-2" :style="layout.search.productCard.hrStyle" />
  </v-card>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import { s3Url } from "@/Settings/global";

export default {
  props: {
    data: null,
  },
  computed: {
    ...mapState("Product", ["product"]),
    ...mapState("Layouts", ["layout", "config"]),
    ...mapGetters("Product", ["installmentResult"]),
    ...mapGetters("Cart", [
      "calculateProgressiveDiscount",
      "getProductsWithoutSale",
    ]),
  },
  methods: {
    ...mapActions("Layouts", ["getYPos"]),

    convertToLink(value) {
      let response = value
        .replace(/_|\/|\s/g, "-")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      return response;
    },
    saveScrollAndPush() {
      this.getYPos(Math.round(window.scrollY));
      let link =
        "/produto/" +
        this.data.id +
        "/" +
        this.convertToLink(this.data.product_name);
      $nuxt.$router.push({ path: link });

      let SendViewPage = { 
        item_id: `${this.data.id}`,
        item_name: `${this.data.product_name}`,
        price: `${parseFloat(this.data.price).toFixed(2)}`,
        Rota: `${$nuxt.$route.path}`,
        // value: `${state.product.amount}`,
        // discount: `${state.product.discountValue}`,
        // quantity: `${item.amount}`,
      };
      // console.log(item.amount)
  
      $nuxt.$store.dispatch("GoogleTagEvents/view_item", SendViewPage);
    },
  },

  data: function () {
    return {
      urlImg: s3Url,
      minimumValue: "",
      maximumInstallment: "",
    };
  },
  mounted: function () {
    const installmentArray = this.installmentResult(this.data.price);
    this.maximumInstallment = installmentArray[0];
    this.minimumValue = installmentArray[1];
  },
};
</script>

<style scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  gap: 15px;
  background-color: #181717;
  outline: 3px #181717 solid;
  outline-offset: -3px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 400ms;
}

.button .text {
  color: white;
  font-weight: 700;
  font-size: 1em;
  transition: 400ms;
  align-items: center;
}

.button svg path {
  transition: 400ms;
}

.button:hover {
  background-color: transparent;
}

.button:hover .text {
  color: #181717;
}

.button:hover svg path {
  fill: #181717;
}

@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Oriya:wght@400..700&display=swap');
@media only screen and (max-width: 600px) {
  .card-product-class {
    padding: 20px 4px 0px 4px !important;
  }
  .productName {
    font-size: 13px !important;
  }

  .productPrice {
    font-size: 13px !important;
  }

  .productDiscountPrice {
    font-size: 12px !important;
    left: 4px !important;
  }

  .productPriceInstallments {
    font-size: 18px !important;
    padding: 0px !important;
    margin: 0px !important;
    font-weight: bold;
  }
}
</style>