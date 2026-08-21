type User11 = {
    id: number;
    name: string;
    email: string;
    password: string;
};
type PublisUser = Omit<User11, "password">;
declare const user21: PublisUser;
