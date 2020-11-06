function heapify(arr, length, i, comparator, results) {
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
    results.push({
      current: i,
      compare: largest,
      array: [...arr]
    })
    heapify(arr, length, largest, comparator, results)
  }
  return arr
}

function sort(arr, comparator, results) {
  let length = arr.length
  let i = Math.floor(length / 2 - 1)
  let k = length - 1

  while (i >= 0) {
    heapify(arr, length, i, comparator, results)
    i--
  }
  while (k >= 0) {
    [arr[0], arr[k]] = [arr[k], arr[0]]
    results.push({
      current: 0,
      compare: k,
      array: [...arr]
    })
    heapify(arr, k, 0, comparator, results)
    k--
  }
  return arr
}

export default function heapSort(arr, comparator) {
  const [...arrayCopy] = arr
  const results = [{
    current: 0,
    compare: 0,
    array: arr
  }]
  sort(arrayCopy, comparator, results)
  results.push({
    current: 0,
    compare: 0,
    array: arrayCopy
  })
  return results
}
