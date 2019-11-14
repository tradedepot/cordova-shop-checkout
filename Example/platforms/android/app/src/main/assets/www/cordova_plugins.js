cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-shop-checkout.ShopCheckout",
      "file": "plugins/cordova-plugin-shop-checkout/www/shopCheckout.js",
      "pluginId": "cordova-plugin-shop-checkout",
      "clobbers": [
        "shopCheckout",
        "cordova.plugins.shopCheckout",
        "plugin.shopCheckout"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-shop-checkout": "0.1.0"
  };
});