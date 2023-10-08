// - Assegnare variabile e recuperare oggetto dal DOM
const buzzfizzDOMElement = document.getElementById("fizzbuzz");
console.log(buzzfizzDOMElement);

// - Dichiarare ciclo da 1 a 100
for (let i = 0; i < 100; i++) {
    
    const n = i + 1;
    
    let boxString = '<div class="box">' + n + '</div>';
    // console.log(n)
    // - Calcolare i multipli di 3 e 5 
    if(n % 3 === 0 && n % 5 === 0) {
        boxString = '<div class="box">' + "fizzbuzz" + '</div>';
        console.log("fizzbuzz");

    // - Calcolare i multipli di 5
    } else if(n % 5 === 0) {
        boxString = '<div class="box">' + "buzz" + '</div>';
        console.log("buzz")

    // - Calcolare i multipli di 3
    } else if((n % 3 === 0)) {
        boxString = '<div class="box">' + "fizz" + '</div>';
        console.log("fizz")

    } else {
        console.log(n)

    }
buzzfizzDOMElement.innerHTML += boxString
}
