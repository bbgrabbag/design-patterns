// Main entry point for the package
export * from './utils';
export * from './patterns';

// Example utility function
export function greet(name: string): string {
    return `Hello, ${name}!`;
}

// Example class
export class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error('Division by zero is not allowed');
        }
        return a / b;
    }
} 