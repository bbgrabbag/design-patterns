// Factory Method Pattern Implementation

export abstract class Creator<Product> {
    abstract make(...args: any[]): Product;
}
