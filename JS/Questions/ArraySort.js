//sorting

/*
let arr = [2,6,3,1,5];
let swap;

for(let i=0; i< arr.length; i++){
    for(let j=0; j< arr.length; j++){
        if(arr[i] < arr[j]){
            swap = arr[i];
            arr[i] = arr[j];
            arr[j] = swap;
        }
    }
}
console.log(arr);
*/



a = [10, 18, 4, 5, 9, 6, 16, 12];
for(i=0; i< a.length-1;                         // length-1   for start the number with -1 

(a[i]>a[i+1])                                 // condition check a stand for numnbers in array
? ((a[i]=a[i]^a[i+1]) && 

(a[i+1]=a[i]^a[i+1]) && 

(a[i]=a[i]^a[i+1]) &&   (i=0)): i++)

{}
console.log(a); // 4, 5, 6, 9, 10, 12, 16, 18



