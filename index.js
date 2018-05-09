
function diffArray(arr1, arr2) {
    var args = [].slice.call(arguments).sort(function(a,b){
        
        return b.length - a.length;
    })

    console.log('​diffArray -> args', args);

    
    console.log('​args', args);
    var newArr = [];
    

    for (let index = 0; index < args[0].length; index++) {
    console.log('​diffArray -> args[0].length', args[0].length);
        
        
        
    }
    
    
    
  document.getElementById('target').innerHTML = 'puto';
}
  
  diffArray([1,2],[1,5,2,3] )