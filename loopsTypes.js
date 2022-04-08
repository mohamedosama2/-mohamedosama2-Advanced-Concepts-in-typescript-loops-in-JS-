//////////////////////////1
var arr = [
    {
        name1: "moha1"
    },
    {
        name2: "moha2"
    },
    {
        name3: "moha3"
    },
];
/* arr.forEach((element, index, fullArray) => {
  console.log(element);
  console.log(index);
  console.log(fullArray);
}); */
////////////////////////2
/* for (const element of arr) {///////////arr cant be object
  console.log(element);
} */
/* OUTPUT
{ name1: 'moha1' }
{ name2: 'moha2' }
{ name3: 'moha3' }
*/
///////////////////////3
var obj = { name1: "1", name2: "2", name3: "3" };
/* for (const key in obj) {///on objects
  console.log(key);
  console.log(obj[key]);
} */
/* for (const index in arr) {
  console.log(index);
/*   console.log(arr[index]);
} */
/* console.log(arr.prototype) */
/*  console.log(Array.from());  */
/*
let array = Array(10);
console.log(array.length);
 */
var arrReduce = [10, 20, 30, 405, 60];
var sum = arrReduce.reduce(function (previousValue, currentValue, currentIndex, array) {
    if (currentIndex !== 3) {
        return previousValue + currentValue;
    }
    return previousValue; ///if not addedd result in NAN
});
console.log(sum);
