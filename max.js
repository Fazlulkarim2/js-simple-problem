const business = 450;
const minister = 550;
const army = 600;
// if (business > minister) {
//     console.log('Business personer pola is bigger');
// }
// else {
//     console.log('minister er pola is bigger');
// }
//  compare 
/*
if (business > minister && business > army) {
    console.log('Business is bigger');
}
else if (minister > business && minister > army) {
    console.log('minister is bigger');
}
else {
    console.log('army is bigger');
}
*/

// function findLargest(first, second) {
//     if (first > second) {
//         return first;
//     }
//     else {
//         return second;
//     }
// }
// const largest = findLargest(354, 241);
// console.log('largest is ', largest);

// var max = Math.max(business, minister, army);

// Task 1: create a function that takes three numbers as input parameter and returns you the largest number of the three 

function findLargest(first, second, third) {
    if (first > second && first > third) {
        return first;
    }
    else if (second > first && second > third) {
        return second;
    }
    else {
        return third;
    }
}
const largest = findLargest(354, 241, 500);
console.log('largest is ', largest);


// console.log('largest is ', max);

