// Função que captura dados ao adicionar um produto no carrinho
const AddToCart = function ({ commit }, SendAddToCart) {
  if ($nuxt.$gtm) { // Envia para o Google Tag Manager
      $nuxt.$gtm.push({
          event: 'add_to_cart',
          event_category: 'add_to_cart',
          event_label: 'Clique no botão de comprar',
          value: `${SendAddToCart.price}`,
          currency: `BRL`,
          items: [
              {
                  item_id: `${SendAddToCart.item_id}`,
                  item_name: `${SendAddToCart.item_name}`,
                  price: `${SendAddToCart.price}`,
                  discount: `${SendAddToCart.discountValue}`,
                  path: `${SendAddToCart.Rota}`,
              }
          ]
      });
  } else {
      console.error('Google Tag Manager is not initialized');
  }
};

// Função que captura dados ao usuário entrar na página de um produto
const view_item = function ({ commit }, SendViewPage) {
  if ($nuxt.$gtm) { // Envia para o Google Tag Manager
      $nuxt.$gtm.push({
          event: 'view_item',
          event_category: 'view_item',
          event_label: 'Visita à página de um produto',
          currency: `BRL`,
          value: `${SendViewPage.price}`,
          items: [
              {
                  item_id: `${SendViewPage.item_id}`,
                  item_name: `${SendViewPage.item_name}`,
                  price: `${SendViewPage.price}`,
                  path: `${$nuxt.$route.path}`,
              }
          ]
      });
  } else {
      console.error('Google Tag Manager is not initialized');
  }
};

// Função que captura dados quando o usuário abre o carrinho
const view_cart = function ({ commit }, SendViewCart) {
  if (SendViewCart.items && Array.isArray(SendViewCart.items)) {
      const items = SendViewCart.items.map(item => ({
          item_name: item.item_name,
          item_id: item.item_id,
          total_price: item.total_price,
          discount: item.discount,
          quantity: item.quantity,
      }));

      if ($nuxt.$gtm) { // Envia para o Google Tag Manager
          $nuxt.$gtm.push({
              event: 'view_cart',
              event_category: 'view_cart',
              event_label: 'Entrou no Carrinho De Compras',
              currency: `BRL`,
              value: `${SendViewCart.value}`,
              items: items,
          });
      } else {
          console.error('Google Tag Manager is not initialized');
      }
  } else {
      console.error('SendViewCart.items is undefined or not an array');
  }
};

// Função que captura dados quando o usuário entra na página de pagamento
const begin_checkout = function ({ commit }, { items }) {
  const formattedItems = items.map(item => ({
      item_id: item.item_id,
      item_name: item.item_name,
      price: item.price,
      quantity: item.quantity,
  }));

  if ($nuxt.$gtm) { // Envia para o Google Tag Manager
      $nuxt.$gtm.push({
          event: 'begin_checkout',
          event_category: 'begin_checkout',
          event_label: 'Entrou para finalizar a compra',
          currency: `BRL`,
          items: formattedItems,
      });
  } else {
      console.error('Google Tag Manager is not initialized');
  }
};

// Função que captura dados quando o usuário realiza o pagamento da compra
const purchase = function ({ state, rootState }) {
  const datas = state.purchaseItems;
  const formattedItems = datas.map(item => ({
      item_id: item.item_id || `${rootState.route.params.buyId}`,
      item_name: item.item_name,
      price: item.price || item.total_price,
      quantity: item.quantity || item.amount,
      Rota: item.Rota || rootState.route.path,
      discount: item.discount || item.discount_value || 0,
  }));
  const totalValue = formattedItems.reduce((acc, item) => acc + parseFloat(item.price), 0);

  if ($nuxt.$gtm) { // Envia para o Google Tag Manager
      $nuxt.$gtm.push({
          event: 'purchase',
          event_category: 'purchase',
          event_label: 'Finalizou a compra',
          currency: 'BRL',
          value: totalValue,
          items: formattedItems,
      });
  } else {
      console.error('Google Tag Manager is not initialized');
  }
};

export default {
  AddToCart,
  view_item,
  view_cart,
  begin_checkout,
  purchase,

  storeAndDispatchPurchase({ commit, dispatch, state }, { items }) {
      commit('SET_PURCHASE_ITEMS', items);
      dispatch('purchaseInfo', { items });
    //   console.log('Dados armazenados no state e ação purchaseInfo disparada.');
  },

  purchaseInfo({ commit }, { items }) {
      const formattedItems = items.map(item => ({
          item_id: item.item_id,
          item_name: item.item_name,
          price: item.price,
          quantity: item.quantity,
      }));
      
    //   console.log('Evento TESTE disparado com os itens:', formattedItems);
  },
};
