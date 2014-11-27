(function () {
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
            words: shuffleArray(words)
        },
    container = document.getElementById("gridContainer");

    container.innerHTML = template(gridInstance);




    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

})();
