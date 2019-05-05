(function(window, undefined) {
  var dictionary = {
    "f388f912-9227-4b8b-9c6b-0a85fae120e0": "Trips",
    "93352cba-8a9c-4722-beb2-14fa171577bc": "Map Screen",
    "84ff6b9a-63a6-4f59-a57d-f4438e7ce19f": "User Screen",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Splash Screen",
    "548e15b8-cd75-4c08-a336-f83e78b710ee": "Place Info Screen",
    "c143f676-1fa3-4670-bf49-c730254438b5": "Restaurants",
    "d357b443-ebc3-4283-bd97-f96dbb402619": "Food",
    "f3b8b2de-e1b1-4b8d-a0a5-7a14940f6460": "Login Screen",
    "03c10163-d5d2-4cb9-875d-c17100267b30": "Description",
    "d5a70329-e429-4d04-b67a-50114b730bfb": "Cities Screen",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Navigation Drawer and Header",
    "b0184271-929e-4812-8ba2-01c94d778655": "Empty",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);