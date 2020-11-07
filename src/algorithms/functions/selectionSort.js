export default function selectionSort(arr, comparator) {
  for(var i = 0; i < arr.length; i++) {
    let minIdx = i
    for(let j = i + 1; j < arr.length; j++) {
       if(comparator(arr[j], arr[minIdx]) < 0) {
          minIdx = j
       }
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]
  }
}
