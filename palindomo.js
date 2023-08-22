function palindromo(palavra) {
    if(palavra.length < 3) {
        return "?";
    }
    
    const arrayPalavraOriginal = palavra.split('');
    let arrayPalavraInvertida = palavra.split('');
    
    var i = 0;
    while (i < arrayPalavraOriginal.length / 2) {
        //console.log(i)
        let letra = arrayPalavraInvertida[i];
        arrayPalavraInvertida[i] = arrayPalavraInvertida[arrayPalavraInvertida.length - 1 - i];
        arrayPalavraInvertida[arrayPalavraInvertida.length - 1 - i] = letra;
        
        i += 1;
        //console.log(arrayPalavraInvertida.toString());
    }
    
    return arrayPalavraOriginal.toString() === arrayPalavraInvertida.toString() ? "S" : "N";
}

console.log(palindromo(""));
console.log(palindromo("anilina"));
console.log(palindromo("mama"));
console.log(palindromo("mm"));