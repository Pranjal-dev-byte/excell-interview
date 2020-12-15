function sortIt(obj){
    if(!arr){
        return 'Empty object'
    }
    obj.sort(function(a, b) { 
        return a.id - b.id;
    });
    return obj
}

console.log(sortIt([
    {  
        id : 4, 
        name:'abc'
    },
    {
        id : 10, 
        name : 'ab'
    },
    {
        id : 5, 
        name : 'abc3'
    },
    {
        id : 6, 
        name : 'abc5'
    }
]))