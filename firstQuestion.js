function evenNumbers(arr){
    let oddArr=[];
    if(!arr){
        return 'Empty array'
    }
    for(let element of arr){
        if(element%2===0){
            oddArr.push(element)
        }
    }
    return oddArr   
}
console.log(evenNumbers([1,2,4,5,6,8,10]))