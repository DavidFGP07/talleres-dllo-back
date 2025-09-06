
function desglosarString(texto, tipo) {
  const str = texto.toLowerCase();
  const vocales = "aeiou";

  let contador = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (/[a-z]/.test(char)) { // Solo contar letras
      if (tipo === "vocales" && vocales.includes(char)) {
        contador++;
      } else if (tipo === "consonantes" && !vocales.includes(char)) {
        contador++;
      }
    }
  }

  return contador;
}
console.log(desglosarString("murcielagos", "vocales"));     
console.log(desglosarString("murcielagos", "consonantes")); 


function twoSum(nums, target) {
  const mapa = new Map(); 

  for (let i = 0; i < nums.length; i++) {
    const complemento = target - nums[i];
    if (mapa.has(complemento)) {
      return [mapa.get(complemento), i];
    }


    mapa.set(nums[i], i);
  }


  return [];
}


console.log(twoSum([2, 7, 11, 15], 9));  
console.log(twoSum([3, 4, 2], 6));      


function conversionRomana(romano) {
  const valores = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let total = 0;

  for (let i = 0; i < romano.length; i++) {
    const actual = valores[romano[i]];
    const siguiente = valores[romano[i + 1]];

    
    if (siguiente && actual < siguiente) {
      total -= actual;
    } else {
      total += actual;
    }
  }

  return total;
}


console.log(conversionRomana("III"));      
console.log(conversionRomana("XIV"));      
console.log(conversionRomana("MMXXIV"));   
console.log(conversionRomana("MCMXCVII")); 


function descomposicion(entrada) {

  const palabras = entrada.split(",");
  const objetivo = palabras[0]; 
  const diccionario = palabras.slice(1); 

  for (let i = 0; i < diccionario.length; i++) {
    for (let j = 0; j < diccionario.length; j++) {
      if (i !== j) { 
        const combinacion = diccionario[i] + diccionario[j];
        if (combinacion === objetivo) {
          return [diccionario[i], diccionario[j]];
        }
      }
    }
  }

  return [];
}

console.log(descomposicion("malhumor,al,hum,humor,m,mal,malhu"));
