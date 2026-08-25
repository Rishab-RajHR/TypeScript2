declare function getLength<T extends {
    length: number;
}>(value: T): number;
