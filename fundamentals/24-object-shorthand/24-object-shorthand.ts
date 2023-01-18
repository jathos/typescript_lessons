interface Course {
    title: string,
    subtitle: string,
    lessonsCount: number
};

const courseTitle = "TypeScript",
    courseSubtitle = "Learn the fundamentals",
    lessonsCount = 10;

const course: Course = {
    title: courseTitle,
    subtitle: courseSubtitle,
    lessonsCount: lessonsCount
}

//the above object properties can be simplified by using shorthand notation
//you will need to name your variables the same as the object properties
//in order for this to work
//see below:

interface Course1 {
    title: string,
    subtitle: string,
    lessonsCount1: number
};

const title = "TypeScript",
    subtitle = "Learn the fundamentals",
    lessonsCount1 = 10;

const course1: Course1 = {
    title,
    subtitle,
    lessonsCount1 //you don't need to show the value of the properties, since they are
    //being declared in shorthand.  typescript will know that these properties
    //refer to the variables that have been declared above with the same name
};
