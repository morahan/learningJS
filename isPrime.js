function isPrime(num){
  if (num === 2){
    return `${num} is a Prime Number!`;
  } else if (num < 2){
    return `${num} is not Prime`
  }
  let div = 2;
  let count = 2;
  while (div < Math.ceil(num/2)){
    if(num % div !== 0){
        div ++;
        count ++;
    } else {
      return `${num} is not Prime`
    }
  }
  let countTarget = Math.ceil(num/2);
  if (count === countTarget){
    return  `${num} is a Prime Number!`;
  }
}
console.log(isPrime(15485863));

// let num = 7;
// let countTarget = Math.ceil(num/2);
// console.log(countTarget)
//  104729 = 10,000
 //  15485863 = 1,000,000 prime
