/**
 * @argument array pass to sortingFn
 * @argument comparator to pass to sortingFn
 * @argument sortingFn fn that takes two arguments (array, comparator) and sorts the original array. No return value needed.
 * @returns keyFrames
 */
function generateKeyFrames(array, comparator, sortingFn) {
  const [...arrayCopy] = array
  const keyFrames = [{ current: 0, array }]
  const arrayProxy = new Proxy(arrayCopy, {
    apply: function(target, thisArg, argumentsList) {
      return thisArg[target].apply(this, argumentsList)
    },
    set: function(target, property, value, receiver) {
      target[property] = value
      keyFrames.push({
        current: Number(property),
        array: [...target]
      })
      return true
    }
  })
  sortingFn(arrayProxy, comparator)
  keyFrames.push({ current: 0, array: arrayProxy })
  return keyFrames
}

export default generateKeyFrames
