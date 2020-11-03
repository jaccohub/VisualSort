function sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function comparator(a, b) {
  return a - b
}

/**
 * @param {Array} arr array
 * @returns {Array} sorted array
 */
export default function bubbleSort(arr) {
  let temp
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (comparator(arr[j], arr[j - 1]) < 0) {
        temp = arr[j]
        arr[j] = arr[j - 1]
        arr[j - 1] = temp
      }
    }
  }
}
