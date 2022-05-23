let filme = [
    {
        "nume": "DON'T LOOK UP",
        "gen" :  "comedie",
        "anAparitie" : "2021",
        "actori" : ["Leonardo DiCaprio","Jennifer Lawrence","Timothee Chalamet"],
        "premiat" : true
    },
    {
        "nume": "TIK TIK BOOM",
        "gen" :  "drama/biografie",
        "anAparitie" : "2021",
        "actori" : ["Andrew Garfield","Vanessa Hudgens","Alexandra Shipp"],
        "premiat" : false
    },
    {
        "nume": "DUNE",
        "gen" :  "SF",
        "anAparitie" : "2021",
        "actori" : ["Timothee Chalamet","Zendaya","Jason Momoa"],
        "premiat" : true
    },
    {
        "nume": "JOKER",
        "gen" :  "drama/thriller",
        "anAparitie" : "2019",
        "actori" : ["Joaquin Phoenix","Robert De Niro","Zazie Beetz"],
        "premiat" : true
    },
    {
        "nume": "AD ASTRA",
        "gen" :  "SF",
        "anAparitie" : "2019",
        "actori" : ["Brad Pitt","Tommy Lee Jones","Ruth Negga"],
        "premiat" : false
    },
    {
        "nume": "1917",
        "gen" :  "razboi",
        "anAparitie" : "2019",
        "actori" : ["George MacKay","Richard Madden","Benedict Cumberbatch"],
        "premiat" : true
    }
    ]

let com1 = document.getElementById("ComunityTextOne");
let com2 = document.getElementById("ComunityTextTwo")

let filmePremiate = filme.filter(function (el){
    return el.premiat == true;
})

filmePremiate.forEach(elem => {
    if (elem.anAparitie == "2019"){
        com1.innerHTML += "<br>" + elem.nume+"<br>Genul filmului: " + elem.gen + "<br>Actorii cei mai cunoscuti sunt:<br>" + elem.actori.join(", ") + "<br>";
    }
    else com2.innerHTML += "<br>" + elem.nume+"<br>Genul filmului: " + elem.gen + "<br>Actorii cei mai cunoscuti sunt:<br>" + elem.actori.join(", ") + "<br>";
})