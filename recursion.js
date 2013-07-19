var US = require('./underscore.js');

var range = function (start, end) {
  var arr = [];
  arr.push(start)
  if (start === end){
    return arr
  }

  var x = range(start + 1, end);
  return arr.concat(x);
};

// console.log(range(1,10));

var sumOfArray = function (arr) {
  var sum = arr.pop();
  if (arr.length === 0) {
    return 0;
  }

  return sum += sumOfArray(arr)
};

// console.log(sumOfArray([1,2,3,4]));

var exp1 = function (base, power) {
  if ( power === 0 ){
    return 1
  }

  return base *= exp1(base, power - 1)
};

// console.log(exp1(2,4));

var exp2 = function (base, power) {
  if ( power === 0 ){
    return 1
  }

  if ( power % 2 === 0 ){
    return Math.pow(exp2(base, power / 2), 2)
  } else {
    return base *= Math.pow(exp2(base, (power - 1) / 2), 2)
  }
};

// console.log(exp2(2,4));

var fibs = function (n) {
  if (n === 0){
    return []
  }
  else if (n === 1){
    return [0]
  }
  else if (n === 2){
    return [0,1]
  }

  var arr = fibs(n - 1);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2])
  return arr
};

// console.log(fibs(10));

var bsearch = function (array, target) {
  var mid = Math.floor(array.length / 2);
  if (array.length === 1 && array[mid] !== target){
    return null;
  }
  else if ( array[mid] === target ){
    return mid;
  }
  else if ( array[mid] > target ) {
    var new_arr = array.slice(0, mid);
    var x = bsearch(new_arr, target);
    if (x === null){
      return null;
    }
    else {
      return x;
    }
  }
  else {
    var new_arr = array.slice(mid, array.length);
    var x = bsearch(new_arr, target);
    if (x === null){
      return null;
    }
    else {
      return mid + x;
    }
  }
}

// for (var i = 0; i < 13; i++) {
//   console.log(bsearch([0,1,2,3,4,5,6,7,8,9,10,11],i));
// }

var mergeSort = function (arr) {
  if (arr.length === 1) {
    return arr;
  }

  var mid = Math.floor(arr.length / 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid, arr.length);

  return merge(mergeSort(left),mergeSort(right));
};

var merge = function(left, right) {
  var arr = [];

  while (left.length !== 0 && right.length !== 0) {
    if (left[0] > right[0]){
      arr.push(right.shift());
    }
    else {
      arr.push(left.shift());
    }
  };

  return arr.concat(left).concat(right);
};

// console.log(mergeSort([1,5,4,3,9,8,7]));

var subsets = function (arr) {
  if (arr.length === 0){
    return [[]];
  }

  var item = [arr[0]];
  var sub = subsets(arr.slice(1, arr.length));
  new_subs = US.map(sub, function (num) {
    return item.concat(num);
  })
  return new_subs.concat(sub);
};

// console.log(subsets([1,2,3]));

var makeChange = function (amount, coins) {
  if (amount <= 0) {
    return [];
  };

  coins.sort().reverse();
  console.log(coins);

  var solutions = [];

  for (var i = 0; i < coins.length; i++) {
    var check = [];
    if (coins[i] <= amount) {
      check.push(coins[i]);
      check.concat(makeChange(amount - coins[i], coins));
      solutions.push(check);
    };
  };

  return solutions;

}
//
// var makingChange = function (amt) {
//   var coins = [25,10,5,1];
//   var change = [];
//   var dupAmt = amt;
//
//   for (var i = 0; i < coins.length; i++) {
//     var numOfCoin = Math.floor(amt / coins[i]);
//     amt -= numOfCoin * coins[i]
//     US(numOfCoin).times(function(){change.push(coins[i])});
//   }
//   return change;
// };
//
// var makingChange2 = function (amt) {
//   var newObj = {};
//   var coins = [10,7,1];
//
//   for (var i = 0; i < coins.length; i++) {
//     newObj[coins[i]] = Math.floor(amt / coins[i]);
//   }
//   return newObj;
// };

console.log(makeChange(14, [10,7,1]));













































