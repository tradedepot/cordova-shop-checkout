var agentCheckout = {
    registerAgent: function(options, success, error) {
        cordova.exec(success, error, 'agentCheckout', 'registerAgent', [options]);
    },

    openCart: function(options, success, error) {
        cordova.exec(success, error, 'agentCheckout', 'openCart', []);
    },

    openTransactions: function(success, error) {
        cordova.exec(success, error, 'agentCheckout', 'openTransactions', []);
    },

}

module.exports = agentCheckout;

