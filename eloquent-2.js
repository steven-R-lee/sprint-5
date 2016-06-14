// Looping a triangle

// Your code here.
for (var poundSign = "#"; poundSign.length < 8; poundSign =+ "#")
  console.log(poundSign)


// FizzBuzz

// Your code here.
for (var numero = 1; numero <101; numero = ++) {
     if (numero % 3 == 0 && numero % 5) {
      console.log("FizzBuzz");
}
else if (numero % 3) {
      console.log("Fizz");
}
else if (numero % 5) {
      console.log("Buzz");
}
else {
      console.log(numero);
}
};


// Chess Board

var grid = 8;
var checkers = " ";

for (var j = 0; j < grid; j = ++) {
     for (var i = 0; i < grid; i = ++) {
  
  if ((i + j) % 2 == 0
      checkers += "#";
  else
      checkers += " ";
  }
  checkers += "\n"; // i needed assistance with this line of code
}
console.log(checkers);