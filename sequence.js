function fibonacciUntilLimit(n) {
    // your code here
    console.clear();
    
    let a = 0;
    let b = 1;
    for(let count = 0; count < n; count++){
      console.log(a);
      let temp = a + b;
      a = b;
      b = temp;
    }
  }


  function fibonacciEvenNumbers() {
    // your code here
  }
  
  function fibonacciSumUp() {
    // your code here
  }
  
  function fibonacciIsNumberPartOf() {
    // your code here
  }