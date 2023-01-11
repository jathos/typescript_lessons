let title = "TypeScript Bootcamp";
const title2 = "TypeScript Bootcamp";
//hover over the two variable names and you will see that the let variable is
//just a generic string type.  however, the const variable's type is the actual string
//value of that variable.
//This is a literal type


let pageSize: 10 | 15 | 20 = 10;
pageSize = 15;
//let variables can also be given literal types, as in the example above.
//the variable can be changed after declaration (unlike a const), but it can only 
//be one of the provided literal type values