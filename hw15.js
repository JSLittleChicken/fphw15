function removeElement(array, item) {
    let itemIndex = array.indexOf(item);
    let deletedItem = array.splice(itemIndex, 1);
    return array
}

let arr = [1,2,3,4,5,6];
let item = 5;

console.log(removeElement(arr, item))