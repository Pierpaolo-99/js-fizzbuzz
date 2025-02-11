/* Traccia:
Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. */

/* Steps:
 - imposto variabili globali per i multipli
 - creo il loop per stampare i numeri da 1 a 100
 - imposto le condizioni per "fizz", "buzz" e "FizzBuzz" */

let multiple_three = 0
let multiple_five = 0
let multiple_three_five = 0

for (let i = 1 ; i < 101; i++){

    if (i % 3 === 0 && i % 5 === 0){
        multiple_three_five++;
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0){
        multiple_three++;
        console.log("Fizz");
    }
    else if (i % 5 === 0){
        multiple_five++;
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}





