// chunk function

data = [1, 2, 3, 4, 5, 6];

function chunk(x, y) {
    z = 0;
    let result = [];
     for(let i = 0; i < Math.ceil(x.length/y); i++) {
        let arr1 = [];
        for(let j = 0;  j < y;  j++) {
            z++;
            if(x[z-1]) {
                arr1.push(x[z-1]);
            }
        }
        result.push(arr1);
    }
return result
}

arr2 = chunk(data,2);
console.log(arr2);