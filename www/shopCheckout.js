var shopCheckout = {
    registerAgent: function(options, success, error) {
        cordova.exec(success, error, 'shopCheckout', 'registerAgent', [options]);
    },

    openCart: function(options, success, error) {
        cordova.exec(success, error, 'shopCheckout', 'openCart', []);
    },

    openTransactions: function(success, error) {
        cordova.exec(success, error, 'shopCheckout', 'openTransactions', []);
    },

}

module.exports = shopCheckout;