// unique function

let array = [1, 2, 3, 1, 2];

function unique(array) {
    let result = [];
    for(let item of array) {
        if(result.indexOf(item) == -1) {
            result.push(item);
        }
    }

    return result
}

console.log(unique(array));



