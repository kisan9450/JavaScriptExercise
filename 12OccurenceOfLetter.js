var inputString=prompt("Enter an string");
var char=prompt("Enter a character to match");
var count=0;
var array=[];
array=inputString.split("");
for(i=0;i<array.length;i++)
	if(array[i]==char)
		count++;
console.log(count);
