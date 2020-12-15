function notUnique(arr){
    if(!arr){
        return 'Empty array'
    }
    let obj={}
    for(let el of arr){
        if(obj[el]){
            return el
        }
        obj[el]=1
    }
    return 'No repititive character'
}
// The array can be upto 101 numbers. I've included only 10 for the sake of simplicity
console.log(notUnique([0,1,2,3,4,5,6,7,7,8,9,10]))