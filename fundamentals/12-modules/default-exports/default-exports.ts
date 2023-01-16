export const COURSE_TOTAL = 20;

export const TYPESCRIPT_COURSE = {
    title: "Bootcamp",
    subtitle: "Give us your money!",
    lessonsCount: 10
};

//below is a default export.  see 12-modules/imports/imports.ts to see what this does
export default function printCourse(course) {
    console.log(`The course title is ${TYPESCRIPT_COURSE.title}`);
}