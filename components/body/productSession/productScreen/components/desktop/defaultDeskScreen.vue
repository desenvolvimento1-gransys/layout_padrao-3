<template>
  <div v-if="!load" :style="layout.productPage.mainStyle">
    <v-row no-gutters justify="center" class="thumbnail-scroll">
      <!-- Primeira Coluna: Imagens do Produto -->
      <v-col :style="layout.productPage.availableImgColStyle" cols="12" md="7">
        <v-row no-gutters justify="center">
          <v-col cols="3" class="mr-5">
            <v-row no-gutters justify="end" class="thumbnail-sizing">
              <v-col cols="12" lg="8" class="thumbnail-scroll">
                <span v-for="(item, index) in availablesImgs" :key="index">
                  <v-card
                    tile
                    :style="layout.productPage.availableImgCardStyle"
                    @click="setSelectedImg(item.name)"
                    class="mb-5"
                  >
                    <v-img
                      contain
                      class="thumbnail"
                      :style="layout.productPage.availableImgStyle"
                      :src="item.url300px"
                      aspect-ratio="0.9"
                      alt="Thumbnail da imagem do produto"
                    ></v-img>
                  </v-card>
                </span>
              </v-col>
            </v-row>
          </v-col>
          <!-- Coluna para Imagem Principal -->
          <v-col
            :style="layout.productPage.selectedImgColStyle"
            class="no-padding"
            cols="8"
            xl="7"
          >
            <zoom-on-hover
              class="magnifier"
              :img-normal="selectedUrlImg.highQuality"
              :scale="1.5"
            />
          </v-col>
        </v-row>
      </v-col>

      <v-col
        class="no-padding"
        :style="layout.productPage.informationColStyle"
        cols="4"
      >
        <p
          :style="layout.productPage.productNameStyle"
          :class="layout.productPage.productNameClass"
        >
          {{ product.name }}
        </p>

        <p
          v-if="config.product.showBrandInProductPage"
          :style="layout.productPage.brand.style"
          :class="layout.productPage.brand.class"
        >
          Marca: {{ product.brand_name }}
        </p>
        <p
          v-if="layout.productPage.ref.show"
          :style="layout.productPage.ref.style"
          :class="layout.productPage.ref.class"
        >
          Ref: {{ product.ref }}
        </p>
        <!-- <p
              v-if="config.product.showBrandInProductPage"
              :style="layout.productPage.brand.style"
              :class="layout.productPage.brand.class"
            >
              Marca: {{ product.brand_name }}
            </p> -->

        <!-- <p
              v-if="layout.productPage.ref.show"
              :style="layout.productPage.ref.style"
              :class="layout.productPage.ref.class"
            >
              Ref: {{ product.ref }}
            </p> -->

        <div :style="layout.productPage.priceAndBuy.mainStyle">
          <v-row>
            <p
              v-if="product.balance < 1"
              :style="layout.productPage.noStock.style"
              :class="layout.productPage.noStock.class"
            >
              {{ layout.productPage.noStock.name }}
            </p>

            <v-col
              cols="12"
              class="pt-0"
              v-if="
                ordenateAvailablesSizes[0] &&
                  (config.product.showSizeIfOnlyOne ||
                    ordenateAvailablesSizes.length > 1) &&
                  product.balance > 0 &&
                  !(
                    ordenateAvailablesSizes.length == 1 &&
                    ordenateAvailablesSizes[0] == 'N/A' &&
                    !config.product.showSizeIfNA
                  )
              "
              :style="layout.productPage.size.mainStyle"
            >
              <p
                :style="layout.productPage.size.titleStyle"
                :class="layout.productPage.size.titleClass"
              >
                Tamanhos Disponiveis :
              </p>

              <span
                v-for="(item, index) in ordenateAvailablesSizes"
                :key="index"
              >
                <v-btn
                  tile
                  v-if="item"
                  :style="
                    setSizeBtnStyle(
                      layout.productPage.size.btn.defaultStyle,
                      layout.productPage.size.btn.selectedStyle,
                      item,
                      !enabledSizes.includes(item),
                      layout.productPage.size.btn.disabledStyle
                    )
                  "
                  @click="handleSizeSelection(item)"
                  :disabled="!enabledSizes.includes(item)"
                >
                  {{ item }}
                </v-btn>
              </span>
            </v-col>
            <!-- {{ product.category_name }} -->

            <v-col cols="12" :style="layout.productPage.color.mainStyle">
              <div
                v-if="
                  (config.product.showColorIfOnlyOne ||
                    availablesCodeColors.length > 1) &&
                    product.balance > 0 &&
                    !(
                      availablesCodeColors.length == 1 &&
                      selectedColorName == 'N/A' &&
                      !config.product.showColorIfNA
                    )
                "
              >
                <p
                  :style="layout.productPage.color.titleStyle"
                  :class="layout.productPage.color.titleClass"
                >
                  Cores Disponiveis :
                </p>
              </div>
              <!-- {{ availablesCodeColorsWithBgImg }} -->
              <div
                v-if="
                  (config.product.showColorIfOnlyOne ||
                    availablesCodeColors.length > 1) &&
                    product.balance > 0 &&
                    !(
                      availablesCodeColors.length == 1 &&
                      selectedColorName == 'N/A' &&
                      !config.product.showColorIfNA
                    )
                "
              >
                <span
                  v-for="(item, index) in availablesCodeColorsWithBgImg"
                  :key="index"
                >
                  <!-- {{ availablesCodeColorsWithBgImg }} -->
                  <!-- {{ item }} <br /> -->
                  <!-- <v-img
                      v-if="item.bg_color_img"
                      width="40px"
                      :src="item.bg_color_img"
                    ></v-img> -->
                  <button
                    tile
                    v-if="item.bg_color_img"
                    @click="
                      ResetColorbtn({
                        code_color: item.code_color,
                        color: item.color,
                      })
                    "
                    :style="
                      setColorBtnStyle(
                        layout.productPage.color.btnStyle,
                        item,
                        layout.productPage.color.selectedBtnStyle,
                        item.color
                      )
                    "
                    :class="layout.productPage.color.btnClass"
                  >
                    <v-img class="img-color" :src="item.bg_color_img"></v-img>
                  </button>
                  <v-btn
                    v-else
                    tile
                    @click="
                      ResetColorbtn({
                        code_color: item.code_color,
                        color: item.color,
                      })
                    "
                    :style="
                      setColorBtnStyle(
                        layout.productPage.color.btnStyle,
                        item.code_color,
                        layout.productPage.color.selectedBtnStyle,
                        item.color
                      )
                    "
                    :class="layout.productPage.color.btnClass"
                  ></v-btn>
                </span>
                <p class="mt-2">{{ selectedColorName }}</p>
              </div>
            </v-col>
            <v-col
              cols="12"
              v-if="productVariation.length > 0"
              :style="layout.productPage.color.mainStyle"
            >
              <p
                :style="layout.productPage.color.titleStyle"
                :class="layout.productPage.color.titleClass"
              >
                Variações
              </p>
              <span v-for="(item, index) in productVariation" :key="index">
                <v-btn
                  @click="callVariationRoute(item.product_id, item.name)"
                  :class="selectVariationButtonClass(item.product_id)"
                >
                  {{ item.variation_value }}
                </v-btn>
                <!-- {{ item }} <br /> -->
              </span>
            </v-col>

            <atribute-component
              v-if="config.atribute && config.atribute.show"
              :atributes="product.product_atribute"
            />

            <!-- <v-col cols="4" class="pr-0 py-0" align-self="center">
                  <div class="gs-amount-input py-2">
                    <v-row>
                      <v-col class="pa-0 pl-2" align="center">
                        <v-btn
                          icon
                          :style="layout.topBar.searchInputBtn"
                          @click="decreaseProductAmount"
                        >
                          <i class="mdi mdi-minus"></i>
                        </v-btn>
                      </v-col>
    
                      <v-col class="pa-0" align-self="center" align="center">
                        <v-text-field
                          v-model="productAmount"
                          hide-details
                          single-line
                          type="number"
                          class="pa-0 gs-amount-field"
                          @keyup="validateAmountInput"
                          id="productAmountInput"
                        />
                      </v-col>
    
                      <v-col class="pa-0 pr-2" align="center">
                        <v-btn
                          icon
                          :style="layout.topBar.searchInputBtn"
                          @click="increaseProductAmount"
                        >
                          <i class="mdi mdi-plus"></i>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </div>
                </v-col> -->
          </v-row>
        </div>
        <v-row align="center">
          <v-col cols="12" align="center" align-self="center">
            <v-row align="center">
              <v-col cols="6">
                <p
                  v-if="layout.productPage.priceAndBuy.installments"
                  :style="layout.productPage.priceAndBuy.priceStyle"
                >
                  <v-icon left class="mdi mdi-credit-card-outline"></v-icon>
                  {{ maximumInstallment }}x de R$ {{ minimumValue }}
                </p>

                <span
                  v-if="
                    product.actived_promotions &&
                      product.actived_promotions.length >= 1
                  "
                  ><strike>
                    R$
                    {{
                      (
                        parseFloat(
                          product.actived_promotions[0].discount_value
                        ) + parseFloat(product.price)
                      ).toLocaleString("pt-BR", {
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      })
                    }}
                  </strike>
                </span>

                <p :style="layout.productPage.priceAndBuy.installmentStyle">
                  A vista: R$
                  {{
                    parseFloat(product.price).toLocaleString("pt-BR", {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                    })
                  }}
                </p>
              </v-col>
              <v-col cols="6" align-self="center" align="center" class="pl-0">
                <v-btn
                  @click="setGridIdAndAddItemInCart(productAmount)"
                  :disabled="product.balance < 1"
                  :style="layout.productPage.priceAndBuy.buyBtnStyle"
                  tile
                  depressed
                >
                  Comprar
                </v-btn>
              </v-col>

              <v-col class="pa-0" cols="12" align-self="center" align="center">
                <v-btn icon style="width: auto" @click="decreaseProductAmount">
                  <h3 :style="layout.productPage.priceAndBuy.qtd">
                    Quantidade:
                  </h3>
                  <i style="font-size: 14px" class="fas fa-minus"></i>
                </v-btn>
                <input
                  v-model="productAmount"
                  style="
                    max-width: 50px;
                    width: 30px;
                    border: 1px solid grey;
                    border-radius: 50px;
                    text-align: center;
                    height: 30px;
                  "
                  type="text"
                  outlined
                  disabled
                  @keyup="validateAmountInput"
                  id="productAmountInput"
                />
                <v-btn icon style="width: auto" @click="increaseProductAmount">
                  <i style="font-size: 14px" class="fas fa-plus"></i>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12">
            <atribute-component
              v-if="config.atribute && config.atribute.show"
              :atributes="product.product_atribute"
            />
          </v-col>
        </v-row>
        <div>
          <br />
          <v-col :style="layout.productPage.description.mainStyle" cols="12">
            <deliveryCalculator />
          </v-col>
        </div>
        <v-col cols="12" no-gutters>
          <div :style="layout.productPage.description.mainStyle">
            <div
              class="description-box"
              @click="toggleExpand"
              :class="{ expanded: isExpanded }"
            >
              <p :style="layout.productPage.description.titleStyle">
                Descrição:
                <span
                  class="chevron-icon mdi"
                  :class="isExpanded ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                ></span>
              </p>

              <p :style="layout.productPage.description.textStyle" class="txt">
                {{ product.description }}
              </p>
            </div>
          </div>
        </v-col>

        <!-- <v-col cols="12" no-gutters>
          <div :style="layout.productPage.description.mainStyle">
            <div
              class="description-box"
              @click="toggleExpand"
              :class="{ expanded: isExpanded }"
            >
              <p :style="layout.productPage.description.titleStyle">
                Envio e devolução:
                <span
                  class="chevron-icon mdi"
                  :class="isExpanded ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                ></span>
              </p>

              <p :style="layout.productPage.description.textStyle" class="txt">
                O prazo de entrega pode variar de acordo com a forma de envio
                escolhida pelo cliente. O prazo começa a contar a partir do
                primeiro dia útil após a aprovação do pagamento. A devolução do
                pedido poderá ser feita em até 7 dias, a partir da data de
                recebimento e é gratuita. Para mais informações
              </p>
            </div>
          </div>
        </v-col> -->
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import AtribueComponent from "@/components/body/productSession/productScreen/components/others/atributeComponent";
import deliveryCalculator from "@/components/body/productSession/productScreen/components/others/deliveryCalculator";

export default {
  components: {
    AtribueComponent,
    deliveryCalculator,
  },
  data: function() {
    return {
      isHovered: false,
      maximumInstallment: "",
      minimumValue: "",
      productAmount: 1,
      isExpanded: false,
      selectedSize: null,
    };
  },
  computed: {
    ...mapState("Product", [
      "product",
      "load",
      "selectedColor",
      "selectedSize",
      "productVariation",
    ]),
    ...mapState("Layouts", ["layout", "config"]),
    ...mapGetters("Product", [
      "selectedUrlImg",
      "availablesImgs",
      "availablesCodeColors",
      "ordenateAvailablesSizes",
      "enabledSizes",
      "selectedColorName",
      "installmentResult",
      "availablesCodeColorsWithBgImg",
    ]),
  },

  methods: {
    ...mapActions("Product", [
      "setSelectedImg",
      "setSelectedColor",
      "setSelectedSize",
      "setGridIdAndAddItemInCart",
    ]),

    handleSizeSelection(size) {
      this.selectedSize = size;
      this.productAmount = 1;
    },

    ResetColorbtn(code_color, color) {
      this.setSelectedColor(code_color, color);
      this.selectedColor = color;
      this.productAmount = 1;
      this.selectedSize = null;

    },

    getAvailableStock() {
      const gridData = this.product.grid;
      const selectedGrid = gridData.find(
        (el) =>
          el.size === this.selectedSize &&
          (this.selectedColorName
            ? el.color === this.selectedColorName
            : el.code_color === this.selectedColor)
      );

      return selectedGrid ? selectedGrid.balance : 0; // Retorna 0 se não encontrar
    },

    selectVariationButtonClass(productId) {
      return this.$route.params.productId == productId
        ? "variation-button-selected"
        : "variation-button";
    },
    callVariationRoute(productId, productName) {
      $nuxt.$router.push({
        path: `/produto/${productId}/${this.convertToLink(productName)}`,
      });
    },
    convertToLink(value) {
      return value
        .replace(/_|\/|\s/g, "-")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
    },
    validateAmountInput({ state, getters }, amount) {
      let gridData = state.product.grid;
      let gridId = null;

      if (!amount) {
        amount = 1;
      }

      if (!this.checkIfHaveRequiredAtributes()) {
        if (
          !getters.ordenateAvailablesSizes.includes(null) &&
          !state.selectedSize
        ) {
          alert("* Selecione um Tamanho !!!");
          return;
        }

        if (!state.selectedColor && !state.selectedColorName) {
          alert("* Selecione uma Cor !!!");
          return;
        }

        if (
          (state.selectedColor || state.selectedColorName) &&
          (getters.ordenateAvailablesSizes.includes(null) || state.selectedSize)
        ) {
          gridId = gridData.find(
            (el) =>
              el.size === state.selectedSize &&
              (state.selectedColorName
                ? el.color === state.selectedColorName
                : el.code_color === state.selectedColor)
          );

          if (gridId) {
            if (!/^[0-9]*$/.test(amount) || amount < 1) {
              this.productAmount = 1;
            } else if (amount > gridId.balance) {
              this.productAmount = gridId.balance;
            } else {
              this.productAmount = amount;
            }
          }
        }
      } else {
        this.productAmount = 1;
      }
    },

    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    },

    increaseProductAmount() {
      console.log(this.selectedSize);

      // Verifica se um tamanho foi selecionado
      if (!this.selectedSize) {
        alert("* Selecione um Tamanho !!!");
        return;
      }

      // Verifica se uma cor foi selecionada
      if (!this.selectedColor && !this.selectedColorName) {
        alert("* Selecione uma Cor !!!");
        return;
      }

      // Obtém o estoque disponível
      const availableStock = this.getAvailableStock();

      // Verifica se a quantidade atual é menor que o estoque
      if (this.productAmount < availableStock) {
        this.productAmount++;
      } else {
        alert(
          "Quantidade máxima em estoque atingida para o tamanho selecionado"
        );
      }
    },

    decreaseProductAmount() {
      if (!this.selectedSize) {
        alert("* Selecione um Tamanho !!!");
        return;
      }
      if (!this.selectedColor && !this.selectedColorName) {
        alert("* Selecione uma Cor !!!");
        return;
      }

      if (this.productAmount > 1) {
        this.productAmount--;
      }
    },

    setColorBtnStyle(style, bgColor, selectedBtnStyle, colorName) {
      if (this.selectedColor !== null) {
        return bgColor == this.selectedColor
          ? { ...selectedBtnStyle, background: bgColor }
          : { ...style, background: bgColor };
      } else {
        return colorName == this.selectedColorName
          ? { ...selectedBtnStyle, background: "none" }
          : { ...style, background: bgColor };
      }
    },

    setSizeBtnStyle(
      defaultStyle,
      selectedStyle,
      size,
      disabled,
      disabledStyle
    ) {
      return disabled
        ? disabledStyle
        : size == this.selectedSize
        ? selectedStyle
        : defaultStyle;
    },
  },

  watch: {
    selectedSize(newSize) {
      this.setSelectedSize(newSize);
    },
  },
  mounted() {
    const installmentArray = this.installmentResult();
    this.maximumInstallment = installmentArray[0];
    this.minimumValue = installmentArray[1];
  },
};
</script>

<style scoped>
.txt {
  text-align: left;
}
.description-box {
  max-height: 50px;
  overflow: hidden;
  transition: max-height 0.5s ease;
  cursor: pointer;
  background-color: #f9f9f9;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.description-box.expanded {
  max-height: 500px;
  overflow-y: auto;
}

button:focus,
button:active {
  border: 1px solid black;
  background: none;
  outline: none;
  padding: 0;
}
.img-color {
  border-radius: 30px !important;

  background: transparent !important;
}
.gs-amount-input {
  border: 1px solid black;
  height: 55px;
}

.gs-amount-input >>> input[type="number"] {
  -moz-appearance: textfield;
}
.gs-amount-input >>> input::-webkit-outer-spin-button,
.gs-amount-input >>> input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.gs-amount-field >>> input {
  text-align: center;
}

.thumbnail-scroll {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}

.thumbnail-sizing {
  height: 40vw;
  max-height: 670px;
}

.thumbnail >>> .v-image__image {
  background-position: center top !important;
}

/* .magnifier >>> .v-image__image {
  background-position: center top !important;
} */

.magnifier {
  height: 100%;
}

.magnifier:hover {
  border: 2px solid black;
  cursor: zoom-in;
}

.magnifier >>> .normal {
  background-position: center top !important;
  height: 100%;
  object-fit: contain !important;
}

.variation-button {
  border: solid grey 1px;
  padding: 10px 5px 10px 5px;
  margin-right: 10px;
}

.variation-button-selected {
  border: solid black 3px;
  padding: 10px 5px 10px 5px;
  margin-right: 10px;
}
</style>
