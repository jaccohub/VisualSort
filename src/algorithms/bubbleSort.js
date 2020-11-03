/**
 * @param {Array} arr array
 * @param {function} comparator function
 * @returns {Array} array containing every step of the sorting process
 */
export default function bubbleSort(arr, comparator) {
  const results = []
  let temp
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (comparator(arr[j], arr[j - 1]) < 0) {
        temp = arr[j]
        arr[j] = arr[j - 1]
        arr[j - 1] = temp
      }
      results.push({
        current: i,
        compare: j,
        array: [...arr]
      })
    }
  }
  return results
}
