export default function bubbleSort(arr, comparator) {
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
