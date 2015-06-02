(function () {
    "use strict";

    var gridSize = 3;
    var wordsFuture = [
        "Staattinen tyypitys",
        "Microservices",
        "Haskell",
        "Clojure",
        "Lisp",
        "ES6",
        "Algebralliset tietotyypit",
        "REST",
        "Eventually consistent",
        "Bus",
        "Messaging",
        "Monadi",
        "Reaktiivinen",
        "Hajautettu",
        "Ei-rikkova",
        "Kompositio",
        "Higher-order function",
        "Kontaineri",
        "FSharp",
        "TypeScript",
        "NPM",
        "Redis",
        "PowerShell",
        "Staattinen metodi",
        "Immutable",
        "DDD"
    ];
    var wordsLastSeasonAndNegative = [
        "Sivuvaikutus",
        "Broker",
        "Vuotava abstraktio",
        "Monoliittinen",
        "SOA",
        "Python",
        "HATEOAS",
        "Synkroninen",
        "NServiceBus",
        "SilverLight",
        "Provideri",
        "Spagetti",
        "Tyypitön",
        "M$",
        "Reflektiopohjainen",
        "Megaframework",
        "Injektori",
        "Jonotus",
        "Udin lähestymistapa",
        "Hotfixi",
        "Käärmeenpesä",
        "Mäppäyskerros"
    ];

	var words = wordsFuture.concat(wordsLastSeasonAndNegative);
	var suffledGood = shuffleArray(wordsFuture);
	var suffledBad = shuffleArray(wordsLastSeasonAndNegative);
	
    function wordGen(words) {
        var shuffled = shuffleArray(words);
        var idx = 0;
        return function() {
            var word = shuffled[idx];
            idx++;
            return word;
                
        }
     }
    
    var good = wordGen(wordsFuture);
    var bad = wordGen(suffledBad);
    console.log(good(), good());
    
    var template = Handlebars.default.compile(document.getElementById("grid-template").innerHTML),
        gridInstance = {
            words: shuffleArray(words).slice(0, gridSize*gridSize),
			nonsense: 
				"Nyt mennään vähän off-topiciksi, mutta järjestelmän pitäisi olla suunniteltu niin, että se on " + good().toLowerCase() + ". \
				Lähtökohtaisesi kannattaa fokusoitua siihen, että tulevaisuudessa kaiken ydin on " + good().toLowerCase()  + ".\
				Nykyisin usein sorrumme siihen, että järjestelmästä tulee aivan liian " + bad().toLowerCase() + ".\
				" + bad() + " on joskus paikallaan, mutta meidän arkkitehtuurissa sitä on käytetty liikaa ja turhaan. \
				Jokainen projekti/tiimi yrittää olla kovin " + good() + ", mutta sitten jälkikäteen todetaan, \
				että koko codebase on jälleen yksi iso " + bad().toLowerCase() + ". \
				Asian pihvi on, että jatkossa meidän on otettava oppia termistä " + good() + ". \
				Olemme unohtaneet sen, sillä kustannuksella, että järjestelmästä tuli " + good().toLowerCase() + " (joka on kyllä tärkeää, mutta ei itse tarkoitus).\
				Pian meillä on miljoonien rivien codebase ja sen on oltava täysin " + good().toLowerCase() + ".\
				Sillä jos jatkamme nykyistä linjaa, lopputuloksena on " + bad().toLowerCase() + ", \
				joka ei laadullisesti ole edes etäisesti " + good().toLowerCase() + ". \
				Arkkitehtuuria on kehitettävä sellaiseen suuntaan, että voimme oikeasti jonain päivänä sanoa meillä olevan " + good().toLowerCase() + "-systeemi. \
				" + bad() + "-arkkitehtuurin on nyt vaihdettava olemaan " + good().toLowerCase() + "-arkkitehtuuri ja tähän on herättävä ajoissa. \
				On itsestään selvää, että mitä enemmän " + good().toLowerCase() + "-kokonaisuuksia pystymme toimittamaan, niin sitä paremmin varmistamme \
				pilvipalvelumme laadun kohti palvelua ylläpidettävämmäksi, testattavammaksi, luotettavammaksi, virhesietoisemmaksi, saatavammaksi ja kestävämmäksi \
				kokonaisuudeksi."
				
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
