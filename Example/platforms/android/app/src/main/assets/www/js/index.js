
var app = {
  // Application Constructor
  initialize: function () {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

    document.getElementById("register-btn").addEventListener("click", function () {

      shopCheckout.registerAgent({
        // predefined user attributes
        agentId: 'MyAgentId2',
        firstName: 'mike',
        lastName: 'cchukwudi',
        phoneNumber: '08054807406',
        countryCode: 'NG',
        company: 'Chibuzor Enterprises',
        address: 'plot 259, etim iyang crescent, Victoria Island Lagos',

      }, () => {
        console.log("REGISTRATION SUCCESS")
      }, () => {
        console.log("REGISTRATION FAILED")
      });
    }, false);

    document.getElementById("logout-btn").addEventListener("click", function () {
      console.log('logout ---')
      shopCheckout.logout();
    }, false);

    document.getElementById("open-transaction-btn").addEventListener("click", function () {
      shopCheckout.openTransactions();
    }, false);

    document.getElementById("open-products-btn").addEventListener("click", function () {
      shopCheckout.openProducts();
    }, false);

    document.getElementById(" init-btn").addEventListener("click", function () {
      shopCheckout.isInitialized();
    }, false);
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function () {
    this.receivedEvent('deviceready');
  },

  // Update DOM on a Received Event
  receivedEvent: function (id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');

    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');

    console.log('Received Event: ' + id);
  }
};




app.initialize();