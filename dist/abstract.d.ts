declare abstract class Emp3 {
    name: string;
    constructor(name: string);
    abstract calCuSalary(): number;
}
declare class Dev3 extends Emp3 {
    calCuSalary(): number;
}
declare const dev4: Dev3;
