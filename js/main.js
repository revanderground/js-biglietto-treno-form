const generatorButton = document.querySelector('#generator-button');

generatorButton.addEventListener('click', function(){
    console.log(document.getElementById('input-name').value);
    console.log(document.getElementById('input-distance').value);
    console.log(document.getElementById('input-age-rank').value);
    const userDistance = document.getElementById('input-distance').value;
    const userAge = document.getElementById('input-age-rank').value;
    const userName = document.getElementById('input-name').value;
    document.querySelector('#output-nome').innerHTML= userName;
    
    let price = (userDistance * 0.26);

    if (userAge == "minor"){
        // Calcolo con lo sconto del 15% per minorenni
        price = price - ((price * 15) / 100);
        price=(Math.round(price * 100)/100).toFixed(2);
        console.log(`Il prezzo del biglietto scontato del 15% è ${price}€`);
        document.querySelector('#output-offerta').innerHTML= ("Biglietto scontato 15%");
        document.querySelector('#output-costo').innerHTML= (price + "€" );
        document.querySelector('#output-carrozza').innerHTML= Math.floor(Math.random() * 10) + 1;
        document.querySelector('#output-codice').innerHTML= Math.floor(Math.random() * 99999) + 1;
        // Calcolo con lo sconto del 35% per over65
    } else if (userAge == "senior") {
        price= price - ((price * 35) / 100);
        price=(Math.round(price * 100)/100).toFixed(2);
        console.log(`Il prezzo del biglietto scontato del 35% è ${price}€`);
        document.querySelector('#output-offerta').innerHTML= ("Biglietto scontato 35%");
        document.querySelector('#output-costo').innerHTML= (price + "€" );
        document.querySelector('#output-carrozza').innerHTML= Math.floor(Math.random() * 10) + 1;
        document.querySelector('#output-codice').innerHTML= Math.floor(Math.random() * 99999) + 1;
        // Prezzo standard
    } else {
        price=(Math.round(price * 100)/100).toFixed(2);
        console.log(`Il prezzo del biglietto standard è ${price}€`);
        document.querySelector('#output-offerta').innerHTML= ("Biglietto standard");
        document.querySelector('#output-costo').innerHTML= (price + "€" );
        document.querySelector('#output-carrozza').innerHTML= Math.floor(Math.random() * 10) + 1;
        document.querySelector('#output-codice').innerHTML= Math.floor(Math.random() * 99999) + 1;
    }

});
    

           

