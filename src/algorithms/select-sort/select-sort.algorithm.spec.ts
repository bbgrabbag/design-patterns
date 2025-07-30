import { selectionSort } from './select-sort.algorithm';

describe('selectionSort', () => {
  it('should sort an array of numbers in ascending order (default)', () => {
    const arr = [5, 2, 9, 1, 5, 6];
    const result = selectionSort(arr);
    expect(result).toEqual([1, 2, 5, 5, 6, 9]);
  });

  it('should sort an array of numbers in descending order with custom compareFn', () => {
    const arr = [3, 7, 2, 8, 1];
    const result = selectionSort(arr, (a, b) => b - a);
    expect(result).toEqual([8, 7, 3, 2, 1]);
  });

  it('should sort an array of strings alphabetically', () => {
    const arr = ['banana', 'apple', 'cherry'];
    const result = selectionSort(arr);
    expect(result).toEqual(['apple', 'banana', 'cherry']);
  });

  it('should not mutate the original array when mutable is false', () => {
    const arr = [4, 2, 3, 1];
    const result = selectionSort(arr, undefined, { mutable: false });
    expect(result).toEqual([1, 2, 3, 4]);
    expect(arr).toEqual([4, 2, 3, 1]);
    expect(result).not.toBe(arr);
  });

  it('should mutate the original array when mutable is true', () => {
    const arr = [4, 2, 3, 1];
    const result = selectionSort(arr, undefined, { mutable: true });
    expect(result).toEqual([1, 2, 3, 4]);
    expect(arr).toEqual([1, 2, 3, 4]);
    expect(result).toBe(arr);
  });

  it('should handle an empty array', () => {
    const arr: number[] = [];
    const result = selectionSort(arr);
    expect(result).toEqual([]);
  });

  it('should handle an array with one element', () => {
    const arr = [42];
    const result = selectionSort(arr);
    expect(result).toEqual([42]);
  });

  it('should handle an array with duplicate elements', () => {
    const arr = [2, 3, 2, 1, 3];
    const result = selectionSort(arr);
    expect(result).toEqual([1, 2, 2, 3, 3]);
  });

  it('should handle already sorted array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = selectionSort(arr);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle reverse sorted array', () => {
    const arr = [5, 4, 3, 2, 1];
    const result = selectionSort(arr);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});
