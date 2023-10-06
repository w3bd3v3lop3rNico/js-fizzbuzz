// - Assegnare variabile e recuperare oggetto dal DOM
const buzzfizzDOMElement = document.getElementById("fizzbuzz")
console.log(buzzfizzDOMElement)

// - Dichiarare ciclo da 1 a 100
for (let i = 0; i < 100; i++) {
    
    const n = i + 1;
    
    
    // console.log(n)
    // - Calcolare i multipli di 3 e 5 
    if(n % 3 === 0 && n % 5 === 0) {
        console.log("fizzbuzz")
    // - Calcolare i multipli di 5
    } else if(n % 5 === 0){
        console.log("buzz")
    // - Calcolare i multipli di 3
    } else if((n % 3 === 0)) {
        console.log("fizz")

    } else {
        console.log(n)

    }

}
