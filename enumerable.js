Array.prototype.multiples = function () {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    arr.push(this[i] * 2);
  }
  return arr
};

// console.log([1,2,3].multiples());

Array.prototype.myEach = function (fun) {
  for (var i = 0; i < this.length; i++) {
    fun(this[i]);
  }
  return this
};

// console.log([1,2,3].myEach(
//   function (num) {
//     console.log(num);
//  }
// ));

Array.prototype.myMap = function (fun) {
  var arr = [];

  this.myEach(function(num){
    arr.push(fun(num));
  });

  return arr;
};

// console.log([1,2,3].myMap(
//   function(num) {
//     return num * 3;
//   }
// ));

Array.prototype.myInject = function (fun) {
  var baseValue = 0;
  this.myEach(function(el){
    baseValue = fun(baseValue,el);
  })
  return baseValue
};

// console.log([1,2,3].myInject(
//   function (accum,num){
//     return accum + num
//   }));