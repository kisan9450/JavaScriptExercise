var fruitArray= ["apple", "bannana", "orange", "apple", "orange"];
function removeDuplicate(arr){
    var newarray = arr.filter(function(item, index, inputarray) {
        return index == inputarray.indexOf(item);});
    return newarray;
}
console.log(removeDuplicate(fruitArray));