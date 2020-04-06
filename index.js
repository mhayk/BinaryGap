function countZero(array) {
    let count = 0;
    for(let i in array) {
        if(array[i] === 0)
            count++
    }
    return count;
}

function solution(N) {
    const binary = (N).toString(2)
    const counterArray = []
    let stack = []

    for(let i = 0; i < binary.length; i++) {
        if(binary[i] == 1 && stack.length === 0 ){
            stack.push(binary[i])
        }
        else if(binary[i] == 0 )
            stack.push(0)
        else if(binary[i] == 1 && stack.length > 0 ) {
            stack.push(1)
            counterArray.push(countZero(stack))
            stack = []
        }
    }
    if(counterArray.length) {
        return Math.max.apply(Math, counterArray)
    } else
        return 0
}