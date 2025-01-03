export default {
  selectedInstallment: null,
  brands: [
    { name: "Visa", value: 'Visa' },
    { name: "MasterCard", value: 'Master' },
    { name: "American Express", value: 'Amex' },
    { name: "Elo", value: 'Elo' },
    // { name: "Dinners", value: 'Dinners' },
    // { name: "JCB", value: 'JCB' },
    // { name: "Discover", value: 'Discover' },
    // { name: "Hipercard", value: 'Hipercard' },
    // { name: "Hiper", value: 'Hiper' },
  ],
  months: [ // To Validate Until
    { value: '01' },
    { value: '02' },
    { value: '03' },
    { value: '04' },
    { value: '05' },
    { value: '06' },
    { value: '07' },
    { value: '08' },
    { value: '09' },
    { value: '10' },
    { value: '11' },
    { value: '12' }
  ],
  errors: null,
  buyValue: null,
  paymentDialogState: false,
  paymentSpinner: false,
  statusPaymentResponse: 1,
  sendType: null,
  couponError: null,
  discountCoupon: null,
  paymentInformation: null,
  paymentMethod: 'card',
  pixQrCode: null,

}