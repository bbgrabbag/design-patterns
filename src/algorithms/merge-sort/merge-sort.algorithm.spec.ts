import { mergeSort } from './merge-sort.algorithm';

describe('Merge Sort Algorithm', () => {
  describe('Basic Functionality', () => {
    it('should sort an array of numbers in ascending order by default', () => {
      const arr = [5, 3, 8, 4, 2];
      const sorted = mergeSort(arr);
      expect(sorted).toEqual([2, 3, 4, 5, 8]);
    });

    it('should sort an array of numbers in descending order with custom compareFn', () => {
      const arr = [5, 3, 8, 4, 2];
      const sorted = mergeSort(arr, (a, b) => b - a);
      expect(sorted).toEqual([8, 5, 4, 3, 2]);
    });
  });

  describe('Edge Cases', () => {
    it('should handle an empty array', () => {
      const arr: number[] = [];
      const sorted = mergeSort(arr);
      expect(sorted).toEqual([]);
    });

    it('should handle an array with one element', () => {
      const arr = [42];
      const sorted = mergeSort(arr);
      expect(sorted).toEqual([42]);
    });

    it('should handle an array with duplicate elements', () => {
      const arr = [2, 3, 2, 1, 3, 1];
      const sorted = mergeSort(arr);
      expect(sorted).toEqual([1, 1, 2, 2, 3, 3]);
    });

    it('should handle already sorted array', () => {
      const arr = [1, 2, 3, 4, 5];
      const sorted = mergeSort(arr);
      expect(sorted).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle reverse sorted array', () => {
      const arr = [5, 4, 3, 2, 1];
      const sorted = mergeSort(arr);
      expect(sorted).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle array with all identical elements', () => {
      const arr = [3, 3, 3, 3, 3];
      const sorted = mergeSort(arr);
      expect(sorted).toEqual([3, 3, 3, 3, 3]);
    });
  });

  describe('Mutable vs Immutable Behavior', () => {
    it('should not mutate the original array when mutable is false (default)', () => {
      const arr = [4, 2, 3, 1];
      const sorted = mergeSort(arr);
      expect(sorted).toEqual([1, 2, 3, 4]);
      expect(arr).toEqual([4, 2, 3, 1]);
      expect(sorted).not.toBe(arr);
    });

    it('should mutate the original array when mutable is true', () => {
      const arr = [4, 2, 3, 1];
      const sorted = mergeSort(arr, undefined, { mutable: true });
      expect(sorted).toEqual([1, 2, 3, 4]);
      expect(arr).toEqual([1, 2, 3, 4]);
      expect(sorted).toBe(arr);
    });

    it('should not mutate the original array when mutable is explicitly false', () => {
      const arr = [4, 2, 3, 1];
      const sorted = mergeSort(arr, undefined, { mutable: false });
      expect(sorted).toEqual([1, 2, 3, 4]);
      expect(arr).toEqual([4, 2, 3, 1]);
      expect(sorted).not.toBe(arr);
    });
  });

  describe('Custom Objects', () => {
    it('should sort objects by a specific property', () => {
      const arr = [
        { name: 'Charlie', age: 30 },
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 35 },
      ];
      const sorted = mergeSort(arr, (a, b) => a.age - b.age);
      expect(sorted).toEqual([
        { name: 'Alice', age: 25 },
        { name: 'Charlie', age: 30 },
        { name: 'Bob', age: 35 },
      ]);
    });

    it('should sort objects by name alphabetically', () => {
      const arr = [
        { name: 'Charlie', age: 30 },
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 35 },
      ];
      const sorted = mergeSort(arr, (a, b) => a.name.localeCompare(b.name));
      expect(sorted).toEqual([
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 35 },
        { name: 'Charlie', age: 30 },
      ]);
    });
  });

  describe('Performance and Stability', () => {
    it('should maintain stability for equal elements', () => {
      const arr = [
        { id: 1, value: 'a' },
        { id: 2, value: 'a' },
        { id: 3, value: 'b' },
        { id: 4, value: 'a' },
      ];
      const sorted = mergeSort(arr, (a, b) => a.value.localeCompare(b.value));

      // Check that elements with same value maintain their relative order
      const aElements = sorted.filter(item => item.value === 'a');
      expect(aElements[0].id).toBe(1);
      expect(aElements[1].id).toBe(2);
      expect(aElements[2].id).toBe(4);
    });

    it('should handle large arrays', () => {
      const arr = Array.from({ length: 1000 }, (_, i) => 1000 - i);
      const sorted = mergeSort(arr);
      expect(sorted[0]).toBe(1);
      expect(sorted[999]).toBe(1000);
      expect(sorted.length).toBe(1000);
    });
  });
});
