import generateKeyFrames from './generateKeyFrames'
import bubbleSort from './functions/bubbleSort'
import heapSort from './functions/heapSort'
import quickSort from './functions/quickSort'
import mergeSort from './functions/mergeSort'
import selectionSort from './functions/selectionSort'

export default [{
  name: 'Bubble sort',
  func: (arr, comparator) => generateKeyFrames(arr, comparator, bubbleSort)
}, {
  name: 'Heap sort',
  func: (arr, comparator) => generateKeyFrames(arr, comparator, heapSort)
}, {
  name: 'Quick sort',
  func: (arr, comparator) => generateKeyFrames(arr, comparator, quickSort)
}, {
  name: 'Selection sort',
  func: (arr, comparator) => generateKeyFrames(arr, comparator, selectionSort)
},{
  disabled: true,
  name: 'Merge sort',
  func: (arr, comparator) => generateKeyFrames(arr, comparator, mergeSort)
}]
