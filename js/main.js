const generatorButton = document.querySelector('#generator-button');

generatorButton.addEventListener('click', function(){
    console.log(document.getElementById('input-name').value);
    console.log(document.getElementById('input-distance').value);
    console.log(document.getElementById('input-age').value);
    const userDistance = document.getElementById('input-distance').value;
    const userAge = document.getElementById('input-age').value;

    let price = (userDistance * 0.26);

    if (userAge < 18){
        // Calcolo con lo sconto del 15% per minorenni
        price = price - ((price * 15) / 100);
        price=(Math.round(price * 100)/100).toFixed(2);
        console.log(`Il prezzo del biglietto scontato del 20% è ${price}`);
        // Calcolo con lo sconto del 40% per over65
    } else if (userAge >= 65) {
        price= price - ((price * 35) / 100);
        price=(Math.round(price * 100)/100).toFixed(2);
        console.log(`Il prezzo del biglietto scontato del 35% è ${price}`);
        // Prezzo standard

    } else {
        price=(Math.round(price * 100)/100).toFixed(2);
        console.log(`Il prezzo del biglietto standard è ${price}`);
    }

});
    

           

