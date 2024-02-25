const arr=['nice',76354,true, null,undefined];
console.log(arr);
console.log(typeof arr);
console.log(Array.isArray(arr));

const movies = ['salaar','animal','wonkar','Arrow','peaceMaker'];
console.log((movies.length));
console.log("nice".length);


//  indexing
console.log(movies[2] );  // also work with string
console.log(movies.indexOf['peaceMaker'] );// also work with string
console.log(movies.at(-4));
movies[3]='batman';
console.log(movies);
movies[3]='arrow';
console.log(movies[20] );

// sliicing

console.log(movies.slice(1,4));
console.log(movies.slice(1,20));
console.log(movies.slice(2));
console.log(movies.slice(-4));


//modifying arrays

movies.push('dunki');// add to end
movies.unshift('Deadpool');// add to start
console.log(movies);

//delete item
movies.pop();// removes from the end
movies.shift(); //removes from StaticRange
console.log(movies);


// inserting and replacing  elements
movies.splice(3,2);//removes two element from index 3
movies.slice(2,2, 'superman','ironman', 'dr.strange');//removes two elements and add 3 element
movies,screen(2,0,'superman'); //insert 1 element at index 2
console.log(movies);