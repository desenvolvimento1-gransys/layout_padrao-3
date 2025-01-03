<template>
  <span v-if="!load" translate="no">
    <v-row :style="layout.productPage.mobile.mainRowStyle">
      <v-col cols="12" align="center">
        <p
          :style="layout.productPage.mobile.productNameStyle"
          :class="layout.productPage.mobile.productNameClass"
        >
          {{ product.name }}
        </p>
      </v-col>
      <v-col
        :style="layout.productPage.mobile.selectedImgColStyle"
        class="no-padding"
        cols="12"
      >
        <v-img
          v-if="selectedUrlImg.highQuality"
          :src="selectedUrlImg.highQuality"
          :lazy-src="selectedUrlImg.lowQuality"
          alt="Imagem do produto"
        ></v-img>
      </v-col>
      <v-col cols="12">
        <div style="overflow-x: hidden">
          <div
            style="
              width: 104%;
              overflow-y: hidden;
              overflow-x: auto;
              white-space: nowrap;
              margin: 0 -3vw;
            "
          >
            <v-img
              contain
              style="display: inline-block; margin-left: 3vw"
              width="100"
              height="100"
              v-for="(item, index) in availablesImgs"
              :key="index"
              @click="setSelectedImg(item.name)"
              class="pointer"
              :src="item.url300px"
              alt="Thumbnail da imagem do produto"
            ></v-img>
          </div>
        </div>
      </v-col>
      <v-col cols="12">
        <p
          v-if="product.brand_name && config.product.showBrandInProductPage"
          :style="layout.productPage.mobile.brand.style"
          :class="layout.productPage.mobile.brand.class"
        >
          Marca: {{ product.brand_name }}
        </p>
        <!-- <p
          v-if="product.ref && layout.productPage.mobile.ref.show"
          :style="layout.productPage.mobile.ref.style"
          :class="layout.productPage.mobile.ref.class"
        >
          Ref: {{ product.ref }}
        </p> -->
        <p
          v-if="product.balance < 1"
          :style="layout.productPage.noStock.mobile.style"
          :class="layout.productPage.noStock.mobile.class"
        >
          {{ layout.productPage.noStock.mobile.name }}
        </p>
      </v-col>
      <v-col cols="12" align="center">
        <div
          v-if="
            availablesCodeColors[0] &&
            (config.product.showColorIfOnlyOne ||
              availablesCodeColors.length > 1) &&
            product.balance > 0 &&
            !(
              availablesCodeColors.length == 1 &&
              selectedColorName == 'N/A' &&
              !config.product.showColorIfNA
            )
          "
          :style="layout.productPage.mobile.color.mainStyle"
        >
          <p
            :style="layout.productPage.mobile.color.titleStyle"
            :class="layout.productPage.mobile.color.titleClass"
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
              class="btn-color"
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
                  layout.productPage.mobile.color.btnStyle,
                  item,
                  layout.productPage.mobile.color.selectedBtnStyle,
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
                  layout.productPage.mobile.color.btnStyle,
                  item.code_color,
                  layout.productPage.mobile.color.selectedBtnStyle,
                  item.color
                )
              "
              :class="layout.productPage.color.btnClass"
            ></v-btn>
          </span>
          <p class="mt-2">{{ selectedColorName }}</p>
        </div>

        <div v-if="ordenateAvailablesSizes.length > 0">
          <p>Tamanhos Disponíveis:</p>
          <span v-for="(size, index) in ordenateAvailablesSizes" :key="index">
            <v-btn
              tile
              :style="
                setSizeBtnStyle(
                  layout.productPage.mobile.size.btn.defaultStyle,
                  layout.productPage.mobile.size.btn.selectedStyle,
                  size,
                  !enabledSizes.includes(size),
                  layout.productPage.size.btn.disabledStyle
                )
              "
              @click="handleSizeSelection(size)"
              :disabled="!enabledSizes.includes(size)"
            >
              {{ size }}
            </v-btn>
          </span>
        </div>
        <v-row align="center">
          <v-col
            cols="12"
            v-if="productVariation && productVariation.length > 0"
            :style="layout.productPage.color.mainStyle"
          >
            <p
              style="
                font-family: 'Poppins', sans-serif;
                font-size: 16px;
                font-weight: bold;
              "
              :class="layout.productPage.mobile.color.titleClass"
            >
              Variação:
            </p>
            <span v-for="(item, index) in productVariation" :key="index">
              <v-btn
                @click="callVariationRoute(item.product_id, item.name)"
                :class="selectVariationButtonClass(item.product_id)"
              >
                {{ item.variation_value }}
              </v-btn>
            </span>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" align="center">
        <div :style="layout.productPage.priceAndBuy.mainStyle">
          <v-row>
            <v-col cols="12">
              <span v-if="product.actived_promotions.length > 0">
                <strike>
                  R$
                  {{
                    (
                      parseFloat(product.actived_promotions[0].discount_value) +
                      parseFloat(product.price)
                    ).toLocaleString("pt-BR", {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                    })
                  }}
                </strike>
                <p :style="layout.productPage.priceAndBuy.priceStyle">
                  R$
                  {{
                    parseFloat(product.price).toLocaleString("pt-BR", {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                    })
                  }}
                </p>
              </span>

              <span v-else>
                <p :style="layout.productPage.priceAndBuy.priceStyle">
                  R$
                  {{
                    parseFloat(product.price).toLocaleString("pt-BR", {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                    })
                  }}
                </p>
              </span>

              <p
                v-if="layout.productPage.priceAndBuy.installments"
                :style="layout.productPage.priceAndBuy.installmentStyle"
              >
                ou {{ maximumInstallment }}x de R${{ minimumValue }}
              </p>
            </v-col>
          </v-row>
        </div>

        <!-- Botão para selecionar quantidade -->
        <v-row align="center">
          <v-col cols="4" class="pr-0 py-0" align-self="center">
            <div class="gs-amount-input py-2">
              <v-row align="center">
                <v-col cols="4" class="pa-0 pl-2" align="left">
                  <v-btn icon style="" @click="decreaseProductAmount">
                    <i style="font-size: 20px" class="fas fa-minus"></i>
                  </v-btn>
                </v-col>

                <v-col class="pa-0" cols="2" align-self="center" align="center">
                  <input
                    v-model="productAmount"
                    style="
                      max-width: 50px;
                      width: auto;
                      border: 1px solid grey;
                      border-radius: 50px;
                      text-align: center;
                      height: 50px;
                      margin: 0 0 0 -4px;
                    "
                    type="text"
                    outlined
                    disabled
                    @keyup="validateAmountInput"
                    id="productAmountInput"
                  />
                </v-col>

                <v-col cols="4" class="pa-0 pl-2" align="right">
                  <v-btn
                    icon
                    style="width: auto"
                    @click="increaseProductAmount"
                  >
                    <i style="font-size: 20px" class="fas fa-plus"></i>
                  </v-btn>
                </v-col>
              </v-row>
            </div>
          </v-col>

          <v-col cols="8" align-self="center" class="pl-0">
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
        </v-row>

        <atribute-component
          v-if="config.atribute && config.atribute.show"
          :atributes="product.product_atribute"
        />
        <div>
          <br />
          <v-col :style="layout.productPage.description.mainStyle" cols="12">
            <deliveryCalculator />
          </v-col>
        </div>

        <v-row no-gutters align="center" style="margin-top: 32px">
          <!-- Exibição da descrição -->
          <v-col cols="12" align="center">
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
                <p
                  :style="layout.productPage.description.textStyle"
                  class="txt"
                >
                  {{ product.description }}
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </span>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import deliveryCalculator from "@/components/body/productSession/productScreen/components/others/deliveryCalculator";

export default {
  components: {
    deliveryCalculator,
  },
  data: function () {
    return {
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
    ...mapState("Layouts", ["layout", "fobOptions", "config"]),
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

    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    },

    ResetColorbtn(code_color, color) {
      this.setSelectedColor(code_color, color);
      this.selectedColor = color;
      this.productAmount = 1;
    },

    handleSizeSelection(size) {
      console.log("Tamanho selecionado:", size); // Log para verificar o clique no tamanho
      this.selectedSize = size;
      this.productAmount = 1; // Reseta a quantidade ao selecionar um novo tamanho
    },

    getAvailableStock() {
      if (
        !this.product ||
        !this.product.grid ||
        !this.selectedSize ||
        !this.selectedColor
      ) {
        return 0; // Retorna 0 se faltar algum dado necessário
      }
      const selectedGrid = this.product.grid.find(
        (el) =>
          el.size === this.selectedSize &&
          (el.color === this.selectedColor ||
            el.code_color === this.selectedColor)
      );
      return selectedGrid ? selectedGrid.balance : 0;
    },

    updateAvailableSizes(color) {
      if (this.product && this.product.variations) {
        const colorVariation = this.product.variations.filter(
          (variation) => variation.color === color
        );
        this.enabledSizes = colorVariation.map((variation) => variation.size);
        console.log("Tamanhos habilitados:", this.enabledSizes); // Verificação de tamanhos habilitados

        // Se o tamanho selecionado não estiver mais disponível, reseta o selectedSize
        if (!this.enabledSizes.includes(this.selectedSize)) {
          this.selectedSize = null;
        }
      } else {
        this.enabledSizes = []; // Garante que os tamanhos fiquem vazios se não houver variações
        console.warn("Variations não estão definidas para o produto.");
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
    setSecondColor(value) {
      let response = this.product.grid.filter((data) => {
        return data.code_color === value;
      });
      if (!response[0].second_code_color) {
        return value;
      } else {
        // return ` linear-gradient(135deg, ${value} 50%, ${response[0].second_code_color} 50%);`;
        return response[0].second_code_color;
      }
    },
    calculateDiscountRate(price) {
      this.discountPrice = (parseFloat(price) * 0.4).toFixed(2);
      return this.discountPrice;
    },
    selectVariationButtonClass(productId) {
      if (this.$route.params.productId == productId) {
        return "variation-button-selected";
      } else {
        return "variation-button";
      }
    },
    callVariationRoute(productId, productName) {
      $nuxt.$router.push({
        path: `/produto/${productId}/${this.convertToLink(productName)}`,
      });
    },
    convertToLink(value) {
      let response = value
        .replace(/_|\/|\s/g, "-")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      return response;
    },
    showSelectedDescriptionStyleButton(value) {
      if (this.pageDescription == value) {
        return {
          color: "black",
          border: "none !important",
          "font-size": "16px",
          "font-weight": "bold",
        };
      }
    },
    ShowTabDescription(value) {
      this.pageDescription = value;

      if (value == 1) {
        this.selectedProductDescription = this.product.description;
      } else {
        this.selectedProductDescription = this.product.optional_description;
      }
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

    increaseProductAmount() {
      if (!this.selectedSize) {
        alert("* Selecione um Tamanho !!!");
        return;
      }
      if (!this.selectedColor && !this.selectedColorName) {
        alert("* Selecione uma Cor !!!");
        return;
      }

      const availableStock = this.getAvailableStock();

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
    product(newProduct) {
      if (newProduct && newProduct.variations) {
        this.updateAvailableSizes(this.selectedColor);
      }
    },
    selectedSize(newSize) {
      this.setSelectedSize(newSize);
    },
    selectedColor(newColor) {
      console.log("Mudança na cor selecionada:", newColor);
    },
  },
  mounted: function () {
    this.ShowTabDescription(1);

    const installmentArray = this.installmentResult();
    this.maximumInstallment = installmentArray[0];
    this.minimumValue = installmentArray[1];
    this.whattsLink = `${this.layout.floatingIcon.link}&text=Olá, gostaria de cotar o frete do pedido: ${this.product.name}`;
  },
};
</script>

<style scoped>
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
.txt-freight-buyer-mobile {
  color: rgb(0, 0, 0);
  font-size: 16px;
}
.gs-color-btn {
  position: relative;
  box-sizing: inherit;
  min-width: 0 !important;
  width: 32px !important;
  height: 32px !important;
  padding: 3px !important;
  margin: 0 6px 4px 0;
  border-radius: 50%;
  box-shadow: none;
  overflow: hidden;
  border: 1px solid black;
}
.gs-second-color {
  position: absolute;
  width: 32px;
  height: 32px;
  left: 100%;
  transform: skew(45deg) translate(-45%);
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.6, 1);
}
.btn-Description {
  color: black !important;
  text-transform: uppercase;
  margin: 10px;
}

.txtDescriptionCard {
  padding: 10px 20px 40px 20px;
}
</style>