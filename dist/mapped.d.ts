type User = {
    name: string;
    age: number;
};
type BooleanUser = {
    [key in keyof User]: boolean;
};
declare const userStatus: BooleanUser;
