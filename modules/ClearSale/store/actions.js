// import {
//   baseApiUrl,
//   catchError,
//   storeId,
//   itensPerPage,
// } from "@/Settings/global";
// import axios from "axios";

const generateUUID = function (length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(
      Math.floor(Math.random() * charactersLength)
    );
  }

  return (
    result +
    new Date()
      .toISOString()
      .slice(0, 25)
      .replace(/-/g, "")
      .replace(".", "")
      .replace(":", "")
      .replace(":", "")
  );


}

const startClearSale = function ({ commit }) {
  if ($nuxt.$store.state.Layouts.config.clearSale.active) {
    let sessionId = generateUUID(50);
    (function (a, b, c, d, e, f, g) {
      a['CsdpObject'] = e; a[e] = a[e] || function () {
        (a[e].q = a[e].q || []).push(arguments)
      }, a[e].l = 1 * new Date(); f = b.createElement(c),
        g = b.getElementsByTagName(c)[0]; f.async = 1; f.src = d; g.parentNode.insertBefore(f, g)
    })(window, document, 'script', '//device.clearsale.com.br/p/fp.js', 'csdp');
    csdp('app', $nuxt.$store.state.Layouts.config.clearSale.seu_app);
    csdp('sessionid', sessionId);
    commit('SET_SESSION_ID', sessionId)
    console.log(sessionId)
  }

};



export default {
  startClearSale,
};
