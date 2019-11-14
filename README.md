
# shopCheckout for Cordova

This is a plugin that allows your Cordova or PhoneGap app to use [Shop-checkout for cordova](https://github.com/intercom/intercom-android).

* shopCheckout for Android supports API 15 and above.

## Installation

### Cordova

To install the plugin in your Cordova app, run the following:
```script
cordova plugin add cordova-plugin-shop-checkout 
```

## Example App

An example app is provided [here](https://github.com/rayjadore/cordova-shopCheckout/tree/master/Example) that shows a basic Cordova app integration with shopCheckout.

## Setup and Configuration

* Our [installation guide](https://developer.shoptopup.com/docs//cordova-phonegap-installation) contains full setup and initialisation instructions.
* in config.xml file add your api-key  ```<preference name="shopCheckout-android-api-key" value="API_KEY" /> ``` 
* setup androidx for your project by implementing androidx on dependencies in                            ```platforms/android/app/build.gradle``` implementation "androidx.core:core:1.0.0"
* implement Androidx on platforms/android/gradle.properties  
     ```android.useAndroidX=true
       android.enableJetifier=true ````
*  set the default minimum SDK to version 21 in build.gradle located in                                   ```platforms/android``` defaultMinSdkVersion=21
*   on config.xml input your api-key  ```<preference name="shopCheckout-android-api-key" value="YOUR_ANDROID_API_KEY" />```


## Usage 

* on www/index.html ``` <div class="app">
            <h1>Agent Checkout</h1>
            <p><button id="register-btn">Register</button></p>
            <p><button id="open-transaction-btn">Open Transaction</button></p>
            <p><button id="open-products-btn">Open Products</button></p>
            <p><button id="init-btn">Is initialized</button></p>
            <p><button id="logout-btn">Logout</button></p>
        </div> ```

* on www/js/index.js ```  document.getElementById("register-btn").addEventListener("click", function(){
         
          shopCheckout.registerAgent({
                // predefined user attributes
            agentId: 'MyAgentId2',
            firstName: 'mike',
            lastName: 'cchukwudi',
            phoneNumber: '08054807406',
            countryCode: 'NG',
            company: 'Chibuzor Enterprises',
            address: 'plot 259, etim iyang crescent, Victoria Island Lagos',

          });
        }, false);

        document.getElementById("logout-btn").addEventListener("click", function(){
          console.log('logout ---')
          shopCheckout.logout();
      }, false);

      document.getElementById("open-transaction-btn").addEventListener("click", function(){
        shopCheckout.openTransactions();
      }, false);

      document.getElementById("open-products-btn").addEventListener("click", function(){
        shopCheckout.openProducts();
      }, false);
    
      document.getElementById(" init-btn").addEventListener("click", function(){
        shopCheckout.isInitialized();
      }, false); ```


## License

shopCheckout-cordova is released under the [MIT License](http://www.opensource.org/licenses/MIT).
