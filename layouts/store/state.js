// Cor Principal do Site
let mainColor = "#fff";
// Cor Secundária do Site
let secondaryColor = "black";
let thirdColor = "#0098DA";
let fourthColor = "#00A859";
let inputColor = "black";
let iconColor = "grey";
let confirmColor = "#66bb6a";
let cancelColor = "#e57373";
let errorColor = "red";
let defaultGold = "#d2ad6d";

let merchantInfo = {
  // Nome do ecommerce para direitos autorais
  companyName: "GranSys",
  // Cnpj do ecommerce para direitos autorais
  cnpj: "XX.XXX.XXX/XXXX-XX",
  // Número Whatsapp ecommerce
  whatsappNumber: " (19) 9 9999-9999",

  // Número Telefone ecommerce
  phone: " (99) 9 9999-9999",
  // Email ecommerce
  email: "...@...",
  // Endereço ecommerce *se houver
  address: "...",
  // Horário de Funcionamento ecommerce
  workingHours: "",
  // Endereço ecommerce
  location: "...",
  installment: 10,

  // Link Facebook ecommerce
  facebook:
    "https://www.facebook.com/pages/category/Software-Company/Gran-Sys-100299285073357/",
  // Link Instagram ecommerce
  instagram: "",

  //Frase
  Security: "100% Seguro",

  get emailLink() {
    return `mailto:${this.email}`;
  },

  get copyright() {
    return `Copyright ${this.companyName} - CNPJ ${this.cnpj}`;
  },
  get security() {
    return Security;
  },
  get whatsappLink() {
    return `https://api.whatsapp.com/send?phone=${"55" +
      this.whatsappNumber.replace(/[^0-9]/g, "")}`;
  },
};
// Muda logo do topo
let logo =
  "https://grancommtest.s3.amazonaws.com/layout-default-items/logos/gransys/logoText.png";
// Muda logo do footer
let logoAlt = "https://granshopping.s3.amazonaws.com/files/logoGranSys.png";

export default () => ({
  config: {
    clearSale: {
      active: false,
      seu_app: "xqtrsu2ljphavd968awc",
    },
    pixel: true,
    api_conversion: false,
    pixel_id: null,
    api_conversion_access_token: null,
    google_analytics_4: null,
    addExtraSizesInProductPage: false,
    FreightCart: false,
    minimumValueFretch: 200,
    addBackToTop: true,
    addCustomerComment: false, //Adiciona os depoimentos no layout
    checkoutMode: "V2",

    atribute: {
      show: false,
      atributes: [
        {
          atributeName: "Aro Feminino",
          labelName: "Aro Feminino",
          type: "overflow-btn",
          typeable: false,
          required: true,
        },
        {
          atributeName: "Aro Masculino",
          labelName: "Aro Masculino",
          type: "overflow-btn",
          typeable: false,
          required: true,
        },
        {
          atributeName: "Gravacao Feminina",
          labelName: "Gravação Feminina",
          typeable: true,
          required: true,
        },
        {
          atributeName: "Gravacao Masculina",
          labelName: "Gravação Masculina",
          typeable: true,
          required: true,
        },
        {
          atributeName: "Bordado",
          labelName: "Bordado",
          type: "autocomplete",
          typeable: false,
          required: false,
        },
        {
          atributeName: "Turbante",
          labelName: "Turbante",
          type: "autocomplete",
          typeable: false,
          required: false,
        },
      ],
    },
    apiVersion: {
      deliveryCheck: "V2",
      createBuy: "V2",
      finishPayment: "V2",
    },
    installmentRule: {
      minimumInstallmentValue: 5,
      minimumInstallmentTimes: 1,
      maximumInstallmentTimes: merchantInfo.installment,
    },
    qtdProductsForDiscount: 1,
    progressiveDiscount: false,

    storeName: "Mini Kids",
    externalSites: {
      correios:
        "https://buscacepinter.correios.com.br/app/endereco/index.php?t",
    },

    supportText:
      "* Caso algum dado esteja incorreto, envie um email com a cópia do documento (cpf/ cnpj) para:",
    supportEmail: merchantInfo.email,

    productWithoutStockPhrase: "Esgotado",
    product: {
      showBrandInProductPage: true,
      showBrandInFirstPage: false, //Inactive in this layout
      selectSizeIfOnlyOne: true,
      showColorIfNA: false,
      showSizeIfNA: false,
      showColorIfOnlyOne: true,
      showSizeIfOnlyOne: true,
    },
    search: {
      filters: true,
      showSizeFilter: true,
      showColorFilter: true,
    },
    delivery: {
      withdrawlText: `Retirada de ${merchantInfo.workingHours}`,
    },
    showModalInClickCartIcon: true,
    genderList: [
      { value: "m", name: "Masculino" },
      { value: "f", name: "Feminino" },
      { value: "o", name: "Outro" },
    ],
    ordenationSizes: [
      { name: "p" },
      { name: "m" },
      { name: "g" },
      { name: "gg" },
      { name: "xg" },
      { name: "g1" },
      { name: "g2" },
      { name: "g3" },
      { name: "g4" },

      { name: "1" },
      { name: "2" },
      { name: "3" },
      { name: "4" },
      { name: "5" },
      { name: "6" },
      { name: "7" },
      { name: "8" },
      { name: "9" },
      { name: "10" },
      { name: "12" },
      { name: "13" },
      { name: "14" },
      { name: "15" },
      { name: "16" },
      { name: "17" },
      { name: "18" },
      { name: "19" },
      { name: "20" },
      { name: "21" },
      { name: "22" },
      { name: "23" },
      { name: "24" },
      { name: "25" },
      { name: "26" },
      { name: "27" },
      { name: "28" },
      { name: "29" },
      { name: "30" },
      { name: "31" },
      { name: "32" },
      { name: "33" },
      { name: "34" },
      { name: "35" },
      { name: "36" },
      { name: "37" },
      { name: "38" },
      { name: "39" },
      { name: "40" },
      { name: "41" },
      { name: "42" },
      { name: "43" },
      { name: "44" },
      { name: "45" },
      { name: "46" },
      { name: "47" },
      { name: "48" },
      { name: "49" },
      { name: "50" },
      { name: "52" },
      { name: "54" },
      { name: "56" },
    ],
    paymentCard: {
      urlLogo: logoAlt,
    },
    paymentMethods: {
      creditCard: true,
      pix: true,
    },
    pixKeys: {
      keys: merchantInfo.cnpj,
    },
    installmentRule: {
      minimumInstallmentValue: 5,
      minimumInstallmentTimes: 1,
      maximumInstallmentTimes: merchantInfo.installment,
    },
  },
  fobOptions: {
    addFreightByTheBuyerInDefaultDeskScreen: false, //Escolhe se quer adicionar os campos de texto FOB no componente DefaulScreen(Desk e Mob)
    addFreightFOBinCartDefault: false, //Escolhe se irá selecionar as mensagens no componente cartDefault
    addFreightByTheBuyeinDelivery: false, //Seta irá aparecer no component delivery
    addTextFobinDelivery: "true", //Seta a mensagem que irá aparecer em no component delivery
    buttonFreightByTheBuyerDelivery: false, //Escolhe se terá o botão com o link do wpp no componente delivery
    AddtextFreightByFOBinDelivery: false, //Add o texto com a msg no componente delivery
    addFreightFOBinOrderResume: false,
    buttonFreightByTheBuyer: false, //Escolhe se terá o botão com o link do wpp
    textButtonFreightByTheBuyer: "Consulte um representante", //Seta o texto do botão
    textButtonFreightByTheBuyerCartDefault: "FOB",
    linkButtonFob: false,
    AddtextFreightByFOB: false, //Add o texto com a msg
    AddtextFreightByFOBinCartDefault: false,
    textFreightByFOB: "TEXTO PARA FRETE POR CONTA DO COMPRADOR", //Muda o texto
  },
  layout: {
    initLoader: {
      active: false,

      style: {
        "background-color": secondaryColor,
        width: "100%",
        height: "100%",
      },

      logo: {
        width: "15%",
        height: "15%",

        style: {},
        src: logoAlt,
      },
      loadingText: {
        style: {
          color: mainColor,
        },
      },
    },
    containerDefault: {},
    default: {
      app: {
        // 'font-family': "'Fjalla One', sans-serif",
        //'font-weight': '400',
        "font-family": "'Montserrat', sans-serif",
        "background-color": "white",
        width: "auto !important",
      },
      nuxtDivStyle: {
        "min-height": "400px",
      },
    },
    topBar: {
      main: {
        "font-family": "'Montserrat', sans-serif",
        "background-color": mainColor,
        height: "80px",
      },
      phone: {
        cols: 12,
        sm: 4,
        alignSelf: "center",

        disabled: false,

        label: "Telefone (c/ DDD) *",
        color: inputColor,
        style: {
          color: "grey",
        },
        class: "",

        errorMessage: "",
      },
      logoUrl: logo,
      sizes: {
        "max-width": "1130px !important;",
        "align-items": "center",
        margin: "auto",
      },
      icons: {
        color: "#000",
        "font-size": "30px",
        width: "auto",
        justifyContent: "end",
        align: "end",
        "font-weight": "400",
        minWidth: "25px", // Propriedade 'min-width' em camelCase
      },
      iconsText: {
        color: "#000",
        "font-size": "14px",
        "font-family": "'Montserrat', sans-serif",
        justifyContent: "flex-end",
        width: "100%",
        marginLeft: "center",
      },
      cartIcon: {
        class: "mdi mdi-cart cart-icon",
        style: {
          color: "black",
          "font-size": "27px",
          "align-items": "center",
          "text-align": "center",
        },
      },
      cartText: {
        color: "black",
        "font-size": "16px",
      },
      topBarLogoImg: {
        height: "50px ",
        width: "auto",
        padding: "auto !important",
      },
      topBarLogoImg2:{
        margin: "0 0 2em 0",
        height: "45px ",
        width: "auto",
        padding: "auto !important",
      },
      topBarBorder: {
        "background-color": "#000" /* Fundo marrom escuro */,
        width: "auto%" /* Largura do elemento */,
        height: "40px" /* Aumentei a altura para melhor visibilidade */,
        display:
          "flex" /* Garantir que o conteúdo seja alinhado corretamente */,
        "align-items": "center" /* Alinhamento vertical dos elementos */,
        "justify-content":
          "space-between" /* Distribui os elementos com espaço entre eles */,
        "box-shadow":
          "0 4px 6px rgba(0, 0, 0, 0.1)" /* Sombra suave para dar profundidade */,
        padding: "0 20px" /* Espaçamento interno (padding) */,
        "border-bottom":
          "2px solid #3E2723" /* Borda inferior para destacar a top bar */,
        "margin-top": "-10px",
        transition:
          "background-color 0.3s ease, box-shadow 0.3s ease" /* Transições suaves */,
      },
      topBarBorderMobile: {
        "background-color": "black" /* Fundo marrom escuro */,
        width: "auto%" /* Largura do elemento */,
        height: "50px" /* Aumentei a altura para melhor visibilidade */,
        display:
          "flex" /* Garantir que o conteúdo seja alinhado corretamente */,
        "align-items": "center" /* Alinhamento vertical dos elementos */,
        "justify-content":
          "space-between" /* Distribui os elementos com espaço entre eles */,
        "box-shadow":
          "0 4px 6px rgba(0, 0, 0, 0.1)" /* Sombra suave para dar profundidade */,
        padding: "0 20px" /* Espaçamento interno (padding) */,
        "border-bottom":
          "2px solid #000" /* Borda inferior para destacar a top bar */,
        "margin-top": "auto",
        transition:
          "background-color 0.3s ease, box-shadow 0.3s ease" /* Transições suaves */,
      },
      ColClass: {
        border: "solid rgba(128, 128, 128, 0.322) 1.5px",
        width: "100%",
        color: "black !important",
        "border-radius": "10px",
        display: "flex",
        "align-items": "center",
        "justify-content": "center",
        "font-size": "14px",
        padding: "10px" /* Ajuste de espaçamento interno */,
        "text-align": "center",
      },
      searchInput: {
        border: "solid rgba(128, 128, 128, 0.322) 1.5px",
        "border-radius": "30px",
        width: "684px",
        color: "black !important",
      },
      searchInputBtn: {
        "font-size": "22px",
      },
      mobile: {
        main: {
          "background-color": mainColor,
        },
        logoUrl: logo,
        logoStyle: {
          width: "144px !important",
        },
        navIcon: {
          icon: "fas fa-bars",
          style: {
            "font-size": "23px !important",
            color: iconColor,
          },
        },
        cart: {
          icon: "mdi mdi-shopping-outline cart-icon",
          style: {
            "font-size": "27px !important",
            color: iconColor,
          },
        },
        searchInput: {
          position: "relative",
          border: "solid rgba(128, 128, 128, 0.322) 1px",
          background: "rgba(255, 255, 255, 0.877)",
          width: "100%",
          color: "black !important",
          height: "40px",
          width: "90%",
          padding: "0 0 0 10px",
          margin: "0 5% 0 5% !important",
        },
        searchInputBtn: {
          position: "absolute",
          margin: "30px 0 0 0px",
          right: "10px",
          bottom: "0px",
          "box-shadow": "none !important",
          "font-size": "23px !important",
          height: "40px !important",
          background: "none !important",
          color: iconColor,
        },
      },
    },
    navBar: {
      main: {
        "background-color": "#000",
        border: "solid rgba(128, 128, 128, 0.214) 1px",
        "font-family": "'Montserrat', sans-serif",
      },
      carousel: {
        width: "85%",
        height: "10em",
        margin: "2em 0 0 0",
        backgroundColor: "#5c4436", // Fundo claro
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Sombra suave
        borderRadius: "10px",
        overflow: "hidden",
        padding: "0", // Remover padding para melhor controle
        transition: "all 0.3s ease",
      },
      carousel2:{
      width: "100%",
      height: "30em",
      margin: "2em 0 0 0",
      backgroundColor: "#5c4436", // Fundo claro
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Sombra suave
      borderRadius: "10px",
      overflow: "hidden",
      padding: "0", // Remover padding para melhor controle
      transition: "all 0.3s ease",
      },
      carousel3:{
        width: "100%",
        height: "auto",
        margin: "1em 0 0 0",
        backgroundColor: "#5c4436", // Fundo claro
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Sombra suave
        borderRadius: "10px",
        overflow: "hidden",
        padding: "0", // Remover padding para melhor controle
        transition: "all 0.3s ease",
        },
      navText: {
        color: "white",
        "font-size": "16px",
        padding: "10px 15px 10px 15px",
        "text-transform": "uppercase",
      },
      sub: {
        "background-color": "white",
      },
      subText: {
        color: "black",
      },
      mobile: {
        main: {
          height: "100%",
          overflow: "hidden",
          "background-color": mainColor,
        },
        linkStyle: {
          "border-bottom": "solid rgba(128, 128, 128, 0.336) 1px",
          width: "100%",
        },
        login: {
          name: "Login",
          link: "/login",
          icon: {
            class: "mdi mdi-account-circle-outline",
            style: {
              color: iconColor,
            },
          },
          style: {
            "text-decoration": "none",
            color: iconColor,
          },
        },
        linkList: {
          account: {
            name: "Conta",
            link: "/conta/minha-conta",
            icon: {
              class: "mdi mdi-account-circle-outline",
              style: {
                color: iconColor,
              },
            },
            style: {
              "text-decoration": "none",
              color: iconColor,
            },
          },
          orders: {
            name: "Pedidos",
            link: "/conta/pedidos",
            icon: {
              class: "mdi mdi-note-edit-outline",
              style: {
                color: iconColor,
              },
            },
            style: {
              "text-decoration": "none",
              color: iconColor,
            },
          },
        },
        navItemsStyle: {
          "overflow-x": "hidden",
          "overflow-y": "auto",
        },
        itemStyle: {
          color: "black",
          "text-decoration": "none",
        },
        subItemStyle: {
          "text-decoration": "none",
        },
        chevronStyle: {
          color: "black",
        },
      },
    },
    index: {
      carousel: {
     
        
      },
      information: {
        items: [
          {
            icon: "mdi mdi-truck-check-outline",
            bold: "  Frete grátis",
            text: "acima de R$ 399,99",
          },
          {
            icon: "mdi mdi-credit-card-check-outline",
            bold: `  ${merchantInfo.installment}x s/ juros`,
            text: "nos cartões de crédito",
          },
          {
            icon: "mdi mdi-package-variant-closed-check",
            bold: "Pronta entrega",
            text: "em todo site",
          },
        ],
        rowClass: {},
        colClass: {
          color: "black !important",
        },
        icons: {
          "font-size": "30px",
        },
        boldText: {
          "font-family": "'Montserrat', sans-serif !important",
          padding: "0 0 25px 0 !important",
          "font-size": "14px",
          color: "black !important",
        },
        text: {
          "padding-bottom": "5px",
          "font-size": "12px",
        },
        mobile: {
          iconsStyle: {
            color: "black !important",
          },
          boldTextStyle: {
            color: "black !important",
          },
          textStyle: {
            color: "black !important",
          },
        },
      },
    },
    search: {
      home: {
        main: {
          margin: "110px 25px 90px 25px",
        },
        title: "Destaques",
        titleStyle: {
          background: "white", // Gradiente sutil para um título moderno
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent", // Efeito de gradiente no texto
          textTransform: "uppercase",
          fontSize: "32px", // Tamanho um pouco maior para chamar a atenção
          letterSpacing: "2px", // Reduzido para um visual mais moderno
          color: "white", // Cor de fallback para navegadores sem suporte ao gradiente
          fontFamily: "'Pacifico', cursive",
          padding: "5px 0", // Espaçamento menor para foco no texto
          margin: "2em 0 2em ",
          alignItems: "start",
        justifyContent: "start",
        },
        titleClass: "text-center",
      },
      alert: {
        cols: 11,
        sm: 8,

        style: {
          "max-width": "300px !important",
        },
        justify: "center",
        align: "center",

        icon: "mdi-alert-box-outline",
        color: iconColor,

        text: "Não foi possível encontrar nenhum produto!",
      },
      showMoreBtn: {
        title: "Ver Mais",
        main: {
          margin: "90px 0 0 0",
          height: "45px !important",
          width: "35% !important",
          border: "none",
          "background-color": secondaryColor,
          color: mainColor,
          "font-size": "12px !important",
        },
      },
      accordion: {
        main: {},
        expPanel: {
          "min-width": "120px",
          margin: "8px 0 0 0 !important",
        },
        expHeader: {
          "font-size": "14px",
        },
        expContent: {
          "max-height": "300px",
          "overflow-x": "hidden",
          "overflow-y": "auto",
        },
        expColorCheckBox: {
          height: "30px !important",
          "margin-top": "5px !important",
          "margin-bottom": "5px !important",
        },
        expSizeCheckBox: {
          height: "30px !important",
          "margin-top": "5px !important",
          "margin-bottom": "5px !important",
        },
      },
      category: {
        main: {},
        accordion: {
          cols: 3,
          xl: 2,
        },
        items: {
          cols: 9,
          xl: 10,
          xs: 12,
        },
        titleStyle: {
          "border-bottom": "solid  rgba(128, 128, 128, 0.214) 1px",
        },
      },
      productCard: {
        imgAspectRatio: "0.7",
        placeholder: logoAlt,

        mainStyle: {
          padding: "20px 12px 0px 12px",
          margin: "15px ",
        },
        installmentConfig: {
          installment: merchantInfo.installment,
        },
        imgStyle: {
          height: "auto",
        },
        nameStyle: {
          padding: "10px 0 0 0",
          "font-weight": "500 !important",
          overflow: "hidden",
          "text-overflow": "hidden",
          display: "-webkit-box",
          "-webkit-line-clamp": 2,
          "-webkit-box-orient": "vertical",
        },
        textArea: {
          style: {
            "min-height": "59px",
            height: "100vh",
            "max-height": "66px",
          },
        },
        discountPriceStyle: {
          "margin-left": " 0px !important",
          "text-decoration": "line-through",
          color: "rgba(128, 128, 128, 0.803)",
          "font-size": "14px",
          alignItems: "top"
        },
        priceStyle: {
          "font-weight": "600 !important",
          "font-size": "22px",

        },
        installmentPriceStyle: {
          padding: "0px 0 0 0 !important",
          "font-weight": "300 !important",
          "font-size": "14px !important",
          color: "#3b4e3c !important",
        },
        noBalanceProduct: {
          style: {
            margin: "0px !important",
            color: "grey",
            "font-weight": "600 !important",
          },
          class: {},
        },
        buttonStyle: {
          margin: "20px 0 0 0",
          width: "100%",
          height: "40px",
          "font-size": "15px",
          "background-color": secondaryColor,
          color: "white",
          "border-radius": "none !important",
        },
        btnName: "comprar",
        hrStyle: {
          color: mainColor,
        },
      },
    },
    productPage: {
      mainStyle: {
        margin: "30px 0 0 0 !important",
      },
      selectedImgColStyle: {},
      availableImgColStyle: {
        padding: "9px 10px 0 10px   !important",
      },
      availableImgCardStyle: {
        "box-shadow": "none !important",
      },
      availableImgStyle: {},
      placeholder: logoAlt,
      informationColStyle: {
        padding: "0px 0 0 0   !important",
        margin: "0px 0 0 0   !important",
      },
      productNameStyle: {
        "font-size": "22px",
        "font-weight": "500",
        margin: "0px 0 9px 0 !important",
        borderBottom: "0.5px solid black"
      },
      productNameClass: {},
      brand: {
        show: true,
        style: {
          color: "black",
          "font-size": "16px",
          margin: "0px 0 0 0 !important",
        },
        class: null,
      },
      ref: {
        show: true,
        style: {
          color: "black",
          "font-size": "13px",
          margin: "0px !important",
        },
        class: null,
      },
      color: {
        mainStyle: {
          margin: "0 0 0 0",
        },
        titleStyle: {
          "font-size": "18px",
          borderBottom: "0.5px solid black"
        },
        titleClass: {},
        btnStyle: {
          "box-sizing": "inherit",
          "min-width": "0 !important",
          width: "26px !important",
          height: "26px !important",
          padding: "3px !important",
          "border-radius": "30px",
          margin: "0 4px 4px 0",
        },
        selectedBtnStyle: {
          "box-shadow": "inset 0px 0px 10px 2px darkgrey",
          "box-sizing": "inherit",
          "min-width": "0 !important",
          width: "26px !important",
          height: "26px !important",
          padding: "3px !important",
          "border-radius": "30px",
          margin: "0 6px 6px 0",
        },
        btnClass: {},
      },
      size: {
        mainStyle: {
          margin: "34px 0 0 0",
        },
        titleStyle: {
          "font-size": "18px",
          borderBottom: "0.5px solid black"

        },
        titleClass: {},
        btn: {
          defaultStyle: {
            "box-sizing": "inherit",
            "min-width": "0 !important",
            width: "40px !important",
            height: "40px !important",
            border: "solid 1px black !important",
            padding: "3px !important",
            "border-radius": "30px",
            margin: "0 0 0 0",
            color: "black",
            cursor: "pointer",
          },
          defaultClass: {},
          selectedStyle: {
            "box-sizing": "inherit",
            "min-width": "0 !important",
            width: "40px !important",
            height: "40px !important",
            border: "solid 2px black !important",
            padding: "3px !important",
            "border-radius": "30px",
            margin: "0 4px 0 0",
            color: "black",
            "font-weight": "bold",
          },
          disabledStyle: {
            "box-sizing": "inherit",
            "min-width": "0 !important",
            width: "40px !important",
            height: "40px !important",
            border: "solid 1px  rgba(128, 128, 128, 0.201) !important",
            padding: "3px !important",
            "border-radius": "30px",
            margin: "0 4px 0 0",
            color: "rgba(128, 128, 128, 0.541)",
          },
        },
      },
      priceAndBuy: {
        installments: merchantInfo.installment,
        installmentStyle: {
          fontSize: "1em",
        },
        mainStyle: {
          margin: "0 0 0 0 !important",
          // "border-top": " rgba(128, 128, 128, 0.308) 1px solid",
          width: "auto !important",
        },
        qtd: {
          width: "auto",
          height: "auto",
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          margin: "0 5px 0 0",
        },
        priceStyle: {
          fontSize: "1.4em",
          fontWeight: "bold",
          color: "#2e7d32",
          margin: "0 10px 10px 0",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        },
        buyBtnStyle: {
          backgroundColor: "green", // Fundo preto
          color: "white", // Texto branco
          height: "60px", // Altura um pouco maior para maior impacto
          width: "100%", // Largura ajustada para melhor proporção
          fontWeight: "bold", // Texto em negrito
          fontSize: "1.3em", // Tamanho da fonte aumentado
          textTransform: "uppercase", // Texto em caixa alta
          letterSpacing: "3px", // Maior espaçamento entre letras para estilo ousado
          border: "2px solid white", // Borda branca para contraste
          borderRadius: "5px", // Bordas mais suaves e retas
          boxShadow: "0px 8px 14px rgba(0, 0, 0, 0.4)", // Sombra mais profunda para destaque
          transition: "transform 0.3s ease, background-color 0.3s ease, color 0.3s ease", // Transições suaves e sincronizadas
          cursor: "pointer", // Indicador de clique
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textShadow: "1px 1px 2px rgba(255, 255, 255, 0.3)", // Sutil sombra no texto para mais estilo
          margin: "0 0 20px 0"
        },
        hoverBuyBtnStyle: {
          backgroundColor: "green", // Fundo branco no hover
          color: "white", // Texto preto no hover
          border: "2px solid black", // Borda preta no hover
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)", // Sombra ainda mais pronunciada no hover
          transform: "scale(1.1)", // Aumento mais perceptível no hover
          textShadow: "none", // Remove a sombra do texto para limpeza
          height: "50px", // Altura um pouco maior para maior impacto
          width: "75%", // Largura ajustada para melhor proporção
        },
            
      },
      description: {
        mainStyle: {
          margin: "0px 0 0 0",
        },
        titleStyle: {
          "font-weight": "bold",
        },
        textStyle: {
          "white-space": "pre-line",
        },
      },
      noStock: {
        mobile: {
          name: "Produto Indisponível",
          style: {
            margin: "20px 0 20px 0 ",
            "font-size": "18px",
            color: errorColor,
          },
          class: null,
        },
        name: "Produto Indisponível",
        style: {
          margin: "130px 0 60px 0 ",
          "font-size": "23px",
          color: errorColor,
        },
        class: null,
      },
      searchSection: {
        style: {
          "border-top": "solid grey 1px",
        },
        title: {
          name: "Produtos Relacionados",
          style: {
            "font-size": "20px !important",
            "font-weight": "bold",
          },
          class: null,
        },
        config: {
          items: 12,
          displaySize: {
            sm: 4,
            md: 2,
            xl: 2,
            cols: 6,
          },
          params: {},
        },
      },
      mobile: {
        mainRowStyle: {
          padding: "0 5% 0 5%",
        },
        productNameStyle: {
          "font-weight": "500",
          "font-size": "20px",
        },
        productNameClass: {},
        selectedImgColStyle: {},
        availableImgColStyle: {
          padding: "10px",
        },
        availableImgStyle: {},
        brand: {
          style: {
            color: "black",
            "font-size": "14px",
            margin: "0px 0 2px 0 !important",
          },
          class: null,
        },
        ref: {
          show: true,
          style: {
            color: "black",
            "font-size": "13px",
            margin: "0px !important",
          },
          class: null,
        },
        color: {
          mainStyle: {
            "border-top": "solid 1px rgba(128, 128, 128, 0.384)",
            "border-bottom": "solid 1px rgba(128, 128, 128, 0.384)",
            margin: "34px 0 0 0",
          },
          titleStyle: {
            "font-size": "16px",
          },
          titleClass: {},
          btnStyle: {
            "box-sizing": "inherit",
            "min-width": "0 !important",
            width: "34px !important",
            height: "34px !important",
            // padding: "3px !important",
            // margin: "0 4px 4px 0",
          },
          selectedBtnStyle: {
            // "box-shadow": "inset 0px 0px 10px 2px darkgrey",
            "box-sizing": "inherit",
            "min-width": "0 !important",
            width: "40px !important",
            height: "40px !important",
            'border-radius':'30px',
            border: "1px solid #000", // Adiciona a borda de 3px
            // padding: "4px !important",
            // margin: "0 6px 6px 0",
          },
          btnClass: {},
        },
        size: {
          mainStyle: {
            padding: "4px 0 0 14px !important",
          },
          titleStyle: {},
          titleClass: {},
          btn: {
            defaultStyle: {
              "box-sizing": "inherit",
              "min-width": "0 !important",
              width: "32px !important",
              height: "32px !important",
              border: "solid 1px black !important",
              padding: "3px !important",
              "border-radius": "30px",
              margin: "0 4px 0 0",
              color: "black",
              cursor: "pointer",
            },
            defaultClass: {},
            selectedStyle: {
              "box-sizing": "inherit",
              "min-width": "0 !important",
              width: "30px !important",
              height: "30px !important",
              border: "solid 2px black !important",
              padding: "3px !important",
              "border-radius": "30px",
              margin: "0 4px 0 0",
              color: "black",
              "font-weight": "bold",
            },
            disabledStyle: {
              "box-sizing": "inherit",
              "min-width": "0 !important",
              width: "32px !important",
              height: "32px !important",
              "border-radius": "30px",
              border: "solid 1px  rgba(128, 128, 128, 0.201) !important",
              padding: "3px !important",
              margin: "0 4px 0 0",
              color: "rgba(128, 128, 128, 0.541)",
            },
          },
        },
        priceAndBuy: {
          installments: merchantInfo.installment,
          installmentStyle: {},
          mainStyle: {
            margin: "30px 0 0 0 !important",
            "border-top": " rgba(128, 128, 128, 0.308) 1px solid",
            "border-bottom": " rgba(128, 128, 128, 0.308) 1px solid",
            width: "100% !important",
          },
          priceStyle: {
            "font-weight": "bold",
            "font-size": "26px",
            padding: "0px !important",
            margin: "0px !important",
          },
          buyBtnStyle: {
            "background-color": `${confirmColor} !important`,
            color: "white ",
            height: "55px",
            width: "100%",
          },
        },
        description: {
          mainStyle: {
            margin: "10px 0 0 0",
          },
          titleStyle: {
            "font-weight": "bold",
          },
          textStyle: {
            "white-space": "pre-line",
          },
        },
      },
    },
    cart: {
      cartDialog: {
        dialog: {
          style: {
            background: "none !important",
          },
          class: {},
          maxWidth: "700",
        },
        card: {
          style: {
            // overflow: 'hidden',
            height: "100%",
          },
          class: {},
        },
        headerRow: {
          style: {
            width: "auto",
            padding: "0 15px 0 15px",
            "border-bottom": "solid rgba(128, 128, 128, 0.148) 1px",
          },
        },
        titleCol: {
          title: "Minha Sacola",
          style: {
            "padding-bottom": "0px",
          },
          textClass: "",
          textStyle: {
            color: "grey",
            "font-weight": "bold",
          },
        },
        list: {
          rowStyle: {
            width: "115%",
          },
          rowStyleMobile: {
            width: "100%",
          },
          rowClass: null,
          productStyle: {
            "max-height": "60vh",
            "overflow-y": "auto",
            "overflow-x": "hidden",
          },
          img: {
            cols: 3,
            sm: 2,
            colStyle: {
              padding: "18px 0 18px 0  ",
            },
            imgStyle: {
              height: "100px",
              width: "auto",
            },
          },
          information: {
            cols: 4,
            sm: 6,
            nameStyle: {
              "font-size": "14px",
              padding: "0px !important",
              margin: "0px !important",
            },
            nameClass: {},
            colorStyle: {
              "font-size": "14px",
              padding: "0px !important",
              margin: "0px !important",
            },
            colorClass: {},
            sizeStyle: {
              "font-size": "14px",
              padding: "0px !important",
              margin: "0px !important",
            },
            sizeClass: {},
            qtdStyle: {
              "font-size": "14px",
              padding: "0px !important",
              margin: "0px !important",
            },
            qtdClass: {},
          },
          qtd: {
            input: false,
            cols: 5,
            sm: 3,
            labelStyle: {
              margin: "0px !important",
            },
            inputStyle: {
              "max-width": "110px",
            },
          },
          price: {
            cols: 5,
            sm: 3,
            colAlign: "right",
            totalStyle: {
              "font-size": "16px !important",
              "font-weight": "bold !important",
              padding: "0px !important",
              margin: "0px !important",
            },
            totalClass: {},
            eachStyle: {
              "font-size": "12px !important",
              padding: "0px !important",
              margin: "0px !important",
            },
            eachClass: {},
          },
          removeButton: {
            style: {
              "text-decoration": "underline",
              "font-size": "12px",
            },
          },
        },

        bottomRow: {
          style: {
            "border-top": "solid rgba(128, 128, 128, 0.148) 1px",
            "background-color": "white",
          },
          subTotal: {
            cols: 12,
            sm: 11,
            align: "right",
            text: {
              class: null,
              style: {
                "font-size": "18px",
                margin: "0px !important",
                padding: "0px !important",
                "background-color": "white",
              },
            },
          },
          backToBuys: {
            cols: 12,
            sm: 4,
            align: "center",

            color: cancelColor,
            class: "",

            style: {
              color: "white",
              "background-color": "white",
            },
          },
          goToCart: {
            cols: 12,
            sm: 4,
            align: "center",

            color: confirmColor,
            class: "",

            style: {
              color: "white",
            },
          },
        },
        noItemIcon: {
          style: {
            "font-size": "64px",
            color: iconColor,
          },
          class: "mdi mdi-cart-remove",
        },
        emptyText: {
          style: {},
          text: "Carrinho Vazio!!",
        },
        emptyButton: {
          style: {
            "background-color": mainColor,
            color: "black",
          },
          text: "Voltar",
        },
      },
      cartScreen: {
        mainStyle: {
          position: "relative",
          "max-width": "1200px !important",
          margin: "30px auto 0 auto",
        },
        title: {
          name: "Meu Carrinho",
          style: {
            padding: "12px 0 0 0 ",
            "font-size": "22px",
            "border-bottom": "solid grey 1px",
          },
          class: null,
        },
        btnTop: {
          show: true,
          style: {
            float: "right",
            "background-color": "black",
            color: "white",
          },
        },
        list: {
          row: {
            style: {
              "border-bottom": "solid rgba(128, 128, 128, 0.26) 1px",
              "max-width": "1200px !important",
              margin: "0px auto 0 auto",
            },
            class: null,
          },
          img: {
            cols: 2,
            sm: 1,
            colStyle: {
              padding: "12px 0 12px 0",
              margin: "0px",
              "max-height": "140px !important",
            },
            imgStyle: {
              height: "100px",
              width: "auto",
            },
          },
          name: {
            cols: 9,
            sm: 4,
            md: 3,
            alignSelf: "center",
            colStyle: {},
            title: {
              style: {
                "font-size": "14px",
                padding: "0px !important",
                margin: "0px !important",
                "font-weight": "bold",
              },
              class: null,
            },
            price: {
              cols: 2,
              colAlign: "right",
              totalStyle: {
                "font-size": "16px !important",
                "font-weight": "bold",
                padding: "0px !important",
                margin: "0px !important",
              },
              totalClass: {},
              eachStyle: {
                "font-size": "12px !important",
                padding: "0px !important",
                margin: "0px !important",
              },
              eachClass: {},
            },
            removeButton: {
              style: {
                "text-decoration": "underline",
                "font-size": "12px",
              },
            },
          },
          info: {
            alignSelf: "center",
            cols: 6,
            sm: 4,
            md: 4,
            color: {
              cols: 12,
              md: 6,
              alignSelf: "center",
              style: {
                "font-size": "14px",
                padding: "0px !important",
                margin: "0px !important",
              },
              class: null,
            },
            size: {
              cols: 12,
              md: 6,
              alignSelf: "center",
              style: {
                "font-size": "14px",
                padding: "0px !important",
                margin: "0px !important",
              },
              sizeClass: null,
            },
          },
          amount: {
            cols: 6,
            sm: 4,
            md: 2,
          },
          price: {
            cols: 6,
            sm: 3,
            md: 2,
            colAlign: "right",
            totalStyle: {
              "font-size": "16px !important",
              "font-weight": "bold",
              padding: "0px !important",
              margin: "0px !important",
            },
            totalClass: {},
            eachStyle: {
              "font-size": "12px !important",
              padding: "0px !important",
              margin: "0px !important",
            },
            eachClass: {},
          },
          removeButton: {
            style: {
              "text-decoration": "underline",
              "font-size": "12px",
            },
          },
        },
        resume: {
          row: {
            style: {
              margin: "35px 0 20px 0",
              border: "solid 1px rgba(128, 128, 128, 0.348)",
            },
          },
          freight: {
            col: {
              cols: 12,
              sm: 7,
              align: "left",
              style: {
                color: "grey",
                "font-weight": "bold",
                "font-size": "22px",
                "border-right": "1px solid lightgrey",
              },
            },
            title: {
              class: null,
              style: {},
            },
            input: {
              cols: "12",
              sm: "12",

              color: inputColor,
            },
            checkCepLink: {
              text: "Não sei o meu CEP",

              style: {
                color: "black",
                "font-size": "12px",
                margin: "0px !important",
              },
            },
            radioGroup: {
              alignSelf: "center",
              cols: "12",
              sm: "7",

              color: inputColor,
              class: "mt-2",
              style: {
                "font-size": "12px !important",
              },
            },
            otherCepLink: {
              text: "Calcular com outro CEP",

              style: {
                color: "black",
                "font-size": "12px !important",
                margin: "0px !important",
                "text-decoration": "underline",
              },
            },
          },
          info: {
            col: {
              cols: 12,
              sm: 5,
              align: "right",
              style: {},
            },
            resume: {
              style: {
                color: "grey",
                "font-weight": "bold",
                "font-size": "22px",
              },
              class: null,
            },
            subtotal: {
              style: {
                margin: "0px !important",
              },
              class: null,
            },
            freight: {
              style: {},
              class: null,
            },
            total: {
              style: {
                color: "black",
                "font-size": "22px",
                margin: "5px 0 0 0",
                "font-weight": "bold",
              },
              class: null,
            },
            installments: {
              show: true,
              installments: merchantInfo.installment,
              style: {
                margin: "0px",
                color: "grey",
                "font-weight": "bold",
                "font-size": "12px",
              },
            },
          },
        },

        btnBottom: {
          show: true,
          style: {
            "background-color": confirmColor,
            color: "white",
            width: "250px",
            height: "45px",
          },
        },

        noItemIcon: {
          style: {
            "font-size": "64px",
            color: iconColor,
          },
          class: "mdi mdi-cart-remove",
        },
        emptyText: {
          text: "Seu carrinho está vazio!!",
          style: {
            color: iconColor,
          },
        },
        emptyButton: {
          text: "Voltar às compras",
          style: {
            "background-color": cancelColor,
            color: "white",
          },
        },
      },
    },
    login: {
      outterRowAlign: "center",
      loginCol: {
        align: "center",
        cols: "11",
        sm: "6",

        style: {
          "max-width": "500px",
        },
      },
      title: {
        class: "text-start mt-5 mb-3",
        text: "Iniciar Sessão",
      },
      email: {
        class: "default-size",
        color: inputColor,
        label: "Email",
      },
      password: {
        class: "default-size",
        color: inputColor,
        label: "Password",
      },
      forgotPassword: {
        style: {
          top: "-19px",
          right: "11px",
          position: "absolute",
          "font-size": "13px",
          color: "blue",
        },
        class: "text-right",
        text: "Esqueci minha Senha",
      },
      loginBtn: {
        style: {
          width: "100%",
          "background-color": secondaryColor,
          color: mainColor,
        },
        class: "btn-go default-size acess-btn mt-5",
      },
      registerLink: {
        style: {
          "font-size": "14px",
        },
        class: "mt-3",

        quote: "Não tem uma conta?",
        text: "Cadastrar",
      },
      error: {
        text: "",
        style: {
          "margin-top": "-20px",
        },
      },
    },
    register: {
      justify: "center",

      cols: 11,
      sm: 8,
      xl: 4,

      title: {
        color: mainColor,
        class: "white--text",

        text: "Criar Conta",
      },

      company: {
        show: true,

        color: inputColor,
        label: "Empresa",

        isCompany: false,
      },
      name: {
        show: true,

        color: inputColor,
        label: "Nome Completo",
      },
      fantasyName: {
        show: true,

        color: inputColor,
        label: "Nome Fantasia",
      },
      companyName: {
        show: true,

        color: inputColor,
        label: "Razão Social",
      },
      phone: {
        show: true,

        color: inputColor,
        label: "Telefone",
      },
      cpf: {
        show: true,

        color: inputColor,
        label: "CPF",
      },
      cnpj: {
        show: true,

        color: inputColor,
        label: "CNPJ",
      },
      birthday: {
        show: true,

        color: inputColor,
        label: "Data de Nascimento *",
      },
      gender: {
        show: true,

        color: inputColor,
        label: "Sexo *",
      },
      email: {
        show: true,

        color: inputColor,
        label: "Email",
      },
      password: {
        show: true,

        color: inputColor,
        label: "Senha",
      },
      passwordConfirmation: {
        show: true,

        color: inputColor,
        label: "Confirmar Senha",
      },

      finishBtn: {
        cols: 8,
        sm: 6,

        style: {
          "background-color": mainColor,
          color: secondaryColor,
        },
        class: "btn-go default-size acess-btn mt-5",

        text: "Criar Conta",
        icon: "mdi-check",
      },

      error: {
        text: "",
        style: {},
      },
    },
    account: {
      cols: 9,

      tabs: {
        cols: 2,

        slider: {
          style: {
            "background-color": "grey",
          },
          size: 10,
        },
        activeStyle: {
          "background-color": mainColor,
          color: "brown !important",
        },
        regularStyle: {
          "background-color": "white !important",
          color: "black !important",
        },
        mobile: {
          slider: {
            color: "grey",
            size: 10,
          },

          activeStyle: {
            "background-color": mainColor,
            color: "grey !important",
            height: "40px !important",
          },
          regularStyle: {
            "background-color": "white !important",
            color: "black !important",
            height: "40px !important",
          },
        },
      },
      content: {
        cols: 10,
      },
      people: {
        title: {
          elevation: 0,

          style: {
            "background-color": "black",
            color: "white",
          },
          class: "",

          text: "Dados da Conta",
        },

        email: {
          cols: 12,
          sm: 12,
          alignSelf: "center",

          disabled: true,

          label: "Email *",
          color: inputColor,
          style: {
            color: "grey",
          },
          class: "",
        },
        companySwitch: {
          cols: 12,
          sm: 12,

          disabled: true,

          label: "Empresa",
          color: inputColor,
          style: {
            margin: "0 !important",
          },
          class: "",
        },
        name: {
          cols: 12,
          sm: 4,
          alignSelf: "center",

          disabled: false,

          label: "Nome Completo *",
          color: inputColor,
          style: {
            color: "grey",
          },
          class: "",

          errorMessage: "",
        },
        companyName: {
          cols: 12,
          sm: 4,
          alignSelf: "center",

          disabled: false,

          label: "Razão Social *",
          color: inputColor,
          style: {
            color: "grey",
          },
          class: "",

          errorMessage: "",
        },
        birthday: {
          cols: 12,
          sm: 4,
          alignSelf: "center",

          disabled: false,

          label: "Nascimento",
          color: inputColor,
          style: {
            color: "grey",
          },
          class: "",

          errorMessage: "",
        },
        phone: {
          cols: 12,
          sm: 4,
          alignSelf: "center",

          disabled: false,

          label: "Telefone (c/ DDD) *",
          color: inputColor,
          style: {
            color: "grey",
          },
          class: "",

          errorMessage: "",
        },
        cpfCnpj: {
          cols: 12,
          sm: 4,
          alignSelf: "center",

          disabled: false,

          label: "CPF/CNPJ *",
          color: inputColor,
          style: {
            color: "grey",
          },
          class: "",

          errorMessage: "",
        },
        gender: {
          cols: 12,
          sm: 3,
          alignSelf: "center",

          disabled: false,

          label: "Sexo *",
          color: inputColor,
          style: {},
          class: "",

          errorMessage: "",
        },

        error: {
          style: {},
        },
      },
      addresses: {
        title: {
          elevation: 0,

          style: {
            "background-color": "black",
            color: "white",
          },
          class: "",

          text: "Endereços",
        },

        input: {
          color: inputColor,
        },

        cep: {
          cols: 12,
          sm: 12,
          alignSelf: "",

          label: "Cep",
          style: {
            "max-width": "200px",
          },
          class: "",

          errorMessage: "",
        },
        street: {
          cols: 9,
          sm: 9,
          alignSelf: "",

          label: "Rua",
          style: {},
          class: "",

          errorMessage: "",
        },
        houseNumber: {
          cols: 3,
          sm: 3,
          alignSelf: "",

          label: "Nº",
          style: {},
          class: "",

          errorMessage: "",
        },
        neighborhood: {
          cols: 12,
          sm: 9,
          alignSelf: "",

          label: "Bairro",
          style: {},
          class: "",

          errorMessage: "",
        },
        city: {
          cols: 9,
          sm: 9,
          alignSelf: "",

          label: "Cidade",
          style: {},
          class: "",

          errorMessage: "",
        },
        estate: {
          cols: 3,
          sm: 3,
          alignSelf: "",

          label: "UF",
          style: {},
          class: "",

          errorMessage: "",
        },
        complement: {
          cols: 12,
          sm: 12,
          alignSelf: "",

          label: "Complemento",
          style: {},
          class: "",

          errorMessage: "",
        },
        observation: {
          cols: 12,
          sm: 12,
          alignSelf: "",

          label: "Observação",
          style: {},
          class: "",

          errorMessage: "",
        },
        saveBtn: {
          style: {
            float: "center",
            "background-color": confirmColor,
            color: "white",
          },
          class: "ml-1 btn-go",

          text: "Salvar",
        },

        error: {
          text: "",
          style: {},
        },

        divider: {
          style: {
            "background-color": "darkgrey",
          },
        },

        addBtn: {
          icon: "mdi-plus",
          text: "adicionar Endereço",
          style: {
            "background-color": confirmColor,
            color: "white",
          },
        },
      },
      orders: {
        title: {
          elevation: 0,

          style: {
            "background-color": "black",
            color: "white",
          },
          class: "",

          text: "Histórico de Pedidos",
        },
        detailsBtn: {
          color: mainColor,
          style: {
            color: secondaryColor,
          },
          class: "",
        },
        backToBuys: {
          color: cancelColor,
          style: {
            color: "white",
          },
          class: "",
        },
      },
    },
    orderDetails: {
      stepper: {
        payBtn: {
          style: {
            "background-color": confirmColor,
            color: "white",
          },
          class: "mt-3 mb-5",
        },
        step: {
          color: mainColor,
        },
      },
      deliveryDetails: {
        delivery: {
          cols: 12,
          md: 9,

          style: {},
          class: "",

          title: {
            style: {
              background: mainColor,
              color: "white",
            },
            class: "",
          },
        },
        pricing: {
          cols: 12,
          md: 3,

          style: {},
          class: "",

          title: {
            style: {
              background: mainColor,
              color: "white",
            },
            class: "",
          },
        },
      },
      productDetails: {
        header: {
          style: {
            background: mainColor,
            color: "white",
          },

          product: {
            cols: 12,
            sm: 6,
          },
          amount: {
            cols: 3,
          },
          totalPrice: {
            cols: 3,
          },
        },
        item: {
          style: {
            margin: "0",
            border: "solid rgba(0, 0, 0, 0.075) 0.1px",
          },

          img: {
            cols: 3,
            sm: 2,
          },
          product: {
            cols: 9,
            sm: 4,
          },
          amount: {
            cols: 7,
            sm: 3,
          },
          totalPrice: {
            cols: 5,
            sm: 3,
          },
        },
        footer: {
          style: {
            //'background-color': '#6B869F',
            "text-transform": "uppercase",
          },

          product: {
            cols: 7,
            sm: 9,
          },
          totalPrice: {
            cols: 5,
            sm: 3,
          },
        },
      },
    },
    payment: {
      closeOrderModal: {
        input: {
          color: inputColor,
        },
        addressBtn: {
          style: {
            background: confirmColor,
            color: "white",
          },
        },
        buyBtn: {
          style: {
            "background-color": confirmColor,
            color: "white",
          },
        },
      },
      creditCard: {
        front: {
          style: {
            "text-shadow": "black 1px 2px 5px",
            "box-shadow": "0px 0px 12px 0px grey",
            "border-radius": "15px",
            "background-color": mainColor,
            color: defaultGold,
          },
        },
        back: {
          style: {
            "text-shadow": "black 1px 2px 5px",
            "box-shadow": "0px 0px 12px 0px grey",
            "border-radius": "15px",
            "background-color": mainColor,
            color: defaultGold,
          },
        },
        disabled: {
          front: {
            style: {
              "text-shadow": "black 1px 2px 5px",
              "box-shadow": "0px 0px 12px 0px grey",
              "border-radius": "15px",
              "background-color": "lightgrey",
            },
          },
          back: {
            style: {
              "text-shadow": "black 1px 2px 5px",
              "box-shadow": "0px 0px 12px 0px grey",
              "border-radius": "15px",
              "background-color": "lightgrey",
            },
          },
        },
      },
      input: {
        color: mainColor,
      },
      payBtn: {
        style: {
          width: "100%",
          "background-color": confirmColor,
          color: "white",
        },
        class: "mr-5 mb-5",
      },
      backToBuys: {
        style: {
          "background-color": cancelColor,
          color: "white",
        },
        class: "mt-5 mb-5",
      },
    },
    footer: {
      mainStyle: {
        position: "relative", // Use "relative" em vez de "inherit" para melhor controle
        backgroundColor: "#5c4436",
        marginTop: "20px", // Remova "!important" para evitar conflitos
        borderTop: "1px solid #ccc", // Use uma cor de borda mais suave
      },
      mainStyleRodape: {
        position: "relative", // Use "relative" em vez de "inherit" para melhor controle
        backgroundColor: "#5c4436",
        borderTop: "1px solid #ccc", // Use uma cor de borda mais suave
      },
      titleStyle: {
        "font-size": "22px",
        color: "white",
        "font-weight": "bold",
        marginTop: "5px",
        textAlign: "center",
        flexDirection: "row",
        alignItems: "center",
      },
      titleStyleMobile: {
        "font-size": "0.8em",
        color: "white",
        textAlign: "center",
        flexDirection: "row",
        alignItems: "center",
      },
      titleStyleMobile2: {
        "font-size": "1em",
        color: "white",
        display: "flex",
        textAlign: "center",
        flexDirection: "row",
        alignItems: "center",
      },
      titleStyleMobile3: {
        "font-size": "1.5em",
        color: "white",
        display: "flex",
        textAlign: "center",
        flexDirection: "row",
        alignItems: "center",
      },
      titleStyle2: {
        "font-size": "14px",
        color: "white",
        marginTop: "10px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },

      titleStyle3: {
        "font-size": "16px",
        color: "white",
        textAlign: "center",
        flexDirection: "row",
        alignItems: "center",
      },
      titleStyle4: {
        "font-size": "16px",
        color: "white",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      securityImg: {
        width: "180px",
        height: "auto",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      list: {
        align: "center",
      },
      institucionalList: [
        {
          name: "Quem Somos",
          route: "/quem-somos",
          style: {
            "text-decoration": "none !important",
            color: "white",
            "font-size": "15px",
          },
        },
        {
          name: "Políticas de Trocas",
          route: "/politicas-trocas",
          style: {
            "text-decoration": "none !important",
            color: "white",
            "font-size": "15px",
          },
        },

        {
          name: "Políticas de Entregas",
          route: "/politicas-entrega",
          style: {
            "text-decoration": "none !important",
            color: "white",
            "font-size": "15px",
          },
        },

        {
          name: "Políticas de Privacidade",
          route: "/politica-privacidade",
          style: {
            "text-decoration": "none !important",
            color: "white",
            "font-size": "15px",
          },
        },
      ],
      contactList: [
        {
          name: merchantInfo.phone,
          style: {
            color: "white",
            "font-size": "12px",
          },
          icon: "mdi mdi-phone",

          iconStyle: {
            color: "white",
            align: "center",
          },
        },
        {
          name: merchantInfo.email,
          style: {
            color: "white",
            "font-size": "12px",
          },
          icon: "mdi mdi-email-outline",

          iconStyle: {
            color: "white",
            align: "center",
          },
        },

        /*{
                    name: merchantInfo.address,
                    style: {
                        color: 'black',
                        'font-size': '13px'
                    },
                    icon: 'mdi mdi-map-legend',
                    iconStyle: {
                        color: iconColor
                    }
                }*/
      ],
      // Exemplo de state atualizado
      logoSession: {
        style: {
          alignItems: "center",
          justifyContent: "center",
          padding: "20px 0", // Adiciona espaçamento vertical
        },
        align: "center", // Mantém o alinhamento centralizado
        logoSrc: logoAlt, // Fonte da logo
        logoStyle: {
          width: "120px", // Define a largura da logo
          height: "auto", // Mantém a proporção da logo
          objectFit: "contain", // Garante que a logo não seja cortada
          color: "white",
        },
        logoStyleRodape: {
          width: "4em", // Define a largura da logo
          height: "4em", // Mantém a proporção da logo
          objectFit: "contain", // Garante que a logo não seja cortada
          color: "white !important",
        },
        logoContainer: {
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Cor branca com opacidade
          width: "150px", // Largura do círculo
          height: "150px", // Altura do círculo (igual à largura)
          borderRadius: "50%", // Faz o elemento ser um círculo perfeito
          display: "flex", // Centraliza o conteúdo dentro do círculo
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Adiciona sombra para destaque
        },
        logoContainerRodape: {
          width: "10px", // Largura do círculo
          height: "80px", // Altura do círculo (igual à largura)
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Adiciona sombra para destaque
        },
        logoContainerRodape2: {
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
          width: "100%",
          color: "black",
        },
        midiaLinks: [
          {
            icon: "mdi mdi-instagram",
            iconStyle: {
              color: "white",
              "font-size": "33px",
            },
            href: merchantInfo.instagram,
            target: "_blank",
            rel: "noopener noreferrer",
          },
          {
            icon: "mdi mdi-facebook",
            iconStyle: {
              color: "white",
              "font-size": "33px",
            },
            href: merchantInfo.facebook,
            target: "_blank",
            rel: "noopener noreferrer",
          },
          {
            icon: "mdi mdi-whatsapp",
            iconStyle: {
              color: "white",
              "font-size": "33px",
            },
            href: merchantInfo.whatsappLink,
          },
        ],
        midiaLinks2: [
          {
            icon: "mdi mdi-instagram",
            iconStyle: {
              color: "white",
              "font-size": "20px",
            },
            href: merchantInfo.instagram,
            target: "_blank",
            rel: "noopener noreferrer",
          },
          {
            icon: "mdi mdi-google-maps",
            iconStyle: {
              color: "white",
              "font-size": "33px",
            },
            href: merchantInfo.facebook,
            target: "_blank",
            rel: "noopener noreferrer",
          },
          {
            icon: "mdi mdi-whatsapp",
            iconStyle: {
              color: "White",
              "font-size": "20px",
            },
            href: merchantInfo.whatsappLink,
          },
        ],
      },
      paymentSession: {
        align: "center",
        color: "white",
        borderBottom: "1px solid black",

        cards: [
          {
            class: "mb-3",
            style: "margin: 0 0 0 5px",
            src: "/cardsBuySession/pix.png",
          },
          {
            class: "mb-3",
            style: "margin: 0 0 0 5px",
            src: "/cardsBuySession/card-master.png",
          },
          {
            class: "mb-3",
            style: "margin: 0 0 0 5px",
            src: "/cardsBuySession/visa.png",
          },
          {
            class: "mb-3",
            style: "margin: 0 0 0 5px",
            src: "/cardsBuySession/amex.png",
          },
          {
            class: "mb-3",
            style: "margin: 0 0 0 5px",
            src: "/cardsBuySession/hipercard.png",
          },
          {
            class: "mb-3",
            style: "margin: 0 0 0 5px",
            src: "/cardsBuySession/logo-cartao-elo-512.png",
          },
        ],
      },
      copyrightSession: {
        copyright: merchantInfo.copyright,
        security: merchantInfo.Security,
      },
    },
    floatingIcon: {
      backToTop: {
        style: {
          position: "fixed",
          left: "1%",
          bottom: "10%",
          width: "40px",
          height: "40px",
          opacity: 0.4,
          "z-index": 99,
        },
      },

      icon: "/whatsapp.svg",
      link: merchantInfo.whatsappLink,

      icon2: "./facebook_5968764.png",
      link2: merchantInfo.facebook,

      icon3: "./instagram_2111463.png",
      link3: merchantInfo.InstagramLink,

      style: {
        position: "fixed",
        right: "1%",
        bottom: "3%",
        width: "40px",
        height: "40px",
        "z-index": 99,
      },
      style2: {
        position: "fixed",
        right: "1%",
        bottom: "5%",
        width: "40px",
        height: "40px",
        "z-index": 99,
      },
      style3: {
        position: "fixed",
        right: "1%",
        bottom: "10%",
        width: "40px",
        height: "40px",
        "z-index": 99,
      },
    },
    dialog: {
      exitDialog: {
        width: 300,
        align: "center",

        style: {
          padding: "10px",
        },

        cancelBtn: {
          width: "100",
          color: cancelColor,
          style: {
            color: "white",
          },
        },
        okBtn: {
          width: "100",
          color: confirmColor,
          style: {
            color: "white",
          },
        },
      },
    },
  },
});
