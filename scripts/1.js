const arr1 = [1, 2, 3, 4, 5]
const out1 = 'out-1'

function f1(arr, MyFunc, block) {
    MyFunc(arr, block)
}

function showArr(arr, block) {
    console.log(arr)
    console.log(block)
}

f1(arr1, showArr, out1)