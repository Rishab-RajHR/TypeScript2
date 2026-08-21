type GetUserType<T> = T extends (...args: any[]) => infer R ? R : never;
type User2 = GetUserType<typeof getUser>;
