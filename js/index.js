// Problem #1 - Multiples of 3 and 5 up to 1000

var multiples = function(number) { //Set input value into a function
  var sum = 0; 
   for(var i = 0; i < number; i++) { 
      if(i % 3 == 0 || i % 5 == 0) { //Determine multiples of 3 and 5
          sum += i; //Add the multiples
        }
    }    
  document.getElementById('result1').innerHTML = sum;//print result to call in HTML
 };

//Problem #2 - Even Fibonacci numbers

var fiboCalc = function fib(num) { //Set input value into a function
       var a = 0, b = 1, c = 0, evens = 0;
         while(c < num) {
            c = a + b;
           if(c % 2 == 0) {
               evens += c;
           }
            a = b;
            b = c;
            c++; 
       
       }
  document.getElementById('result2').innerHTML = evens; //print result to call in HTML
};

//Problem #3 - Largest prime factor(work in progress!)
var primes = function largestPrime(x) {
   var factors = [], divisor = 2;
   
   while(x > 1) {
      if(x % divisor == 0) {
         factors.push(divisor);
         x /= divisor;
      }
         divisor += 1;
   }
   factors.sort(function(a, b){return b-a});
   document.getElementById('result3').innerHTML = factors[0];
}