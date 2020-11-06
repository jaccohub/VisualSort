function partition(arr, low, high, comparator) {
  const p = arr[high]
  let i = low - 1
  for (let j = low; j < high; j++) {
    if (comparator(arr[j], p) < 0) {
      i++
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
  return i + 1
}

function sort(arr, low, high, comparator) {
  if (low < high) {
    const p = partition(arr, low, high, comparator)
    sort(arr, low, p - 1, comparator)
    sort(arr, p + 1, high, comparator)
  }
}

export default function quickSort(arr, comparator) {
  const low = 0
  const high = arr.length - 1
  sort(arr, low, high, comparator)
}
