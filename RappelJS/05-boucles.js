// let items = [
//     "item 1", // 0
//     "item 2", // 1
//     "item 3", // 2
// ];

// FOR
// --
// for (init; condition; incrémentation) {}
// for (1; 2; 4) {3}

// for (let i=0; i<items.length; i++)
// {
//     console.log( i, items[i] );
// }


// WHILE
// --
// let i=0;
// while(i<items.length)
// {
//     console.log( i, items[i] );
//     i++;
// }

// console.log( items );
// while (items.length)
// {
//     console.log( items[0] );
//     items.shift();
// }
// console.log( items );


// DO WHILE 
// --

// let i = 11;
// do {
//     console.log( i );
//     i++;
// } while (i<10)


// FOR IN
// --

// for (let index in items)
// {
//     console.log( index, items[index] );
// }

// FOR OF
// --
// for (let item of items)
// {
//     console.log( item );
// }



// let user = {
//     firstname: "Bruce",
//     lastname: "WAYNE",
//     nickname: "Batman",
// };
// for (let index in user)
// {
//     console.log( index, user[index] );
//     // console.log( index, user.index );
// }

// let myObject = {};
// let myArray = [];
// let myStr = "abc";

// console.log( typeof myObject );
// console.log( typeof myArray );
// console.log( myStr[1] );
// console.log( myStr );
// console.log( typeof myStr );

// let a = 5;
// let b = a * "abc";

// console.log( typeof a );
// console.log( b );
// console.log( typeof b );
// console.log( typeof [] + [] );



// FOREACH
// --

let items = [
    "item 1", // 0
    "item 2", // 1
    "item 3", // 2
];

items.forEach(item => {
    console.log( item );
});

// MAP
// --

items.map(item => {
    console.log( item );
});