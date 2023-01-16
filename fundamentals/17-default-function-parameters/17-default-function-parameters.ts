//in the below function, lessonsCount has been provided with a default argument
function printCourse(title: string, subtitle: string, lessonsCount: number = 10) {
    console.log(`Title: ${title}, Subtitle: ${subtitle}, Number of Lessons: ${lessonsCount}`);
};


// printCourse("TypeScript Bootcamp", "Let's do stuff");
//without a default parameter for lessonsCount, the above call for printCourse will
//give an error because only two arguments have been provided

printCourse("Bootcamp", "Let's do thangs");
