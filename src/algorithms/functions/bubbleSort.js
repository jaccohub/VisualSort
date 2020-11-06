export default function bubbleSort(arr, comparator) {
  const [...arrayCopy] = arr
  const results = [{
    current: 0,
    compare: 0,
    array: arr
  }]
  let temp
  for (let i = 0; i < arrayCopy.length; i++) {
    for (let j = i; j > 0; j--) {
      if (comparator(arrayCopy[j], arrayCopy[j - 1]) < 0) {
        temp = arrayCopy[j]
        arrayCopy[j] = arrayCopy[j - 1]
        arrayCopy[j - 1] = temp
      }
      results.push({
        current: i,
        compare: j,
        array: [...arrayCopy]
      })
    }
  }
  results.push({
    current: 0,
    compare: 0,
    array: arrayCopy
  })
  return results
}
