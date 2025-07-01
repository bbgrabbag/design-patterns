
export abstract class Creator<Product> {
    abstract make(...args: any[]): Product;
}
