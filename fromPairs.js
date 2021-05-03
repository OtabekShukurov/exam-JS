// From Pairs function 

let arr = [['a', 1], ['b', 2]];

function fromPairs(arr) {
    let obj = {};
    for(let item of arr) {
        obj[item[0]] = item[1];
    }

    return obj
}

console.log(fromPairs(arr));