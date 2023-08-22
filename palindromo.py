def palindromo(palavra):
    if len(palavra) < 3:
        return '?'
    palavraAsArray = list(palavra);
    palavraInvertidaAsArray = list(palavra);
    palavraInvertidaAsArray.reverse();
    
    if palavraAsArray == palavraInvertidaAsArray:
        return 'S';
    else:
        return 'N';

print(palindromo(""));
print(palindromo("anilina"));
print(palindromo("mama"));
print(palindromo("mm"));