let courseStatus: "draft" | "published" | "unpublished" | "archived" = "draft";

//instead of writing that text  for the literal type everytime you want a variable that follows the same
//type structure, you can instead do the following:

type CourseStatus = "draft" | "published" | "unpublished" | "archived";
let courseStatus2: CourseStatus = "draft";
let newStatus: CourseStatus = "published";


//below is an example using an object
type Course = {
    title: string,
    subtitle: string,
    lessonsCount: number
};

let course: Course = {
    title: 1,
    subtitle: "The Things We Do",
    lessonsCount: 10,
    randomThing: "This shouldn't be here"
};
//as you can see above, the number in the title property is causing an
//error because it is supposed to be of type string
//you can still add new properties if you want though, as shown by the 
//randomThing property
//intefaces are used with objects more often than aliases, however (see lesson 10)

