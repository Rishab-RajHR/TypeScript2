declare class Dog {
    bark(): void;
}
declare class Cat {
    meow(): void;
}
declare function makesound(animal: Dog | Cat): void;
