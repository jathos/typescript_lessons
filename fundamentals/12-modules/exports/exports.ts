export const PAGE_SIZE = 100;

export type Course = {
    readonly title: string,
    subtitle: string,
    lessonsCount?: number
};