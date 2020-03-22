// writing a countup from 1-100 with a for-loop
for (var i = 1; i <= 100; i++) {

  // print out FizzBuzz if the number is dividable by 3 and 5
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
    
    // print out Fizz if the number is only dividable by 3
  } else if (i % 3 == 0) {
    console.log("Fizz");
    
    // print out Buzz if the number is only dividable by 5
  } else if (i % 5 == 0) {
    console.log("Buzz");
    
    // print out every other number
  } else {
    console.log(i);
  }
}

