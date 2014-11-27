(function() {
    "use strict";

    var words = [
    "Staattinen tyypitys",
    "Microservices",
    "Haskell",
    "Clojure",
    "Lisp",
    "ES6",
    "Algebraiset tietotyypit",
    "HATEOAS",
    "Sivuvaikutus"
    ],
    template = Handlebars.default.compile(document.getElementById("grid-template").innerHTML),
    gridInstance = {
        words: words.map(function(word) {
            return { selected: false, word: word };
        })
    },
    container = document.getElementById("gridContainer");

  container.innerHTML = template(gridInstance);


})();
