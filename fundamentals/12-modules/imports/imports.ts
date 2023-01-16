import { PAGE_SIZE, Course } from "../exports/exports";

const pageSize = PAGE_SIZE;
console.log(pageSize);


//DEFAULT EXPORTS:
//below imports are from 12-modules/default-exports/default-exports.ts
//the first two are declared as standard exports
//the third, printCourse, is declared as a default export
// this merely allows for some slightly simplified import syntax.  See below:
import { COURSE_TOTAL, TYPESCRIPT_COURSE } from "../default-exports/default-exports";
import printCourse from "../default-exports/default-exports";

//re-export below.  see 12-modules/exports/exports.ts
export {
    PAGE_SIZE as MAX_PAGE_SIZE
};

