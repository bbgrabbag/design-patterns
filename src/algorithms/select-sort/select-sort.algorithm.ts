export type SelectionSortOptions = {
  mutable: boolean;
};

/**
 * Performs an in-place selection sort on the given array.
 * @param arr The array to sort.
 * @param compareFn The function to compare two elements.
 * @param options The options for the selection sort.
 * @returns The sorted array (same reference as input).
 */
export const selectionSort = <T>(
  arr: T[],
  compareFn: (a: T, b: T) => number = (a, b) => (a < b ? -1 : a > b ? 1 : 0),
  options?: SelectionSortOptions
): T[] => {
  const defaultOptions: SelectionSortOptions = {
    mutable: true,
    ...options,
  };

  const output = defaultOptions?.mutable ? arr : [...arr];
  for (let i = 0; i < output.length - 1; i++) {
    const key = arr[i];
    let minIndex = i;
    for (let j = i + 1; j < output.length; j++) {
      if (compareFn(output[j], output[minIndex]) < 0) {
        minIndex = j;
      }
    }
    output[i] = output[minIndex];
    output[minIndex] = key;
  }
  return output;
};
