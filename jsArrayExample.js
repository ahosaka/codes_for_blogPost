// JavaScript Array Example


// access to each
var nameArray = ['John', 'Mark', 'Jane' ];

console.log(nameArray[1]);
console.log(nameArray.length);
// output
// Mark
// 3

// update array
nameArray[1] = 'Tim';
console.log(nameArray);
// output
// [ 'John', 'Tim', 'Jane' ]


// Append new var at the end
nameArray.push('Emma');
console.log(nameArray);
// output
// [ 'John', 'Tim', 'Jane', 'Emma' ]

// Append new var at the top
nameArray.unshift('Kate');
console.log(nameArray);
// output
// [ 'Kate', 'John', 'Tim', 'Jane', 'Emma' ]

// added new var at wherever you want
nameArray.splice(2,0,'Sam')
console.log(nameArray)
// output
//['Kate', 'John', 'Sam', 'Tim', 'Jane', 'Emma']

// Remove var at the end
nameArray.pop();
console.log(nameArray);
// output
// [ 'Kate', 'John', 'Tim', 'Jane' ]

//access to var you want
console.log(nameArray[1]);

//get length of the array
console.log(nameArray.length);

// sort the array
nameArray.sort();
console.log(nameArray);

// slice
slice1 = nameArray.slice(1,3);
slice2 = nameArray.slice(2,);
console.log(slice1);
console.log(slice2);
