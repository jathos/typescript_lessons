export const PAGE_SIZE = 100;

//you can even export and import Types
export type Course = {
    readonly title: string,
    subtitle: string,
    lessonsCount?: number
};

//below import is a "re-export".  it is the same variable that was originally exported as PAGE_SIZE to imports.ts
//then, in imports.ts it was exported again as the new variable name MAX_PAGE_SIZE using the "as" keyword

//this feature can be useful if you want to collect all of your exports from different files into a single
//exports file and them re-export them again.  that way you will only need to write a single import line to get
//access to a all of your different exports in any modules that might need them
import { MAX_PAGE_SIZE } from "../imports/imports";
const newExport = MAX_PAGE_SIZE;