import bubbleSort from './functions/bubbleSort'
import heapSort from './functions/heapSort'
import quickSort from './functions/quickSort'
import generateKeyFrames from './generateKeyFrames'

export default [{
  name: 'Bubble sort',
  func: (arr, comparator) => generateKeyFrames(arr, comparator, bubbleSort)
}, {
  name: 'Heap sort',
  func: (arr, comparator) => generateKeyFrames(arr, comparator, heapSort)
}, {
  name: 'Quick sort',
  func: (arr, comparator) => generateKeyFrames(arr, comparator, quickSort)
}]
