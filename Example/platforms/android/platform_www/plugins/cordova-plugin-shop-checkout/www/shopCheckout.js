cordova.define("cordova-plugin-shop-checkout.ShopCheckout", function(require, exports, module) {
var exec = require('cordova/exec');

var shopCheckout = {
    registerAgent: function(options, success, error) {
        exec(success, error, 'ShopCheckout', 'registerAgent', [options]);
    },

    openProducts: function(options, success, error) {
        exec(success, error, 'ShopCheckout', 'openProducts', [options]);
    },

    openTransactions: function(success, error) {
        exec(success, error, 'ShopCheckout', 'openTransactions', []);
    },

    logout: function(success, error) {
        exec(success, error, 'ShopCheckout', 'logout', []);
    },

    isInitialized: function(success, error) {
        exec(success, error, 'ShopCheckout', 'isInitialized', []);
    }

}

module.exports = shopCheckout;
});
