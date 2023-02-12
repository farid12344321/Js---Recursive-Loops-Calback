"use strict"


// function getNumbers(num){

//     console.log(num);

//    let number = num -1;

//    if(number > 0){
//     getNumbers(number);
//    }
// }

// getNumbers(10);


// function sumOfNums(n) {
//     let sum = 0;
//     for (let i = 0; i < n; i++) {
//         sum += i
//     }

//     console.log(sum)
// }

// sumOfNums(5);



// function sumOfNums(num){

//     if(num == 1){
//         return num;
//     }
//     else{
//         return num + sumOfNums(num - 1);
//     }

// }
// console.log(sumOfNums(5))




// let numbers =[11,4,6,8,9];

// numbers.forEach(element =>{
//     console.log(element)

// });


// let numbers =[11,4,6,8,9];

// numbers.forEach((element,index) =>{
//     console.log(index)

// });


// let numbers =[11,4,6,8,9];

// numbers.forEach((element,index,arr) =>{
//     console.log(arr)

// });



// let numbers = [11, 4, 6, 8, 9];

// numbers.forEach((element, index,arr) => {
//     arr[index] =element*2


// });

// console.log(numbers)




// for (const item of numbers) {
//     console.log(item);
// }



let user1 ={
    id:1,
    name:"Mirze",
    surname:"Basirzade"
}

let user2 ={
    id:2,
    name:"Cinare",
    surname:"Ibadova"
}

let user3 ={
    id:3,
    name:"Elekber",
    surname:"Hesenov"
}

let users =[user1,user2,user3]



for (const user of users) {
    // console.log(user.name +"-"+ user.surname);

    for (const key in user) {
        console.log(`key : ${key} ,value: ${user[key]}`)
    }
}