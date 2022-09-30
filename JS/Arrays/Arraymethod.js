//Array Method

/* 
1.forEach()
This method can help you to loop over array's items
*/



// const arr=[1,2,3,4,5,6];
// arr.forEach(item=>{
//     console.log(item);
// });

/* 2. includes()
This method check if array includes the item passed in the method
*/

// const arr=[1,2,3,4,5,6];

// let values = arr.includes(7);
// console.log(values);

/* filter()
This method create new array with only elements passed condition
inside the provided function.
*/

// const arr=[1,2,3,4,5,6];
// const arrfilter=arr.filter(num=>num>3);
// console.log(arrfilter);
// console.log(arr);

/*map()
This method create new array by calling the provided function in every element,
*/

// const arr = [1,2,3,4,5,6];
// const oneAdded = arr.map(num => num +1);
// console.log(oneAdded);
// console.log(arr);

/*reduce()
The reduce() method applies a function against an accumlator and 
each element in the array (from left to right) to reduce it to a single value 
*/

// const arr= [1,2,3,4,5,6];

// const sum = arr.reduce((total,value) => total + value,0);
// console.log(sum);

/*some()
This method check if at least one of array's item passed the condition.
if passed, it return 'true' otherwise 'false'.
*/

// const arr= [1,2,3,4,5,6];

// const largeNum = arr.some(num => num >4 );
// console.log(largeNum);

// const smallNum = arr.some(num => num <0 );
// console.log(smallNum);

/*every()
This method check if all array's item passed the condition.
If passed, it return 'true' otherwise 'false',
*/

// const arr = [1,2,3,4,5,6];

// const greaterFour = arr.every(num=> num >4);
// console.log(greaterFour);

// const lessTen = arr.every(num => num < 10);
// console.log(lessTen);

/* sort()
This method used to arrange/sort arrays's item '
either ascending or descending order
*/

// const arr= [1,2,3,4,5,6];
// const alpha = ['e','a','c','u','y'];

// desc = arr.sort((a,b) => a > b ? -1 : 1);
// console.log(desc);

// ascOrder = alpha.sort((a,b) => a > b ? 1 : -1);
// console.log(ascOrder);


/*
Array.form()
This change all thing that are array-like or iterable into true array
especially when working with dom,
so that you can use other array methods like reduce , map, filter and so on
*/

// const name = 'DsCode';
// const nameArray = Array.from(name);

// console.log(name);
// console.log(nameArray);

/*
Array.of()
This creatre array from every arguments  passed into it.

*/


// const num = Array.of(1,2,3,4,5,6);
// console.log(num);


/* push
add the new value in array

*/

// arr = ['yash'];
// console.log(arr);
// arr.push('mattu','jasmeet')
// console.log(arr);


/* pop
delete the value of array
*/

// arr = ['yash','mattu','jasmeet','karma'];

// console.log(arr);
// arr.pop('karma');

// console.log(arr);

/*
shift()
remove element from index 0
*/

// arr = ['yash','mattu','jasmeet'];
// console.log(arr);
// arr.shift(arr);
// console.log(arr);




/* 
unshift()
add the element to index 0  
*/

// arr = ['yash','mattu','jasmeet'];
// console.log(arr);
// arr.unshift('karma');
// console.log(arr);


/*
splice
remove the element from index value
*/

// arr = ['yash','jasmeet','mattu','karma'];

// console.log("before remove",arr);
// arr.splice(0,1);
// console.log("after remove",arr);

/*
slice
they give you the copy of element
*/

// arr = ['yash','jasmeet','mattu','karma'];

// console.log("before remove",arr);

// var copy = arr.slice(3);
// console.log({copy});
// console.log("after remove",arr);


/*
concat()
add the two array
*/
// var a = ['first','second','third'];
// var b = ['fourth','fifth','sixth'];

// console.log(a.concat(b));

/*
copyWithin()
copy the target element in array
*/

// var a = ['first','second','third'];
// var b = ['fourth','fifth','sixth'];

// console.log(a.concat(b));

// a.copyWithin(0,1,3)

// console.log(a);


/*
fill()
fill the element in array
*/

// var empty = new Array(10);
// console.log(empty);

// empty.fill("yash");
// console.log(empty);

/*
map()
calls a function once for each element in an array.
*/

// numbers = new Array(100);
// numbers.fill()
// numbers = numbers.map((value, index) => 'yash' + index);
// console.log(numbers);

/*
filter()
filtered down to just the elements from the given array that pass .
*/

// var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);



/*
find()
find the element in the array .
*/

// var students = [
//     {name: 'yash'    ,id:1},
//     {name: 'sagar'   ,id:2},
//     {name: 'jasmeet' ,id:3},
//     {name: 'karma'   ,id:4},
//     {name: 'gill'    ,id:5},
// ]

// console.log(students);

// function searchByname(name) {
//   return  students.find(
//         (value,index,array) => {
//             if(name == value.name)
//             return value
//         }
//     )
// }

// console.log(searchByname('gill'));


/*
join()
method returns an array as a string
*/


// const arr = ['sun','mon','tue','wed'];
// console.log(arr.join(' then '));


/*
reverse()
method reverses the elements in an array.
*/

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.reverse();

// console.log(fruits);

/*
sort()
method reverses the elements in an array.
*/


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits);





 



























