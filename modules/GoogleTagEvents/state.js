// criar um estado e usar mutation para mutar o estado assim que a action for acionada


// const purchaseInfo = function({commit}, {items}){

//     var formattedItems = items.map(item => ({
//         item_id: item.item_id,
//         item_name: item.item_name,
//         price: item.price,
//         quantity: item.quantity,
//     }));
    
//     console.log('Evento purchaseInfo disparado com os itens:', formattedItems);
// } 

export default {
    purchaseItems: [], 
  };
  
