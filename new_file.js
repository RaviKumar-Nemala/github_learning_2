let a = {};

Object.defineProperty(a, "name" , {value : 'hell' , writable :false , configurable:true , enumerable:true} );
console.log( a );

a.name  = 'modified'
console.log( a.name)

console.log( 'this is newbranch line')