/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    var resultArray = []

    for (let i = 0; i < arr.length; i+=size){
        resultArray.push(arr.slice(i, i+size))
    }
    return resultArray
};
