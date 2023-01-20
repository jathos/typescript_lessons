interface Course {
    title: string,
    subtitle: string,
    lessonsCount: number
};

//here is an alternate syntax for declaring functions as a const
//this syntax is not unique to TypeScript

//BUT what is unique to Typescript is the type declaration for the return value of the function
//this type declaration is found after the parameters (title:string, subtitle:string, lessonsCount:number) : Course

const createCourse = (title: string, subtitle: string, lessonsCount: number): Course => {

    console.log(`Creating course with Title: ${title}, Subtitle ${subtitle}, lessons count: ${lessonsCount}`);

    return {
        title,
        subtitle,
        lessonsCount
    };

};

//the below code will show the above const is of type "function"
console.log(typeof createCourse)