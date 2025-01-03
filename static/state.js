let mainColor = '#e1c564';
let secondaryColor = '#7a0a18';
let inputColor = 'black';
let iconColor = 'white';
let confirmColor = '#006600';
let cancelColor = '#990000';
let errorColor = 'red';

let merchantInfo = {
    whatsappNumber: "(19) 99292-6821",
    email: "contato@segundapelebr.com.br",
    emailLink: "mailto:contato@segundapelebr.com.br",
    address: "R. Rafael de Barros, 396 - Centro, Leme - SP",
    workingHours: "Segunda à Sexta das 10h às 17h e Sábado das 10h às 13h",
    location: "https://goo.gl/maps/uZKicX4iwMqxL8Dp7",
    installment: 4,

    facebook: "https://www.facebook.com/segundapelee.br",
    instagram: "https://www.instagram.com/segundapele.br/",

    copyright: "Copyright Segunda Pele - CNPJ 35.718.850/0001-04",

    whatsappLink: "https://api.whatsapp.com/send?phone=5519992926821"

};

let logo = "/logo.svg";
let logoAlt = "/logo_alt.svg";
let safeLogo = "/safe-site-icon.png"

export default () => ({
    config: {
        pixel: true,
        tagManagerGA: true,
        checkoutMode: 'V2',
        FreightCart: true,
        minimumValueFretch: 350,
        addExtraSizesInProductPage: false,
        apiVersion: {
            deliveryCheck: 'V2',
            createBuy: 'V2',
            finishPayment: 'V2'
        },
        storeName: "Gransys",
        externalSites: {
            correios: "https://buscacepinter.correios.com.br/app/endereco/index.php?t"
        },

        email: merchantInfo.email,
        phone: merchantInfo.whatsappNumber,

        supportText: '* Caso haja algum dado errado, envie um email com a cópia do documento (cpf/ cnpj) para:',
        supportEmail: merchantInfo.email,

        productWithoutStockPhrase: 'Esgotado',
        product: {
            showBrandInProductPage: false,
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
            showColorFilter: true
        },
        delivery: {
            withdrawlText: `Retirada de ${merchantInfo.workingHours}`
        },
        showModalInClickCartIcon: true,
        genderList: [
            { value: "m", name: "Masculino" },
            { value: "f", name: "Feminino" },
            { value: "o", name: "Outro" },
        ],
        ordenationSizes: [
            { name: 'p' },
            { name: 'p/m' },
            { name: 'm' },
            { name: 'g' },
            { name: 'gg' },
            { name: 'xg' },
            { name: 'g1' },
            { name: 'g2' },
            { name: 'g3' },
            { name: 'g4' },

            { name: '1' },
            { name: '2' },
            { name: '3' },
            { name: '4' },
            { name: '5' },
            { name: '6' },
            { name: '7' },
            { name: '8' },
            { name: '9' },
            { name: '10' },
            { name: '12' },
            { name: '13' },
            { name: '14' },
            { name: '15' },
            { name: '16' },
            { name: '17' },
            { name: '18' },
            { name: '19' },
            { name: '20' },
            { name: '21' },
            { name: '22' },
            { name: '23' },
            { name: '24' },
            { name: '25' },
            { name: '26' },
            { name: '27' },
            { name: '28' },
            { name: '29' },
            { name: '30' },
            { name: '31' },
            { name: '32' },
            { name: '33' },
            { name: '34' },
            { name: '35' },
            { name: '36' },
            { name: '37' },
            { name: '38' },
            { name: '39' },
            { name: '40' },
            { name: '41' },
            { name: '42' },
            { name: '43' },
            { name: '44' },
            { name: '45' },
            { name: '46' },
            { name: '47' },
            { name: '48' },
            { name: '49' },
            { name: '50' },
            { name: '52' },
            { name: '54' },
            { name: '56' },

        ],
        paymentCard: {
            urlLogo: logoAlt
        },
        installmentRule: {
            minimumInstallmentValue: 50,
            minimumInstallmentTimes: 1,
            maximumInstallmentTimes: merchantInfo.installment
        }
    },
    layout: {
        initLoader: {

            active: false,

            style: {
                'background-color': secondaryColor,
                width: '100%',
                height: '100%'
            },

            logo: {
                width: '10%',
                height: '10%',

                style: {
                },
                src: logoAlt
            },
            loadingText: {
                style: {
                    color: mainColor
                }
            }
        },
        containerDefault: {
            // 'max-width': '1230px !important;',
            // margin: '0 auto 0 auto !important;',
        },
        default: {
            app: {
                'font-family': "'Palanquin', sans-serif !important",
                'font-weight': '400',

            },
            nuxtDivStyle: {
                'min-height': '400px'
            }
        },
        topBar: {
            main: {
                'z-index': 99
            },
            logoUrl: logo,
            sizes: {
                'max-width': '1300px !important',
                margin: '0 auto 0 auto'
            },
            icons: {
                color: mainColor
            },
            iconsText: {
                color: mainColor
            },
            cartIcon: {
                class: '',
                style: {
                    color: mainColor,
                }
            },
            cartText: {
                color: 'black',
            },
            topBarLogoImg: {
                height: '60px ',
                width: 'auto',
            },
            searchInput: {
                width: '100%',
            },
            searchInputBtn: {
                'font-size': '22px'
            },
            mobile: {
                main: {
                },
                logoUrl: logo,
                logoStyle: {
                    width: '135px !important'
                },
                navIcon: {
                    icon: 'fas fa-bars',
                    style: {
                        'font-size': '23px !important',
                        color: 'black'
                    }
                },
                cart: {
                    icon: 'mdi mdi-shopping-outline cart-icon',
                    style: {
                        'font-size': '27px !important',
                        color: iconColor
                    }
                },
                searchInput: {
                    position: 'relative',
                    background: 'rgba(255, 255, 255, 0.877)',
                    width: '100%',
                    height: '40px',
                    width: '90%',
                    padding: '0 0 0 10px',
                    margin: '0 5% 0 5% !important'
                },
                searchInputBtn: {
                    position: 'absolute',
                    margin: '30px 0 0 0px',
                    right: '10px',
                    bottom: '0px',
                    "box-shadow": 'none !important',
                    "font-size": '23px !important',
                    height: '40px !important',
                    background: 'none !important',
                    color: iconColor
                },
            }
        },
        navBar: {
            main: {
                'background-color': 'transparent',
                width: '100%',
                height: '30px'
            },
            navText: {
                color: mainColor,
                'font-weight': '400',
                padding: '10px 15px 10px 15px',

            },
            subText: {
                color: 'black',
            },
            mobile: {
                main: {
                    padding: '10px'
                },
                linkStyle: {
                    'border-bottom': 'solid rgba(128, 128, 128, 0.336) 1px',
                    width: '100%',
                },
                login: {
                    name: 'Login',
                    link: '/login',
                    icon: 'mdi-account-outline',
                    style: {
                        'text-decoration': 'none',
                        color: iconColor
                    }
                },
                linkList: {


                    // orders: {
                    //     name: 'Pedidos',
                    //     link: '/conta/pedidos',
                    //     icon: '/audit.svg',
                    //     style: {
                    //         'text-decoration': 'none',
                    //         color: 'black !important',
                    //         'font-size': '32px'
                    //     }
                    // },
                    // account: {
                    //     name: 'Conta',
                    //     link: '/conta/minha-conta',
                    //     icon: '/user-alt.svg',
                    //     style: {
                    //         'text-decoration': 'none',
                    //         color: 'black !important',
                    //         'font-size': '32px'
                    //     }
                    // }
                },
                navItemsStyle: {
                    'overflow-x': 'hidden',
                    'overflow-y': 'hidden',
                },
                itemStyle: {
                    color: 'black',
                    'text-decoration': 'none'
                },
                subItemStyle: {
                    'text-decoration': 'none'
                },
                chevronStyle: {
                }

            }
        },
        index: {
            carousel: {
                // interval: 5000,
                // frameRate: 9 / 16,
                // items: [
                //     {
                //         src: '/desk/banner.png',
                //         link: '/busca/promocoes',
                //     },
                //     // {
                //     //     src: '/desk/maternidade.jpg',
                //     //     link: '/busca/maternidade',
                //     // },
                //     // {
                //     //     src: '/desk/2.jpg',
                //     // },
                //     // {
                //     //     src: '/desk/3.jpg',
                //     //     link: '/busca/sexy-empoderada'
                //     // },
                //     // {
                //     //     src: '/desk/4.jpg',
                //     // },




                // ],
                // itemsMobile: [
                //     {
                //         src: '/mobile/banner.png',
                //         link: '/busca/promocoes',
                //     },
                //     // {
                //     //     src: '/mobile/maternidade.jpg',
                //     //     link: '/busca/maternidade',
                //     // },
                //     // {
                //     //     src: '/mobile/2.jpg',

                //     // },
                //     // {
                //     //     src: '/mobile/3.jpg',
                //     //     link: '/busca/sexy-empoderada'
                //     // },
                //     // {
                //     //     src: '/mobile/4.jpg',
                //     // },



                // ]
            },
            carouselInformation: {
                list: {
                    pageOne: [
                        
                        {
                            icon: {
                                src: '/delivery-truck.svg',
                                style: {
                                }
                            },
                            boldText: {
                                string: 'FRETE GRÁTIS',
                                style: {
                                    'font-weight': '900 !important',
                                    'font-size': '13px',
                                }
                            },
                            regularText: {
                                string: 'Em compras a partir de R$330,00',
                                style: {
                                    margin: '0 !important',
                                    'font-weight': '200',
                                    'font-size': '13px'
                                }
                            }
                        },

                        {
                            icon: {
                                src: '/technical-support.svg',

                                style: {

                                }
                            },
                            boldText: {
                                string: 'SUPORTE',

                                style: {
                                    'font-weight': '900 !important',
                                    'font-size': '13px'
                                }
                            },
                            regularText: {
                                string: 'Está na dúvida sobre algo?',

                                style: {
                                    margin: '0 !important',
                                    'font-weight': '200',
                                    'font-size': '13px'
                                }
                            },
                            link: {
                                string: '\nEntre em contato!',
                                href: merchantInfo.whatsappLink,

                                style: {
                                    margin: '0 !important',
                                    'font-weight': '200',
                                    'font-size': '13px',
                                    color: 'black',
                                    'text-decoration': 'underline',
                                    'white-space': 'pre'
                                }
                            }
                        },
                    ],
                    pageTwo: [
                        {
                            icon: {
                                src: '/payment.svg',

                                style: {

                                }
                            },
                            boldText: {
                                string: 'TROCA FÁCIL ',

                                style: {
                                    'font-weight': '900 !important',
                                    'font-size': '13px'
                                }
                            },
                            regularText: {
                                string: 'Entre em contato com nosso suporte via',

                                style: {
                                    margin: '0 !important',
                                    'font-weight': '200',
                                    'font-size': '13px'
                                }
                            },
                            link: {
                                string: 'e-mail',
                                href: merchantInfo.emailLink,

                                style: {
                                    margin: '0 !important',
                                    'font-weight': '200',
                                    'font-size': '13px',
                                    color: 'black',
                                    'text-decoration': 'underline'
                                }
                            }
                        },

                        {
                            icon: {
                                src: '/protection.svg',

                                style: {

                                }
                            },
                            boldText: {
                                string: 'PAGAMENTO 100% SEGURO',

                                style: {
                                    'font-weight': '900 !important',
                                    'font-size': '13px'
                                }
                            },
                            regularText: {
                                string: 'Seus dados estão todos protegidos nesse site',

                                style: {
                                    margin: '0 !important',
                                    'font-weight': '200',
                                    'font-size': '13px'
                                }
                            }
                        },
                    ]
                }
            },
            information: {
                items: [
                    { cols: 4, icon: 'mdi mdi-whatsapp', bold: '  Whatsapp:', text: merchantInfo.whatsappNumber },
                    { cols: 8, icon: 'mdi mdi-map-marker', bold: '  Localização:', text: merchantInfo.address }
                ],
                rowClass: {
                },
                colClass: {
                },
                icons: {
                    'font-size': '14px',
                    'padding-right': '8px'
                },
                boldText: {
                    'font-family': '"Verdana",Geneva,sans-serif',
                    'padding': '0 0 25px 0 !important',
                    'font-size': '14px',
                },
                text: {
                    'font-family': '"Verdana",Geneva,sans-serif',
                    'padding-bottom': '5px',
                    'font-size': '12px',
                },
                mobile: {
                    iconsStyle: {
                    },
                    boldTextStyle: {
                        'padding': '0 !important',
                        'font-size': '9px',
                    },
                    textStyle: {
                        color: 'black !important'
                    }
                }
            },
        },
        search: {
            home: {
                main: {
                    margin: '110px 25px 90px 25px',
                },
                title: 'Novidades',
                titleStyle: {
                    'margin-left': '30px',
                    'margin-top': '60px',
                    'font-weight': 400,
                    'text-transform': 'uppercase',
                    'border-bottom': `solid ${secondaryColor} 2px`
                },
                titleClass: 'text-center',
            },
            alert: {
                cols: 11,
                sm: 8,

                style: {
                    'max-width': '300px !important'
                },
                justify: 'center',
                align: 'center',

                icon: 'mdi-alert-box-outline',
                color: 'grey',

                text: 'Não foi possível encontrar nenhum produto!'
            },
            showMoreBtn: {
                title: 'Ver Mais',
                main: {
                    margin: '30px 0 0 0',
                    width: '45% !important',
                    border: 'none',
                    'background-color': mainColor,
                    color: 'black',
                    'font-size': '18px',
                    'font-weight': 400,
                    opacity: 0.75
                }
            },
            accordion: {
                main: {
                },
                expPanel: {
                    'min-width': '120px',
                    margin: '8px 0 0 0 !important'
                },
                expHeader: {
                    'font-size': '14px'
                },
                expContent: {
                    'max-height': '300px',
                    'overflow-x': 'hidden',
                    'overflow-y': 'hidden'
                },
                expColorCheckBox: {
                    height: '30px !important',
                    'margin-top': '5px !important',
                    'margin-bottom': '5px !important',
                    'text-transform': 'uppercase'
                },
                expSizeCheckBox: {
                    height: '30px !important',
                    'margin-top': '5px !important',
                    'margin-bottom': '5px !important'
                }
            },
            category: {
                main: {
                },
                accordion: {
                    cols: 12,
                    md: 3,
                    xl: 2,
                },
                items: {
                    cols: 12,
                    md: 9,
                    xl: 10,
                },
                titleStyle: {
                    'margin-top': '40px !important',
                    'margin-left': '50px !important',
                },
            },
            productCard: {
                imgAspectRatio: '0.7',
                placeholder: logoAlt,

                mainStyle: {
                    padding: '10px 12px 0px 12px',
                    margin: '10px 0 0px 0 !important',

                },
                installmentConfig: {
                    installment: 4
                },
                imgStyle: {
                },
                nameStyle: {
                    margin: '0 !important',
                    padding: '0 !important',
                    'font-size': '14px ',
                    'font-weight': '400 !important',
                    color: 'grey',
                    'text-transform': 'uppercase',
                    'overflow': 'hidden',
                    'text-overflow': 'hidden',
                    display: '-webkit-box',
                    '-webkit-line-clamp': 2,
                    '-webkit-box-orient': 'vertical'
                },
                textArea: {
                    style: {
                        "min-height": "59px",
                        height: "100vh",
                        "max-height": "66px",
                    }
                },
                discountPriceStyle: {
                    'font-family': "'Montserrat', sans-serif !important",
                    'margin-left': ' 0px !important',
                    'text-decoration': 'line-through',
                    color: 'rgba(128, 128, 128, 0.803)',
                    'font-size': '14px'
                },
                priceStyle: {

                    'font-family': "'Montserrat', sans-serif !important",
                    'font-size': '18px !important',
                    'font-weight': '400 !important',
                    color: 'grey',
                    'text-transform': 'uppercase',
                },
                installmentPriceStyle: {
                    height: '18px',
                    'font-family': "'Montserrat', sans-serif !important",
                    padding: '0px 0 0 0 !important',
                    'font-weight': '300 !important',
                    'font-size': '14px !important'
                },
                noBalanceProduct: {
                    style: {
                        margin: '0px !important',
                        color: "grey",
                        'font-weight': '600 !important'
                    },
                    class: {

                    }
                },
                buttonStyle: {
                    margin: "20px 0 0 0",
                    width: '100%',
                    background: confirmColor,
                    color: 'white',
                    'font-size': '14px',
                    'font-weight': 400,
                    'border-radius': 'none !important',
                    opacity: 0.75
                },
                btnName: 'Comprar'
            }
        },
        productPage: {
            mobile: {
                mainRowStyle: {
                    padding: '0 5% 0 5%'
                },
                productNameStyle: {
                    'font-weight': '500',
                    'font-size': '20px'
                },
                productNameClass: {

                },
                selectedImgColStyle: {
                },
                availableImgColStyle: {
                    padding: '10px'
                },
                availableImgStyle: {
                },
                brand: {
                    style: {
                        color: 'black',
                        'font-size': '14px',
                        margin: '0px 0 2px 0 !important'
                    },
                    class: null
                },
                ref: {
                    show: true,
                    style: {
                        color: 'black',
                        'font-size': '13px',
                        margin: '0px !important'
                    },
                    class: null
                },
                color: {
                    mainStyle: {
                    },
                    titleStyle: {
                        'font-size': '18px'
                    },
                    titleClass: {

                    },
                    btnStyle: {
                        border: '1px solid grey',
                        'box-sizing': 'inherit',
                        'min-width': '0 !important',
                        width: '38px !important',
                        height: '38px !important',
                        padding: '2px !important',
                    },
                    selectedBtnStyle: {
                        border: '2px solid black',
                        'box-sizing': 'inherit',
                        'min-width': '0 !important',
                        width: '38px !important',
                        height: '39px !important',
                        padding: '3px 3px  !important',
                    },
                    btnClass: {

                    }
                },
                size: {
                    mainStyle: {
                    },
                    titleStyle: {
                        'font-size': '18px'
                    },
                    titleClass: {

                    },
                    btn: {
                        defaultStyle: {
                            'font-family': '"Montserrat", sans-serif !important',
                            'font-size': '10px',
                            'box-sizing': 'inherit',
                            'min-width': '0 !important',
                            'width': '38px !important',
                            'height': '38px !important',
                            'border': 'solid 1px grey !important',
                            'padding': '3px !important',
                            margin: '0 4px 0 0',
                            color: 'black',
                            cursor: 'pointer'
                        },
                        defaultClass: {

                        },
                        selectedStyle: {
                            'font-family': '"Montserrat", sans-serif !important',
                            'font-size': '10px',
                            'box-sizing': 'inherit',
                            'min-width': '0 !important',
                            'width': '38px !important',
                            'height': '38px !important',
                            'border': 'solid 2px black !important',
                            'padding': '3px !important',
                            margin: '0 4px 0 0',
                            color: 'black',
                            'font-weight': 'bold'
                        },
                        disabledStyle: {
                            'font-family': '"Montserrat", sans-serif !important',
                            'box-sizing': 'inherit',
                            'min-width': '0 !important',
                            'width': '38px !important',
                            'height': '38px !important',
                            'border': 'solid 1px  rgba(128, 128, 128, 0.201) !important',
                            'padding': '3px !important',
                            margin: '0 4px 0 0',
                            color: 'rgba(128, 128, 128, 0.541)'
                        }
                    }
                },
                priceAndBuy: {
                    installments: 4,
                    installmentStyle: {

                    },
                    mainStyle: {
                        margin: '30px 0 0 0 !important',
                        'border-top': ' rgba(128, 128, 128, 0.308) 1px solid',
                        'border-bottom': ' rgba(128, 128, 128, 0.308) 1px solid',
                        width: '100% !important'
                    },
                    priceStyle: {
                        'font-family': "'Montserrat', sans-serif !important",
                        'font-weight': 'bold',
                        'font-size': '26px',
                        padding: '0px !important',
                        margin: '0px !important'
                    },
                    buyBtnStyle: {
                        'background-color': `${confirmColor} !important`,
                        color: 'white !important',

                    }
                },
                description: {
                    mainStyle: {
                        margin: '10px 0 0 0'
                    },
                    titleStyle: {
                        'font-weight': 'bold'
                    },
                    textStyle: {

                    }
                },
            },
            mainStyle: {
                margin: '30px 0 0 0 !important'
            },
            selectedImgColStyle: {
            },
            availableImgColStyle: {
                padding: '9px 10px 0 10px   !important'
            },
            availableImgCardStyle: {
                'box-shadow': 'none !important',
                border: '2px solid black'
            },
            availableImgStyle: {
                height: 'auto',
            },
            informationColStyle: {
                padding: '0px 0 0 0   !important',
                margin: '0px 0 0 0   !important'
            },
            productNameStyle: {
                'font-family': '"Montserrat", sans-serif',
                'font-weight': '400',
                'text-transform': 'uppercase',
            },
            productNameClass: {

            },
            brand: {
                show: true,
                style: {
                    color: 'black',
                    'font-size': '14px',
                    margin: '0px 0 2px 0 !important'
                },
                class: null
            },
            ref: {
                show: true,
                style: {
                    color: 'black',
                    'font-size': '13px',
                    margin: '0px !important'
                },
                class: null
            },
            color: {
                mainStyle: {
                },
                titleStyle: {
                    'font-size': '18px'
                },
                titleClass: {

                },
                btnStyle: {
                    border: '1px solid grey',
                    'box-sizing': 'inherit',
                    'min-width': '0 !important',
                    width: '38px !important',
                    height: '38px !important',
                    padding: '2px !important',
                },
                selectedBtnStyle: {
                    border: '2px solid black',
                    'box-sizing': 'inherit',
                    'min-width': '0 !important',
                    width: '38px !important',
                    height: '39px !important',
                    padding: '3px 3px  !important',
                },
                btnClass: {

                }
            },
            size: {
                mainStyle: {
                },
                titleStyle: {
                    'font-size': '18px'
                },
                titleClass: {

                },
                btn: {
                    defaultStyle: {
                        'font-family': '"Montserrat", sans-serif !important',
                        'font-size': '10px',
                        'box-sizing': 'inherit',
                        'min-width': '0 !important',
                        'width': '38px !important',
                        'height': '38px !important',
                        'border': 'solid 1px grey !important',
                        'padding': '3px !important',
                        margin: '0 4px 0 0',
                        color: 'black',
                        cursor: 'pointer'
                    },
                    defaultClass: {

                    },
                    selectedStyle: {
                        'font-family': '"Montserrat", sans-serif !important',
                        'font-size': '10px',
                        'box-sizing': 'inherit',
                        'min-width': '0 !important',
                        'width': '38px !important',
                        'height': '38px !important',
                        'border': 'solid 2px black !important',
                        'padding': '3px !important',
                        margin: '0 4px 0 0',
                        color: 'black',
                        'font-weight': 'bold'
                    },
                    disabledStyle: {
                        'font-family': '"Montserrat", sans-serif !important',
                        'box-sizing': 'inherit',
                        'min-width': '0 !important',
                        'width': '38px !important',
                        'height': '38px !important',
                        'border': 'solid 1px  rgba(128, 128, 128, 0.201) !important',
                        'padding': '3px !important',
                        margin: '0 4px 0 0',
                        color: 'grey'
                    }
                }
            },
            priceAndBuy: {
                installments: 4,
                installmentStyle: {

                },
                mainStyle: {
                    width: '100% !important'
                },
                priceStyle: {
                    'font-family': "'Montserrat', sans-serif !important",
                    'font-weight': 'bold',
                    'font-size': '26px',
                    padding: '0px !important',
                    margin: '0px !important'
                },
                buyBtnStyle: {
                    'background-color': `${confirmColor} !important`,
                    color: 'white !important',
                    width: '100%'
                }
            },
            description: {
                mainStyle: {
                },
                titleStyle: {
                    'font-weight': 'bold'
                },
                textStyle: {
                    'white-space': 'pre-line'
                }
            },
            noStock: {
                mobile: {
                    name: 'Produto Indisponível',
                    style: {
                        margin: '20px 0 20px 0 ',
                        'font-size': '18px',
                        'color': errorColor
                    },
                    class: null
                },
                name: 'Produto Indisponível',
                style: {
                    margin: '130px 0 60px 0 ',
                    'font-size': '23px',
                    'color': errorColor
                },
                class: null
            },
            searchSection: {
                style: {
                    'border-top': 'solid grey 1px',

                },
                title: {
                    name: 'Produtos Relacionados',
                    style: {
                        'font-size': '20px !important',
                        'font-weight': 'bold'
                    },
                    class: null
                },
                config: {
                    items: 12,
                    displaySize: {
                        sm: 4,
                        md: 2,
                        xl: 2,
                        cols: 6
                    },
                    params: {
                    }
                },
            }
        },
        cart: {
            cartDialog: {
                dialog: {
                    style: {
                        background: 'none !important',
                    },
                    class: {

                    },
                    maxWidth: '700'

                },
                card: {
                    style: {
                        background: 'white',
                        overflow: 'hidden',
                    },
                    class: {

                    }
                },
                headerRow: {
                    style: {
                        'border-bottom': `2px solid ${secondaryColor}`

                    }
                },
                titleCol: {
                    title: 'Minha Sacola',
                    style: {
                    },
                    textClass: '',
                    textStyle: {
                        color: 'grey',
                        'font-weight': 'bold'

                    }
                },
                list: {
                    rowStyle: {
                    },
                    rowClass: null,
                    productStyle: {
                        'max-height': '50vh',
                        'overflow-y': 'hidden',
                        'overflow-x': 'hidden',
                    },
                    img: {
                        cols: 3,
                        sm: 3,
                        colStyle: {
                        },
                        imgStyle: {
                            height: '100px',
                            width: 'auto'
                        }
                    },
                    information: {
                        cols: 6,
                        md: 5,
                        nameStyle: {
                            'font-size': '14px',
                        },
                        nameClass: {

                        },
                        colorStyle: {
                            'font-size': '14px',
                        },
                        colorClass: {

                        },
                        sizeStyle: {
                            'font-size': '14px',
                        },
                        sizeClass: {

                        },
                        qtdStyle: {
                            'font-size': '14px',
                        },
                        qtdClass: {

                        }
                    },
                    qtd: {
                        input: false,
                        cols: 0,
                        sm: 3,
                        labelStyle: {
                        },
                        inputStyle: {
                            'font-family': '"Arial", sans-serif !important',
                            'max-width': '110px',
                        },
                    },
                    price: {
                        cols: 6,
                        md: 7,
                        colAlign: 'right',
                        totalStyle: {
                            'font-family': "'Montserrat', sans-serif !important",
                            'font-size': '16px !important',
                            'font-weight': 'bold',
                        },
                        totalClass: {

                        },
                        eachStyle: {
                            'font-size': '12px !important',
                            padding: '0px !important',
                        },
                        eachClass: {

                        }
                    },
                    removeButton: {
                        style: {
                            'text-decoration': 'underline',
                            'font-size': '12px'
                        }
                    }
                },

                bottomRow: {
                    style: {
                        'border-top': '1px solid lightgrey'
                    },
                    subTotal: {
                        cols: 12,
                        sm: 12,
                        align: 'right',
                        text: {
                            class: null,
                            style: {
                                'font-size': '18px',
                            }
                        }
                    },
                    goToCart: {
                        cols: 12,
                        sm: 4,
                        align: 'center',

                        color: secondaryColor,
                        class: '',

                        style: {
                            color: mainColor
                        }
                    }
                },
                noItemIcon: {
                    style: {
                        'font-size': '64px',
                        color: 'black'
                    },
                    class: 'mdi mdi-cart-remove',
                },
                emptyText: {
                    style: {
                    },
                    text: 'Carrinho Vazio!!',
                },
                emptyButton: {
                    style: {
                        'background-color': '#e57373'
                    },
                    text: 'Voltar',
                }
            },
            cartScreen: {
                mainStyle: {
                    position: 'relative',
                    'max-width': '1200px !important',
                    margin: '30px auto 0 auto',
                },
                title: {
                    name: 'Meu Carrinho',
                    style: {
                        padding: '12px 0 0 0 ',
                        'font-size': '22px',
                        'border-bottom': 'solid grey 1px'
                    },
                    class: null
                },
                btnTop: {
                    show: true,
                    style: {
                        float: 'right',
                        'background-color': confirmColor,
                        color: 'white'
                    }
                },
                list: {
                    row: {
                        style: {
                            'border-bottom': 'solid rgba(128, 128, 128, 0.26) 1px',
                            'max-width': '1200px !important',
                            margin: '0px auto 0 auto'
                        },
                        class: null
                    },
                    img: {
                        cols: 2,
                        sm: 1,
                        colStyle: {
                            padding: '12px 0 12px 0',
                            margin: '0px',
                            'max-height': '140px !important'
                        },
                        imgStyle: {
                            height: '100px',
                            width: 'auto'
                        },
                    },
                    name: {
                        cols: 9,
                        sm: 4,
                        md: 3,
                        alignSelf: 'center',
                        colStyle: {

                        },
                        title: {
                            style: {
                                'font-size': '14px',
                                padding: '0px !important',
                                margin: '0px !important',
                                'font-weight': 'bold'
                            },
                            class: null
                        },
                        price: {
                            cols: 2,
                            colAlign: 'right',
                            totalStyle: {
                                'font-family': "'Montserrat', sans-serif !important",
                                'font-size': '16px !important',
                                'font-weight': 'bold',
                                padding: '0px !important',
                                margin: '0px !important'
                            },
                            totalClass: {

                            },
                            eachStyle: {
                                'font-size': '12px !important',
                                padding: '0px !important',
                                margin: '0px !important'
                            },
                            eachClass: {

                            }
                        },
                        removeButton: {
                            style: {
                                'text-decoration': 'underline',
                                'font-size': '12px'
                            }
                        }
                    },
                    info: {
                        alignSelf: 'center',
                        cols: 6,
                        sm: 4,
                        md: 4,
                        color: {
                            cols: 12,
                            md: 6,
                            alignSelf: 'center',
                            style: {
                                'font-size': '14px',
                                padding: '0px !important',
                                margin: '0px !important'
                            },
                            class: null

                        },
                        size: {
                            cols: 12,
                            md: 6,
                            alignSelf: 'center',
                            style: {
                                'font-family': '"Montserrat", sans-serif !important',
                                'font-size': '14px',
                                padding: '0px !important',
                                margin: '0px !important'
                            },
                            sizeClass: null
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
                        colAlign: 'right',
                        totalStyle: {
                            'font-family': "'Montserrat', sans-serif !important",
                            'font-size': '16px !important',
                            'font-weight': 'bold',
                            padding: '0px !important',
                            margin: '0px !important'
                        },
                        totalClass: {

                        },
                        eachStyle: {
                            'font-size': '12px !important',
                            padding: '0px !important',
                            margin: '0px !important'
                        },
                        eachClass: {

                        }
                    },
                    removeButton: {
                        style: {
                            'text-decoration': 'underline',
                            'font-size': '12px'
                        }
                    }
                },
                resume: {
                    row: {
                        style: {
                            margin: '35px 0 20px 0',
                            border: 'solid 1px rgba(128, 128, 128, 0.348)'
                        }
                    },
                    freight: {
                        col: {
                            cols: 12,
                            sm: 7,
                            align: 'left',
                            style: {

                                color: 'grey',
                                'font-weight': 'bold',
                                'font-size': '22px',
                                'border-right': '1px solid lightgrey',
                                height: 'auto',

                            },
                        },
                        title: {
                            class: null,
                            style: {

                            }
                        },
                        input: {
                            cols: '12',
                            sm: '12',

                            color: inputColor,
                        },
                        checkCepLink: {
                            text: 'Não sei o meu CEP',

                            style: {
                                color: 'black',
                                'font-size': '12px',
                                margin: '0px !important'
                            }
                        },
                        radioGroup: {
                            alignSelf: 'center',
                            cols: '12',
                            sm: '7',

                            color: inputColor,
                            class: 'mt-2',
                            style: {
                                'font-size': '12px !important'
                            }
                        },
                        otherCepLink: {
                            text: 'Calcular com outro CEP',

                            style: {
                                color: 'black',
                                'font-size': '12px !important',
                                margin: '0px !important',
                                'text-decoration': 'underline'
                            }
                        }
                    },
                    info: {
                        col: {
                            cols: 12,
                            sm: 5,
                            align: 'right',
                            style: {
                            }
                        },
                        resume: {
                            style: {
                                color: 'grey',
                                'font-weight': 'bold',
                                'font-size': '22px'
                            },
                            class: null
                        },
                        subtotal: {
                            style: {
                                // color: 'grey',
                                margin: '0px !important'
                            },
                            class: null
                        },
                        freight: {
                            style: {
                                // color: 'grey',
                                // margin: '0px !important'
                            },
                            class: null
                        },
                        total: {
                            style: {
                                color: 'black',
                                'font-size': '22px',
                                margin: '5px 0 0 0',
                                'font-weight': 'bold'
                            },
                            class: null
                        },
                        installments: {
                            show: true,
                            installments: 4,
                            style: {
                                margin: '0px',
                                color: 'grey',
                                'font-weight': 'bold',
                                'font-size': '12px'
                            }

                        }
                    }
                },

                btnBottom: {
                    show: true,
                    style: {
                        'background-color': confirmColor,
                        color: 'white',
                        width: '250px',
                        height: '45px'
                    }
                },

                noItemIcon: {
                    style: {
                        'font-size': '64px',
                        color: 'black'
                    },
                    class: 'mdi mdi-cart-remove',
                },
                emptyText: {
                    text: 'Seu carrinho está vazio!!',
                    style: {
                        color: 'black'
                    }
                },
                emptyButton: {
                    text: 'Voltar às compras',
                    style: {
                        'background-color': cancelColor,
                        color: 'white'
                    }
                }
            }
        },
        login: {
            outterRowAlign: 'center',
            loginCol: {
                align: 'center',
                cols: '11',
                sm: '6',

                style: {
                    'max-width': '500px'
                }

            },
            title: {
                class: 'text-start mt-5 mb-3',
                text: 'Iniciar Sessão',
            },
            email: {
                class: 'default-size',
                color: inputColor,
                label: 'Email'
            },
            password: {
                class: 'default-size',
                color: inputColor,
                label: 'Password'
            },
            forgotPassword: {
                style: {
                    top: '-19px',
                    right: '11px',
                    position: 'absolute',
                    'font-size': '13px',
                    'color': 'blue',
                },
                class: 'text-right',
                text: 'Esqueci minha Senha',
            },
            loginBtn: {
                style: {
                    width: '100%',
                    'background-color': mainColor,
                    color: secondaryColor
                },
                class: 'btn-go default-size acess-btn mt-5',
            },
            registerLink: {
                style: {
                    'font-size': '1rem'
                },
                class: 'mt-3',

                quote: 'Não tem uma conta?',
                text: 'Cadastrar'
            },
            error: {
                text: '',
                style: {
                    'margin-top': '-20px',
                },
            }
        },
        register: {
            justify: 'center',

            cols: 11,
            sm: 8,
            xl: 4,

            title: {
                color: mainColor,
                class: 'white--text',

                text: 'Criar Conta',
            },

            company: {
                show: true,

                color: inputColor,
                label: 'Empresa',

                isCompany: false
            },
            name: {
                show: true,

                color: inputColor,
                label: 'Nome Completo'
            },
            fantasyName: {
                show: true,

                color: inputColor,
                label: 'Nome Fantasia'
            },
            companyName: {
                show: true,

                color: inputColor,
                label: 'Razão Social'
            },
            phone: {
                show: true,

                color: inputColor,
                label: 'Telefone'
            },
            cpf: {
                show: true,

                color: inputColor,
                label: 'CPF'
            },
            cnpj: {
                show: true,

                color: inputColor,
                label: 'CNPJ'
            },
            birthday: {
                show: true,

                color: inputColor,
                label: 'Data de Nascimento *',
            },
            gender: {
                show: true,

                color: inputColor,
                label: 'Sexo *',
            },
            email: {
                show: true,

                color: inputColor,
                label: 'Email'
            },
            password: {
                show: true,

                color: inputColor,
                label: 'Senha'
            },
            passwordConfirmation: {
                show: true,

                color: inputColor,
                label: 'Confirmar Senha'
            },

            finishBtn: {
                cols: 12,
                sm: 6,

                style: {
                    'background-color': mainColor,
                    color: secondaryColor
                },
                class: 'btn-go default-size acess-btn mt-5',

                text: 'Criar Conta',
                icon: 'mdi-check'
            },

            error: {
                text: '',
                style: {
                },
            }
        },
        account: {
            cols: 9,

            tabs: {
                cols: 2,

                mobile: {
                    slider: {
                        color: mainColor,
                        size: 10
                    },

                    activeStyle: {
                        'background-color': secondaryColor,
                        color: mainColor,
                        height: '40px !important'
                    },
                    regularStyle: {
                        'background-color': 'white !important',
                        color: secondaryColor,
                        height: '40px !important'
                    }
                },

                slider: {
                    color: mainColor,
                    size: 10
                },

                activeStyle: {
                    'background-color': secondaryColor,
                    color: mainColor,
                },
                regularStyle: {
                    'background-color': 'white !important',
                    color: secondaryColor,
                }
            },
            content: {
                cols: 10,
            },
            people: {
                title: {
                    color: secondaryColor,
                    elevation: 0,

                    style: {
                        color: mainColor
                    },
                    class: '',

                    text: 'Dados da Conta',
                },


                email: {
                    cols: 12,
                    sm: 12,
                    alignSelf: 'center',

                    disabled: true,

                    label: 'Email *',
                    color: inputColor,
                    style: {
                        color: 'grey'
                    },
                    class: ''
                },
                companySwitch: {
                    cols: 12,
                    sm: 12,

                    disabled: true,

                    label: 'Empresa',
                    color: inputColor,
                    style: {
                        margin: '0 !important'
                    },
                    class: ''
                },
                name: {
                    cols: 12,
                    sm: 4,
                    alignSelf: 'center',

                    disabled: false,

                    label: 'Nome Completo *',
                    color: inputColor,
                    style: {
                        color: 'grey'
                    },
                    class: '',

                    errorMessage: ''
                },
                companyName: {
                    cols: 12,
                    sm: 4,
                    alignSelf: 'center',

                    disabled: false,

                    label: 'Razão Social *',
                    color: inputColor,
                    style: {
                        color: 'grey'
                    },
                    class: '',

                    errorMessage: ''
                },
                birthday: {
                    cols: 12,
                    sm: 4,
                    alignSelf: 'center',

                    disabled: false,

                    label: 'Nascimento',
                    color: inputColor,
                    style: {
                        color: 'grey'
                    },
                    class: '',

                    errorMessage: ''
                },
                phone: {
                    cols: 12,
                    sm: 4,
                    alignSelf: 'center',

                    disabled: false,

                    label: 'Telefone (c/ DDD) *',
                    color: inputColor,
                    style: {
                        color: 'grey'
                    },
                    class: '',

                    errorMessage: ''
                },
                cpfCnpj: {
                    cols: 12,
                    sm: 4,
                    alignSelf: 'center',

                    disabled: false,

                    label: 'CPF/CNPJ *',
                    color: inputColor,
                    style: {
                        color: 'grey'
                    },
                    class: '',

                    errorMessage: ''
                },
                gender: {
                    cols: 12,
                    sm: 3,
                    alignSelf: 'center',

                    disabled: false,

                    label: 'Sexo *',
                    color: inputColor,
                    style: {
                    },
                    class: '',

                    errorMessage: ''
                },

                error: {
                    style: {

                    }
                }
            },
            addresses: {
                title: {
                    color: secondaryColor,
                    elevation: 0,

                    style: {
                        color: mainColor
                    },
                    class: '',

                    text: 'Endereços',
                },

                input: {
                    color: inputColor
                },

                cep: {
                    cols: 12,
                    sm: 12,
                    alignSelf: '',

                    label: 'Cep',
                    style: {
                        'max-width': '200px'
                    },
                    class: '',

                    errorMessage: ''
                },
                street: {
                    cols: 9,
                    sm: 9,
                    alignSelf: '',

                    label: 'Rua',
                    style: {
                    },
                    class: '',

                    errorMessage: ''
                },
                houseNumber: {
                    cols: 3,
                    sm: 3,
                    alignSelf: '',

                    label: 'Nº',
                    style: {
                    },
                    class: '',

                    errorMessage: ''
                },
                neighborhood: {
                    cols: 12,
                    sm: 9,
                    alignSelf: '',

                    label: 'Bairro',
                    style: {
                    },
                    class: '',

                    errorMessage: ''
                },
                city: {
                    cols: 9,
                    sm: 9,
                    alignSelf: '',

                    label: 'Cidade',
                    style: {
                    },
                    class: '',

                    errorMessage: ''
                },
                estate: {
                    cols: 3,
                    sm: 3,
                    alignSelf: '',

                    label: 'UF',
                    style: {
                    },
                    class: '',

                    errorMessage: ''
                },
                complement: {
                    cols: 12,
                    sm: 12,
                    alignSelf: '',

                    label: 'Complemento',
                    style: {
                    },
                    class: '',

                    errorMessage: ''
                },
                observation: {
                    cols: 12,
                    sm: 12,
                    alignSelf: '',

                    label: 'Observação',
                    style: {
                    },
                    class: '',

                    errorMessage: ''
                },
                saveBtn: {
                    style: {
                        float: 'center',
                        'background-color': confirmColor,
                        color: 'white'
                    },
                    class: 'ml-1 btn-go',

                    text: 'Salvar'
                },

                error: {
                    text: '',
                    style: {

                    }
                },

                divider: {
                    style: {
                        'background-color': 'darkgrey'
                    }
                },

                addBtn: {
                    icon: 'mdi-plus',
                    text: 'adicionar Endereço',
                    style: {
                        'background-color': confirmColor,
                        color: 'white'
                    }
                }
            },
            orders: {
                title: {
                    color: secondaryColor,
                    elevation: 0,

                    style: {
                        color: mainColor
                    },
                    class: '',

                    text: 'Histórico de Pedidos',
                },
                detailsBtn: {
                    color: mainColor,
                    style: {
                        color: secondaryColor
                    },
                    class: ''
                },
                backToBuys: {
                    color: cancelColor,
                    style: {
                        color: 'white'
                    },
                    class: ''
                }
            }
        },
        orderDetails: {
            stepper: {
                payBtn: {
                    style: {
                        'background-color': confirmColor,
                        color: 'white'

                    },
                    class: 'mt-3 mb-5'
                },
                step: {
                    color: mainColor,
                }
            },
            deliveryDetails: {
                delivery: {
                    cols: 12,
                    md: 9,

                    style: {

                    },
                    class: '',

                    title: {
                        style: {
                            background: mainColor,
                            color: 'white',
                        },
                        class: '',
                    },
                },
                pricing: {
                    cols: 12,
                    md: 3,

                    style: {

                    },
                    class: '',

                    title: {
                        style: {
                            background: mainColor,
                            color: 'white',
                        },
                        class: '',
                    },
                }
            },
            productDetails: {
                header: {
                    style: {
                        background: mainColor,
                        color: 'white',
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
                    }
                },
                item: {
                    style: {
                        margin: '0',
                        border: 'solid rgba(0, 0, 0, 0.075) 0.1px',
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
                        sm: 3
                    },
                    totalPrice: {
                        cols: 5,
                        sm: 3
                    },
                },
                footer: {
                    style: {
                        background: mainColor,
                        'text-transform': 'uppercase'
                    },

                    product: {
                        cols: 7,
                        sm: 9,
                    },
                    totalPrice: {
                        cols: 5,
                        sm: 3,
                    }
                }
            }
        },
        payment: {
            closeOrderModal: {
                input: {
                    color: inputColor
                },
                addressBtn: {
                    style: {
                    }
                },
                buyBtn: {
                    style: {
                        'background-color': confirmColor,
                        color: 'white'
                    }
                }
            },
            creditCard: {
                front: {
                    style: {
                        'text-shadow': 'black 1px 2px 5px',
                        'box-shadow': '0px 0px 12px 0px grey',
                        'border-radius': '15px',
                        'background-color': secondaryColor
                    }
                },
                back: {
                    style: {
                        'text-shadow': 'black 1px 2px 5px',
                        'box-shadow': '0px 0px 12px 0px grey',
                        'border-radius': '15px',
                        'background-color': secondaryColor
                    }
                },
                disabled: {
                    front: {
                        style: {
                            'text-shadow': 'black 1px 2px 5px',
                            'box-shadow': '0px 0px 12px 0px grey',
                            'border-radius': '15px',
                            'background-color': 'lightgrey'
                        }
                    },
                    back: {
                        style: {
                            'text-shadow': 'black 1px 2px 5px',
                            'box-shadow': '0px 0px 12px 0px grey',
                            'border-radius': '15px',
                            'background-color': 'lightgrey'
                        }
                    }
                }
            },
            input: {
                color: mainColor
            },
            payBtn: {
                style: {
                    width: '100%',
                    'background-color': confirmColor,
                    color: 'white'
                },
                class: 'mr-5 mb-5'
            },
            backToBuys: {
                style: {
                    'background-color': cancelColor,
                    color: 'white'
                },
                class: 'mt-5'
            }
        },
        footer: {
            mainStyle: {
                'margin-top': '30px',
                position: 'inherit',
                'min-height': '300px',
                background: secondaryColor,
                'box-shadow': '0 0 2px 1px black !important',
                'border-top': '4px solid',
                'border-bottom': '4px solid',
                'border-image': `linear-gradient(90deg, ${secondaryColor} 0%, ${mainColor} 30%, ${mainColor} 70%, ${secondaryColor} 100%) 1 !important`
            },
            titleStyle: {
                'font-size': '18px',
                color: mainColor
            },
            list: {
                align: 'center',
            },
            institucional: {
                textColor: 'black',
                iconColor: '#777278',
            },
            institucionalList: [
                {
                    name: 'Troca e Devolução', route: '/troca-e-devolucao', style: {
                        'text-decoration': 'none !important',
                        color: mainColor,
                        'font-size': '13px'
                    }
                },
                {
                    name: 'Formas de Pagamento', route: '/formas-de-pagamento', style: {
                        'text-decoration': 'none !important',
                        color: mainColor,
                        'font-size': '13px'
                    }
                },
                {
                    name: 'Entrega e Frete', route: '/entrega-e-frete', style: {
                        'text-decoration': 'none !important',
                        color: mainColor,
                        'font-size': '13px'
                    }
                },
                {
                    name: 'Atendimento', route: '/atendimento', style: {
                        'text-decoration': 'none !important',
                        color: mainColor,
                        'font-size': '13px'
                    }
                }
            ],
            contact: {
                textColor: 'black',
                iconColor: '#777278',
            },
            contactList: [
                // {
                //     name: merchantInfo.phone,
                //     style: {
                //         color: mainColor,
                //         'font-size': '13px'
                //     },
                //     icon: 'mdi mdi-phone',

                //     iconStyle: {
                //         color: mainColor
                //     }
                // },
                {
                    name: merchantInfo.whatsappNumber,
                    route: merchantInfo.whatsappLink,
                    style: {
                        color: mainColor,
                        'font-size': '13px'
                    },
                    icon: 'mdi mdi-whatsapp',

                    iconStyle: {
                        color: mainColor
                    }
                },
                {
                    name: merchantInfo.address,
                    style: {
                        color: mainColor,
                        'font-size': '13px'
                    },
                    icon: 'mdi mdi-map-legend',
                    iconStyle: {
                        color: mainColor
                    }
                },
                {
                    name: merchantInfo.email,
                    style: {
                        color: mainColor,
                        'font-size': '13px'
                    },
                    icon: 'mdi mdi-email-outline',
                    iconStyle: {
                        color: mainColor
                    }
                },
            ],
            quickAccess: {
                textColor: 'black',
                iconColor: '#777278',
            },
            quickAccessList: [
                {
                    name: 'Home',
                    route: '/',
                    style: {
                        color: mainColor,
                        'font-size': '13px'
                    }
                },
                {
                    name: 'Sobre Nós',
                    route: '/sobre-nos',
                    style: {
                        color: mainColor,
                        'font-size': '13px'
                    }
                },
                {
                    name: 'Política de Privacidade',
                    route: '/politica-de-privacidade',
                    style: {
                        color: mainColor,
                        'font-size': '13px'
                    }
                },
                {
                    name: 'Minha Conta',
                    route: '/login',
                    style: {
                        color: mainColor,
                        'font-size': '13px'
                    }
                },
            ],
            logoSession: {
                style: {
                    color: mainColor
                },
                align: 'center',
                logoSrc: logo,
                logoSafe: safeLogo,
                logoStyle: {
                    width: '80%',
                    height: 'auto'
                },
                midiaLinks: [
                    {
                        icon: 'mdi mdi-instagram',
                        iconStyle: {
                            color: mainColor,
                            'font-size': '32px'
                        },
                        href: merchantInfo.instagram
                    },
                    {
                        icon: 'mdi mdi-facebook',
                        iconStyle: {
                            color: mainColor,
                            'font-size': '32px'
                        },
                        href: merchantInfo.facebook
                    },
                ]
            },
            paymentSession: {
                align: 'center',
                style: {
                    color: mainColor,
                },

                cards: [
                    {
                        class: '',
                        style: '',
                        src: '/cardsBuySession/card-master.png'
                    },
                    {
                        class: '',
                        style: '',
                        src: '/cardsBuySession/visa.png'
                    },
                    {
                        class: '',
                        style: '',
                        src: '/cardsBuySession/amex.png'
                    },
                    {
                        class: '',
                        style: 'width: 53px !important',
                        src: '/cardsBuySession/hipercard.png'
                    },
                    {
                        class: '',
                        style: 'width: 53px !important',
                        src: '/cardsBuySession/elo-white.png'
                    },
                    {
                        class: '',
                        style: 'width: 53px !important',
                        src: '/cardsBuySession/img-boleto.png'
                    },
                    {
                        class: '',
                        style: 'width: 53px !important',
                        src: '/cardsBuySession/pix.png'
                    }
                ]
            },
            copyrightSession: {
                copyright: merchantInfo.copyright
            }
        },
        floatingIcon: {

            icon: '/whatsapp.svg',
            link: merchantInfo.whatsappLink,

            style: {
                position: 'fixed',
                right: '20px',
                bottom: '20px',
                width: '50px',
                height: '50px',
                'z-index': 99
            }
        },
        dialog: {
            exitDialog: {
                width: 300,
                align: 'center',

                style: {
                    padding: "10px"
                },

                cancelBtn: {
                    width: '100',
                    color: cancelColor,
                    style: {
                        color: 'white'
                    }
                },
                okBtn: {
                    width: '100',
                    color: confirmColor,
                    style: {
                        color: 'white'
                    }
                }
            }
        }
    }
})