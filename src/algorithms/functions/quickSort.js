function partition(arr, low, high, comparator, results) {
  const p = arr[high]
  let i = low - 1
  for (let j = low; j < high; j++) {
    if (comparator(arr[j], p) < 0) {
      i++
      const temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
    results.push({
      current: j,
      compare: i,
      array: [...arr]
    })
  }
  const temp = arr[i + 1]
  arr[i + 1] = arr[high]
  arr[high] = temp
  results.push({
    current: i + 1,
    compare: high,
    array: [...arr]
  })

  return i + 1
}

function sort(arr, low, high, comparator, results) {
  if (low <  high) {
    const p = partition(arr, low, high, comparator, results)
    sort(arr, low, p - 1, comparator, results)
    sort(arr, p + 1, high, comparator, results)
  }
}

export default function quickSort(arr, comparator) {
  const [...arrayCopy] = arr
  const results = []
  const low = 0
  const high = arr.length - 1
  sort(arrayCopy, low, high, comparator, results)
  return results
}
