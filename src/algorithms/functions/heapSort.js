function heapify(arr, length, i, comparator) {
  let largest = i
  let left = i * 2 + 1
  let right = left + 1

  if (left < length && comparator(arr[left], arr[largest]) > 0) {
    largest = left
  }
  if (right < length && comparator(arr[right], arr[largest]) > 0) {
    largest = right
  }
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]]
    heapify(arr, length, largest, comparator)
  }
  return arr
}

export default function heapSort(arr, comparator) {
  let length = arr.length
  let i = Math.floor(length / 2 - 1)
  let k = length - 1

  while (i >= 0) {
    heapify(arr, length, i, comparator)
    i--
  }
  while (k >= 0) {
    [arr[0], arr[k]] = [arr[k], arr[0]]
    heapify(arr, k, 0, comparator)
    k--
  }
  return arr
}
