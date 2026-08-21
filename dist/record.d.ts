type User = {
    name: string;
    age: number;
};
type Users = Record<string, User>;
declare const users: Users;
