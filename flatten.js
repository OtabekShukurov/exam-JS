//flatten function

let arr = [1, 2, 3];

function flatten (array) {
    let result = [];

    for(let item of array) {
        if (Array.isArray(item)) {
            result.push(...flatten(item));
        } else {
            result.push(item);
        }
    }        
    
    return result
}

console.log(flatten(arr));