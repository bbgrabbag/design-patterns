export type MergeSortOptions = {
  mutable: boolean;
};

/**
 * Performs a merge sort on the given array.
 * @param array The array to sort.
 * @param compareFn The function to compare two elements.
 * @param options The options for the merge sort.
 * @returns The sorted array.
 *
 * @example
 * const arr = [5, 3, 8, 4, 2];
 * const sorted = mergeSort(arr);
 * console.log(sorted); // [2, 3, 4, 5, 8]
 *
 */
export const mergeSort = <T>(
  arr: T[],
  compareFn: (a: T, b: T) => number = (a, b) => (a < b ? -1 : a > b ? 1 : 0),
  options?: MergeSortOptions
): T[] => {
  const defaultOptions: MergeSortOptions = {
    mutable: false,
    ...options,
  };

  const output = defaultOptions.mutable ? arr : [...arr];

  if (output.length <= 1) {
    return output;
  }

  const mid = Math.floor(output.length / 2);
  const left = mergeSort(output.slice(0, mid), compareFn, defaultOptions);
  const right = mergeSort(output.slice(mid), compareFn, defaultOptions);

  const merged = merge(left, right, compareFn);

  // Copy back to original array if mutable
  if (defaultOptions.mutable) {
    for (let i = 0; i < merged.length; i++) {
      output[i] = merged[i];
    }
    return output;
  }

  return merged;
};

const merge = <T>(
  left: T[],
  right: T[],
  compareFn: (a: T, b: T) => number
): T[] => {
  const result: T[] = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (compareFn(left[i], right[j]) <= 0) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
};
