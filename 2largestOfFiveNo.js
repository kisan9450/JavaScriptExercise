var numbers = [10,5,12,88,66];
var maxvalue=numbers[0];
for(i=1;i<numbers.length;i++){
    if(numbers[i]>maxvalue){
   maxvalue=numbers[i];
}
}
console.log(maxvalue);