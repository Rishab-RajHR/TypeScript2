interface Person3 {
    username: string;
}
interface Emp3 {
    salary: number;
}
type Staff3 = Person3 & Emp3;
declare let worker3: Staff3;
