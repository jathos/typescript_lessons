//union types let you define two different types to a variable.  often used to allow a variable to be null

//consider some sort of unique identifier for something that can take two different data types.  sometimes a number and sometimes a string

// let uniqueIdentifier: any = "201e72bb-49e3-40ef-8331-b7f3e7d947f8";
// uniqueIdentifier = 1000;

//below method is better:
let uniqueIdentifier: number | string = "201e72bb-49e3-40ef-8331-b7f3e7d947f8";

uniqueIdentifier = 1000;

//below syntax is for an array that accepts different types
const keys: (number | string)[] = [1000, "201e72bb-49e3-40ef-8331-b7f3e7d947f8"];

let courseId: number | null = null;

