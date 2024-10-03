function inverterString(str) { 
    let stringInvertida = "";
  

    for (let i = str.length - 1; i >= 0; i--) {
      stringInvertida += str[i];
    
    }
  
    return stringInvertida;
  
}

  const stringOriginal = "teste";
  const resultado = inverterString(stringOriginal);

  console.log(`string original: ${stringOriginal}`);
  console.log(`string invertida: ${resultado}`);