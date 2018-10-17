var inputArray=["Balloon","Orange","Apple","Mango"];
    function sortArrayAlphabetical(array){
        array.sort();
        return array;
    }
    function sortArrayReverseAlphabetical(array1){
        array1.sort();
        array1.reverse();
        return array1;
    }    
console.log(sortArrayAlphabetical(inputArray)+"  -Array revesre-  "+sortArrayReverseAlphabetical(inputArray));