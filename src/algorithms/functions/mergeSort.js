/**
 * Doesn't currently work with generateKeyFrames
 * because it creates copies of the proxy array (slice).
 * Saving this code to maybe fix in the future.
 */
export default function mergeSort(arr, comparator) {
  if (arr.length === 1) return arr
  const middleIndex = arr.length / 2
  const listOne = mergeSort(arr.slice(0, middleIndex))
  const listTwo = mergeSort(arr.slice(middleIndex))
  const returnList = []
  while (listOne.length > 0 && listTwo.length > 0) {
    if (listOne[0] < listTwo[0]) {
      returnList.push(listOne.shift())
    } else {
      returnList.push(listTwo.shift())
    }
  }
  returnList.push(...listOne)
  returnList.push(...listTwo)
  return returnList
}
