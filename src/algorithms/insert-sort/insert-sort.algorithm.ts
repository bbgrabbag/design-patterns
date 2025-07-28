
export type InsertionSortOptions = {
    mutable: boolean;
}

/**
 * Performs an in-place insertion sort on the given array.
 * @param arr The array to sort.
 * @param compareFn The function to compare two elements.
 * @param options The options for the insertion sort.
 * @returns The sorted array (same reference as input).
 *
 * @example
 * const arr = [5, 3, 8, 4, 2];
 * const sorted = insertionSort(arr);
 * console.log(sorted); // [2, 3, 4, 5, 8]
 *
 */
export const insertionSort = <T,>(
    arr: T[],
    compareFn: (a: T, b: T) => number = (a, b) => (a < b ? -1 : a > b ? 1 : 0),
    options?: InsertionSortOptions
): T[] => {

    const defaultOptions: InsertionSortOptions = {
        mutable: true,
        ...options,
    }

    const output = defaultOptions?.mutable ? arr : [...arr];
    for (let i = 1; i < output.length; i++) {
        const key = output[i];
        let j = i - 1;
        while (j >= 0 && compareFn(output[j], key) > 0) {
            output[j + 1] = output[j];
            j--;
        }
        output[j + 1] = key;
    }
    return output;
}

