


let arr =[1,2,5,4,3,9,8,6];
let target = 7;
let newArray= [];

for(let i=0; i<arr.length; i++){
for(let j=i+1; j<arr.length; j++){
if( arr[i] + arr[j] == target){

    newArray.push([arr[i],arr[j]]); 
    }
}
}
console.log(newArray);
console.log("Total numbers of Pairs >>" ,newArray.length);


