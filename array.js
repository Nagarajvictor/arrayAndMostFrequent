const array=(n1, n2) =>{
    let arr = new Array();
    for (let i = n1; i<= n2; i++){
        arr.push(i);
    }
    return arr;
}
let arr = array(4,8);
console.log(arr);