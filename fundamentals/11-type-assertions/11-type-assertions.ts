const input = document.getElementById("input-field") as HTMLInputElement;
//for some reason you can't assign an htmlinput element as the type to the above variable
//it only works as a type assertion

//type assertions are created by using the 'as' keyword
//they are useful when you happen to know more about the type of a variable
//than the compiler does

//type assertions are rare, but they are useful when dealing with HTMLElements like above
//also useful when, and I quote:
//"when querying an element from the backend, for example a rest API, we get 
//back a generic JavaSCript object and we want to assign it to a more specific 
//variable, we want to be using type assertions there as well"


const input2 = <HTMLInputElement>document.getElementById("input-field");
//above is a different syntax for assertions, also known as 'casting'
//there is no difference between the two syntaxes, they do the same thing