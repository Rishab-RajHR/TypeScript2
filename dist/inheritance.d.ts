declare class Emp5 {
    protected salary: number;
    constructor(salary: number);
}
declare class Dev extends Emp5 {
    showSalary(): void;
}
declare const dev2: Dev;
