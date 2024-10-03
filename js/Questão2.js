function fibonacci(num){
    let a = 0;
    let b = 1;

    if (num === a || num === b) {
        return `o número ${num} pertence à sequência de Fibonacci.`;  
    }

    let next = a + b;
    while (next <= num){
        if (next === num) {
            return `o número ${num} pertence à sequência de Fibonacci.`;
        }
       
        a = b;
        b = next;
        next = a + b;
    }

    return `o número ${num} não pertence à sequência de Fibonacci.`;
    
}


const numero = 13; // numero que você deseja verificar
console.log(fibonacci(numero));