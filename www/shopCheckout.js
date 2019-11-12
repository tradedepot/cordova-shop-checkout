var exec = require('cordova/exec');

var shopCheckout = {
    registerAgent: function(options, success, error) {
        exec(success, error, 'shopCheckout', 'registerAgent', [options]);
    },

    openCart: function(options, success, error) {
        exec(success, error, 'shopCheckout', 'openCart', []);
    },

    openTransactions: function(success, error) {
        exec(success, error, 'shopCheckout', 'openTransactions', []);
    },

    logout: function(success, error) {
        exec(success, error, 'shopCheckout', 'logout', []);
    }

}

module.exports = shopCheckout;