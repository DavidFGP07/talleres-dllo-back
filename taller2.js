function findMax(numeros){
  let max = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > max) {
      max = numeros[i];
    }
  }
  return max;
}

const lista = [3, 10, 7, 25, 1];
console.log(findMax(lista));

function includes(lista, numero){
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === numero) {
      return true; 
    }
  }
  return false; 
}
console.log(includes(lista, 9));


function sum(lista){
      let total = 0; 
  for (let i = 0; i < lista.length; i++) {
    total += lista[i];
  }
  return total; 
}
console.log(sum(lista));


function missingNumbers(lista){
  if (lista.length <= 1) {
    return [];
  }
  let min = lista[0];
  let max = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] < min) {
      min = lista[i];
    }
    if (lista[i] > max) {
      max = lista[i];
    }
  }
  let faltantes = [];
  for (let num = min; num <= max; num++) {
    let encontrado = false;
    for (let j = 0; j < lista.length; j++) {
      if (lista[j] === num) {
        encontrado = true;
        break;
      }
    }
    if (!encontrado) {
      faltantes.push(num);
    }
  }

  return faltantes;
}
console.log(missingNumbers(lista)); 
