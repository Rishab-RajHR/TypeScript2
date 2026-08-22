declare class Emp34 {
    protected salary: number;
    constructor(salary: number);
}
declare class Developer extends Emp34 {
    showSalary(): void;
}
declare const dev: Developer;
