function evenNumbers(arr){
    let consInt=0
    let currentMax=0
    if(!arr){
        return 'Empty array'
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]===1){
            consInt++
        }
        if(currentMax<consInt && (arr[i]===0||i===arr.length-1)){
            currentMax=consInt
            consInt=0
        }
    }   
    return currentMax
}
console.log(evenNumbers([0,0,0,1,1,1,0,0,0,1,1,1,1,1]))