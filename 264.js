Array.prototype.unique = function (a) { return function () { return this.filter(a) } }(function (a, b, c) { return c.indexOf(a, b + 1) < 0 });

Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {         
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}


function diffArray(arr1, arr2) {
  var args = [].slice.call(arguments).sort(function (a, b) {
    return b.length - a.length;
  })

  var arr_a = args[0].unique();
  console.log('​diffArray -> arr_a', arr_a);
  var arr_b = args[1].unique();
  console.log('​diffArray -> arr_b', arr_b);

  var newArr = [];

  for (let index = 0; index < arr_a.length; index++) {
    if (!isInArray(arr_a[index], arr_b)) {
      newArr.push(arr_a[index])      
    }

    if (!isInArray(arr_b[index], arr_a)) {
      newArr.push(arr_b[index])      
    }

  }

  newArr.clean(undefined)


  console.log('RESULTADO newArr', newArr);
  return newArr;


}












diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
 ["diorite", "andesite", "grass", "dirt", "dead shrub"])                          //.
 console.log(' should return ["pink wool"] ########################################################################​', );

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"],
 ["diorite", "andesite", "grass", "dirt", "dead shrub"] )                  //  

 console.log('should return ["diorite", "pink wool"].########################################################################​', );
diffArray(["andesite", "grass", "dirt", "dead shrub"]
, ["andesite", "grass", "dirt", "dead shrub"]   )                           //  

console.log('should return [].########################################################################​', );
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]   )                            //
console.log('should return [4].########################################################################​', );

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]  )                             //
console.log('should return ["piglet", 4].########################################################################​', );

diffArray([], ["snuffleupagus", "cookie monster", "elmo"]  )                             //
console.log('should return ["snuffleupagus", "cookie monster", "elmo"].########################################################################​', );

diffArray([1, "calf", 3, "piglet"], [7, "filly"])                              // 
console.log('should return [1, "calf", 3, "piglet", 7, "filly"].########################################################################​', );