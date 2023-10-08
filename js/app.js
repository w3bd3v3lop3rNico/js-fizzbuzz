// - Assegnare variabile e recuperare oggetto dal DOM
const buzzfizzDOMElement = document.getElementById("fizzbuzz");
console.log(buzzfizzDOMElement);

// - Dichiarare ciclo da 1 a 100
for (let i = 0; i < 100; i++) {
    
    const n = i + 1;
    
    // let boxString = '<div class="box">' + n + '</div>';
    // console.log(n)

    let boxDOMElement = document.createElement('div')
    boxDOMElement.classList.add('box')
    boxDOMElement.innerHTML = n
    // - Calcolare i multipli di 3 e 5 
    if(n % 3 === 0 && n % 5 === 0) {
        // boxString = '<div class="box">' + "fizzbuzz" + '</div>';
        boxDOMElement.innerHTML = "fizzbuzz"
        console.log("fizzbuzz");


    // - Calcolare i multipli di 5
    } else if(n % 5 === 0) {
        // boxString = '<div class="box">' + "buzz" + '</div>';
        boxDOMElement.innerHTML = "buzz"
        console.log("buzz")

    // - Calcolare i multipli di 3
    } else if((n % 3 === 0)) {
        // boxString = '<div class="box">' + "fizz" + '</div>';
        boxDOMElement.innerHTML = "fizz"
        console.log("fizz")

    } else {
        console.log(n)
        console.dir(boxDOMElement)

    }
// buzzfizzDOMElement.innerHTML += boxString
// buzzfizzDOMElement.append(boxDOMElement)
buzzfizzDOMElement.innerHTML += boxDOMElement.outerHTML
}
