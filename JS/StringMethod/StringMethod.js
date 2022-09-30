
           //JavaScript String Methods

// length  coutn the character and white space also 


// var str = "my name is yash";
// var a = str.length;

// console.log(a);

// toLowerCase  convert the alphabatic into lowercase


// var str = "MY NAME IS YASH";
// var a = str.toLowerCase();
// console.log(a);

//toUpperCase convert the alphabatic into  toUpperCase

// var str = "my name is yash";
// var a = str.toUpperCase();
// console.log(a);

//includes   match  the string 

// var str = "my name is yash";
// var a = str.includes('yash');
// console.log(a);


// startsWith   match the string starting values

// var str = "my name is yash";
// var a = str.startsWith('my');
// console.log(a);

// endsWith     match the string endiing values

// var str = "my name is yash";
// var a = str.endsWith('sh');
// console.log(a);

//search  the index value of character

// var str = "my name is yash";
// var a = str.search('yash');
// console.log(a);

// match the duplicate string

// var str = "my name is yash is";
// var a = str.match(/is/g);
// console.log(a);


//indexof   get the index value for string

// var str = "my name is yash is";
// var a = str.indexOf("is");
// console.log(a);

// lastIndexOf they check from the last and get the inex value

// var str = "my name is yash is";
// var a = str.lastIndexOf("is");
// console.log(a);


// replace they replace the new string 


// var str = "my name is yash is";
// var a = str.replace(/is/g,"isss");
// console.log(a);


// trim  they remove the white space 

// var str = "   javascript    ";
// var a = str.trim();
// console.log(a);

//charAT   they return the character

// var str = "javascript is a Great Language";
// var a = str.charAt(0,1,8);
// console.log(a);

// charCodeAt   they return the char code 

// var str = "javascript is a Great Language";
// var a = str.charCodeAt(1);
// console.log(a);


//fromCharCode  method returns a string created from the specified sequence of UTF-16 code units

 
// var a = String.fromCharCode(33);
// console.log(a);


//concat()  add two or more strings


// var str = "javascript is a Great Language";
// var str2 = " but python is easy language";

// var a = str.concat(str2);

// console.log(a);

//split they divide the string into two parts in the array


// var str = "javascript is a Great Language";
// var a = str.split((" "));
// console.log(a);



// repeat  they repeat the string 


// var str = "javascript is a Great Language";
// var a = str.repeat(2);
// console.log(a);

//slice  they cut the string 

// var str = "javascript is a Great language";

// var a = str.slice(2);

// console.log(a);

//substr   they pick the charcter 

// var str = "javascript is a Great language";

// var a = str.substr(4,8);

// console.log(a);



// substring   they count the whole string with the define of index value

// var str = "javascript is a Great language";
// var a = str.substring(4,8);
// console.log(a);

//toString   they convert the number into string 


// var str = 50;
// var a = str.toString();
// console.log(a + 20);

//valueof method returns the primitive value of the specified object.


var str = "yash";
var a = str.toString();
console.log(a);