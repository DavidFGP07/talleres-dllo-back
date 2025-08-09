
function convertidorTemp(temp){
    let f = temp * (9/5) + 32
    return f
}
let Celsius = -40
console.log(convertidorTemp(Celsius))

let a = 1
let b = 5
let c = 4
function resolvedor(a, b, c, op ){
    if (op === 1){
        return (-b+((b*b-(4*a*c))**(1/2)))/(2*a)
    }else if(op === 2){
        return (-b-((b*b-(4*a*c))**(1/2)))/(2*a)
    }
}

function mejorParidad (number) {
    if ((number/2) === 0  ){
        return "Es par"
    }else{
        return "No es"
    }
}
let n=2
console.log(mejorParidad(n))

function peorparidad (number){
    if (number === 1){
        console.log("No es par")
    }else if(number == 2){
        console.log("Es par")
    }else if(number == 3){
        console.log("No es par")
    }else if(number == 4){
        console.log("Es par")
    }else if(number == 5){
        console.log("No es par")
    }else if(number == 6){
        console.log("Es par")
    }else if(number == 7){
        console.log("No es par")
    }else if(number == 8){
        console.log("Es par")
    }else if(number == 9){
        console.log("No es par")
    }else if(number == 10){
        console.log("Es par")
    }

}
console.log(peorparidad(n))
