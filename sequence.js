let n = Number(prompt("Enter a number and click the button to check if it is a Fibonacci number."));
let sequence = fibonacciUntilLimit(n);

function fibonacciUntilLimit(n) {
    let sequence = []; 
    let a = 0;
    let b = 1;
    let count = 0; 

    while (count < n) { // Loop until the count reaches n
      sequence.push(a);
      let temp = a + b;
      a = b;
      b = temp;
      count++; 
    }
    console.log(`These are the first ${n} Fibonacci numbers: ${sequence}`);
    return sequence; 
}

function fibonacciEvenNumbers(sequence) {
  
    let evenNumbers = [];
  
    for(let i = 0; i < sequence.length; i++){
      if(sequence[i] % 2 === 0){
        evenNumbers.push(sequence[i])
      }
    }

    console.log(`These are the even Fibonacci numbers until the number you entered: ${evenNumbers}`);
    
}

function fibonacciSumUp(n, sequence) {

    let sum = 0;

    for(let i=0; i<sequence.length; i++){
      sum += sequence[i];
    }

    console.log(`The sum of the first ${n} Fibonacci numbers is : ${sum}`)
}

function fibonacciIsNumberPartOf(n, sequence) { 
    let isFibonacci = false; 

    for(let i = 0; i < sequence.length; i++) {
        if(sequence[i] === n) {
            isFibonacci = true; 
            console.log("The number you entered is a Fibonacci number.");
            break; // Exit loop 
        }
    }

    if (!isFibonacci) {
        console.log("The number you entered is not a Fibonacci number.");
    }
}


fibonacciEvenNumbers(sequence); 
fibonacciSumUp(n, sequence); 
fibonacciIsNumberPartOf(n, sequence); 