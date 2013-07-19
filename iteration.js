Array.prototype.myUniq = function() {
  var arr = [];
  for(var i = 0; i < this.length; i++){
    if (arr.indexOf(this[i]) === -1) {
      arr.push(this[i]);
    }
  }
  return arr
};

// console.log([1,4,2,3,4,5,4,3].myUniq());

Array.prototype.twoSum = function () {
  var arr = [];

  for (var i = 0; i < this.length; i++) {
    for (var j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        arr.push([i,j]);
      }
    }
  }
  return arr
};

// console.log([-1, 0, 2, -2, 1].twoSum());

Array.prototype.myTranspose = function () {
  var arr = [];

  for (var i = 0; i < this[0].length; i++) {
    arr.push([]);
  }

  for (var i = 0; i < this[0].length; i++) {
    for (var j = 0; j < this.length; j++) {
      arr[i].push(this[j][i]);
    }
  }
  return arr
};

// console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].myTranspose());
// console.log([[0, 1, 2], [6, 7, 8]].myTranspose());

Array.prototype.bubbleSort = function () {
  for (var i = 0; i < this.length; i++) {
    for (var j = i + 1; j < this.length; j++) {
      var temp = this[i];

      if (this[i] > this[j]) {
        this[i] = this[j];
        this[j] = temp;
      }
    }
  }
  return this
};

// console.log([5,4,3,2,1].bubbleSort());

String.prototype.substrings = function () {
  var arr = [];

  for (var i = 0; i <= this.length; i++) {
    for (var j = i + 1; j <= this.length; j++) {
      var temp = this.substring(i,j)
      if (arr.indexOf(temp) === -1){
        arr.push(temp);
      }
    }
  }

  return arr
};

// console.log("caat".substrings());