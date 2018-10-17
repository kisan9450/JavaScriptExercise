var fruitArray1=["Apple","Kiwi","Mango","Banana"];
var fruitArray2=["Apple","Mango"];
function differenceOfArray(Array1,Array2){
    var result=[];
    for(i=0;i<Array1.length;i++){
        if(Array2.indexOf(Array1[i])===-1){
            result.push(Array1[i]);
        }
    }
    for (i = 0; i < Array2.length; i++) {
        if (Array1.indexOf(Array2[i]) === -1) {
          result.push(Array2[i]);
        }
      }
      return result;
}
console.log(differenceOfArray(fruitArray1,fruitArray2));