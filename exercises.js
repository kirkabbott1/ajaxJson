// function square(num) {
//   return num * num;
// }
//
// var squared = square(5);


//
// square(5, function(squared) {
//   console.log('the square is', squared);
// })


// function squareRoot(num) {
//   return Math.sqrt(num);
// }

// ***********1.5**********
// function square(num) {
//   return num * num;
// }
//
// function times2(num) {
//   return num * 2;
// }

// var squared = square(5);
// var result = times2(squared);
// console.log('Result is:', result);

// function square(num, callback) {
//   callback(num * num);
// }
// function times2(num, callback) {
//   callback(num * 2);
// }
//
// square(5, function(squared) {
//   times2(squared, function(result) {
//     console.log('result is:', result)
//   })
// });
// *************1.5************

// ****************2.0**************
function square(num, callback) {
  setTimeout(function () {callback(num * num);
  }, 1000)
}

function squareRoot(num, callback) {
  setTimeout(function() {callback(Math.sqrt(num));
  }, 500)
}

var x = 4;
var y = 3;
square(x, function(xSquared) {
  square(y, function(ySquared) {
    squareRoot(xSquared + ySquared, function(answer) {
      console.log('The answer is: ' + answer);
    });
  });
});




// function squareRootCPS(num, callback) {
//   callback(Math.sqrt(num));
// }
// squareCPS(25, function(argggh) {
//   console.log(argggh);
// })
//
// var x = 4;
// var y = 3;
// var answer = squareRootCPS(square(x) + square(y));
// console.log('The answer is: ' + answer);
