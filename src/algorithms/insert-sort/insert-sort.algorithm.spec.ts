import { insertionSort } from "./insert-sort.algorithm";

describe('Insertion Sort Algorithm', () => {
    it('should sort an array of numbers asc order by default', () => {
        const arr = [5, 3, 8, 4, 2];
        const sorted = insertionSort(arr);
        expect(sorted).toEqual([2, 3, 4, 5, 8]);
    });

    it('should output original, mutated array', () => {
        const arr = [5, 3, 8, 4, 2];
        const sorted = insertionSort(arr, (a, b) => b - a);
        expect(sorted).toBe(arr);
    });

    it('should implement custom compare function', () => {
        const arr = [5, 3, 8, 4, 2];
        const sorted = insertionSort(arr, (a, b) => b - a);
        expect(sorted).toEqual([8, 5, 4, 3, 2]);
    });

    it('should not mutate original array if mutable is false', () => {
        const arr = [5, 3, 8, 4, 2];
        const sorted = insertionSort(arr, undefined, { mutable: false });
        expect(sorted).toEqual([2, 3, 4, 5, 8]);
        expect(sorted).not.toBe(arr);
    });

    it('should work on empty array', () => {
        const arr: number[] = [];
        const sorted = insertionSort(arr);
        expect(sorted).toEqual([]);
    });

    it('should work on array with one element', () => {
        const arr = [1];
        const sorted = insertionSort(arr);
        expect(sorted).toEqual([1]);
    });

});