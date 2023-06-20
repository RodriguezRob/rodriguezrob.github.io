
const nameGenerator = (firstName, surname) => {
    const firstShogun = ["Loyal", "Master", "Apprentice", "Fellow", "Cunning", "Brave", "Mysterious","Brutish", "Fierce", "Simpful", "Powerful", "Iron", "Bronze", "Golden", "Broken", "Childish", "Stoic", "Mystical","Boarish","Tempered", "Pensive", "Killa", "Foolish"];
    const secondShogun = ["Shogun", "Ronin", "General", "Janitor", "Custodian", "Samurai", "Gambino", "Proctor", "Eagle",  "Snake", "Dragon", "Farmer", "Peasant", "Samurai", "Ranger"];

    moniker = firstShogun[Math.floor(Math.random() * (firstShogun.length - 1))];
    monikerSurname = secondShogun[Math.floor(Math.random() * (secondShogun.length - 1))];

    firstName = moniker;
    surname = monikerSurname;

    return `You will be known as "${moniker} ${monikerSurname}" from this point forward.`;
}

window.onload = function(){
     document.getElementById("generate").onclick=function(){
        document.getElementById("nameGeneration").innerHTML = (`${nameGenerator()}`);
     };
}