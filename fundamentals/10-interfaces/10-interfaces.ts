interface Course {
    readonly title: string,
    subtitle: string,
    lessonsCount?: number
};

const course: Course = {
    title: "Thingy",
    subtitle: "Soup Bowl",
    lessonsCount: 10
};

const otherCourse: Course = {
    title: "TypeScript Bootcamp",
    subtitle: "Learn some stuff!"
}
//the above declaration of otherCourse would typically throw an error
//because interfaces require all of the defined properties to be present in 
//subsequent uses of that type.  however, by using the ? character in the definition
//of the interface, you are making it known that this property is optional

course.title = "nope. not allowed!"
course.subtitle = "yep, this is ok!"
//the readonly modifier on the interface definition is preventing the title property
//from being changed.  The subtitle property can still be changed, however, even though
//the variable itself is a const


//interfaces and aliases can be used interchangeably (pretty much) for objects
//however, the official documentation recommends using interfaces for objects