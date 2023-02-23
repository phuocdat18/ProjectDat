let number = [4, 5, 7, 1, 6];
// bài 3 Hàm thiển thị các số nguyên tố của mảng;
// function checkPrime(number) {
//     for (let i = 0; i < number.length; i++) {
//         if (number[i] <= 1) {
//             console.log(`${number[i]} không phải là số nguyên tố`);
//             prime = false;
//         } else {
//             let prime = true;
//             for (let j = 2; j < number[i]; j++) {
//                 if (number[i] % j == 0) {
//                     prime = false;
//                 }
//             }
//             if (prime == true) {
//                 console.log(`${number[i]} là số nguyên tố`);
//                 prime = true;
//             } else {
//                 console.log(`${number[i]} không phải là số nguyên tố`);
//                 prime = false;
//             }
//         }
//     }
// }
// checkPrime(number);




// Bài 10: Hàm thêm 1 giá trị vào vị trí cuối cùng của mảng.
// var number10 = [4, 5, 7, 1, 6];
// number10.push(5);
// console.log(number1);

//Bài 9: Hàm tìm vị trí của 1 số trong mảng, nếu không tìm thấy trả về -1
// let num = 656;
// let number9 = [4, 5, 7, 1, 6];
// for ( let i = 0; i < number9.length; i++) {
//     if(num == number9[i]) {
//         console.log(` Số ${number9[i]} nằm ở vị trí ${i}`);
//     } else {
//         console.log(` Không có số ${num}`);
//         break;
//     } 
// }

//Bài 8: Hàm Join các phần tử theo 1 chuỗi kí tự nhập vào
// let number8 = [4, 5, 7, 1, 6];
// console.log(number8.join("*,+-*/"));

//Bài 7: Hàm đảo ngược mảng
// let number7 = [4, 5, 7, 1, 6];
// console.log(number7.reverse());

//Bài 6: Hàm nối 1 mảng khác
// let number6 = [4, 5, 7, 1, 6];
// number6.splice(2,"5","7")

//Bài 1: Hàm tính tổng các giá trị trong mảng;
var arr1 = [4, 5, 7, 1, 6];
function sumArr(arr1) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    return sum;
}
let result1 = sumArr(arr1);
console.log((` Bài 1: Tổng các giá trị trong mảng là ${result1}`));

//Bài 2: Hàm hiển thị các số chẵn trong mảng
var arr2 = [4, 5, 7, 1, 6];
// function displayEven(array) {
//     let display = "";
//     for (let i = 0; i < arr2.length; i++) {
//         if (arr2[i] % 2 == 0) {
//             display += arr2[i] + " ";
//         }
//     }
//     return display;
// }
// let result2 = displayEven(arr2);
// console.log(` Bài 2: Các số chẵn trong mảng là ${result2}`);

function displayEven(arr2) {
    let i = 0;
    while ( i<arr2.length) {
        if(arr2[i]%2==0) {
            console.log(`  ${arr2[i]} là số chẵn`);
        }
        i++;
    }
}
displayEven(arr2);


// bài 3 Hàm thiển thị các số nguyên tố của mảng;
// let arr3 = [4, 5, 7, 1, 6];
// function checkPrime(arr3) {
//     for (let i = 0; i < arr3.length; i++) {
//         if (arr3[i] <= 1) {
//             console.log(`${arr3[i]} không phải là số nguyên tố`);
//             prime = false;
//         } else {
//             let prime = true;
//             for (let j = 2; j < arr3[i]; j++) {
//                 if (arr3[i] % j == 0) {
//                     prime = false;
//                 }
//             }
//             if (prime == true) {
//                 console.log(`${arr3[i]} là số nguyên tố`);
//             } else {
//                 console.log(`${arr3[i]} không phải là số nguyên tố`);
//             }
//         }
//     }
// }
// checkPrime(arr3);


// Bài 4: Hàm tìm giá trị lớn nhất của mảng
var arr4 = [4, 5, 7, 1, 6];
function maxArr(arr4) {
    let max = arr4[0];
    for(let i = 0; i < arr4.length; i++) {
        if ( arr4[i] > max) {
            max = arr4[i];
        }
    }
    return max;
}
let result4 = maxArr(arr4);
console.log(` Bài 4: giá trị lớn nhất của mảng là ${result4}`);

// Bài 5: Hàm tìm giá trị nhỏ nhất của mảng
var arr5 = [4, 5, 7, 1, 6];
function minArr(arr5) {
    let min = arr5[0];
    for(let i = 1; i < arr5.length; i++) {
        if ( arr5[i] < min) {
            min = arr5[i];
        }
    }
    return min;
}
// let result5 = minArr(arr5);
console.log(` Bài 5: giá trị nhỏ nhất của mảng là ${minArr(arr5)}`);

// Bài 6: Hàm nối 1 mảng khác:
var arr5 = [4, 5, 7, 1, 6];
let arr6 = [2, 3, 8];
// function connecArr(arr5, arr6) {
//     let connec = arr5.concat(arr6);
//     return connec;
// }
// let result6 = connecArr(arr5, arr6);
// console.log(` Bài 6: Mảng sau khi nối là ${result6}`);
function concatArr(array1, array2) {
    for( let i=0; i<array2.length; i++) {
        array1.push(array2[i]);
    }
    return array1;
}
// let arrConnec = concatArr(arr5, arr6);
console.log(concatArr(arr5, arr6));
// console.log(arrConnec);
// console.log(arr5);


// // Bài 7: Hàm đảo ngược mảng
var arr7 = [4, 5, 7, 1, 6];
function reverseArr(arr7) {
    for( let i = 0; i<arr7.length/2; i++) {
        let temp = arr7[i];
        arr7[i]= arr7[arr7.length-1-i];
        arr7[arr7.length-1-i]= temp;
    }
    return arr7;
}
let result7 = reverseArr(arr7);
console.log(` Bài 7: Mảng sau khi đảo ngược là ${result7} `);

// // Bài 8: Hàm Join các phần tử theo 1 chuỗi kí tự nhập vào:
// console.log(number8.join("*"));
let number8 =[4, 5, 7, 1, 6];
function joinElementsBySeparator(seperator) {
    let str = "";
    for(let i =0; i< number8.length; i++) {
        str = str + number8[i];
        if(i!=number8.length-1) {
            str += seperator;
        }
    }
    return str;
}
console.log(` Bài 8: Hàm sau khi chuyển đổi là ${joinElementsBySeparator("*")}`);

// Bài 9: Hàm tìm vị trí của một số trong mảng, nếu không tìm thấy trả về -1
let number9 =[4, 5, 7, 1, 6];
function findNumber(arr9, number9) {
    let position = 0;
    let count = 0;
    let display = ""
    for( let i = 0; i<number9.length; i++) {
        if(number9[i] == arr9) {
            position = i;
            display += `${arr9} có vị trí thứ ${position} trong mảng\n`;
            count += 1;
        }
    }
    if(count > 0) {
        return displayEven;
    } else {
        return "-1";
    }
}
let result9 = findNumber(2,number9);
console.log(`Bài 9:\n${result9}`);

// Bài 10: Hàm thêm 1 giá trị vào vị trí cuối cùng của mảng
let number10 =[4, 5, 7, 1, 6];
let array10 =[10, 5, 2, 9, 1];
function pushNumber(array10, number10) {
    number10.push(array10);
    return number10;
}
let result10 = pushNumber(array10,number10);
console.log(` Bài 10: Hàm sau khi thêm số 10 là ${result10}`);










// let arr3 = [4, 5, 7, 1, 6];
// function checkPrime(arr3) {
//     for (let i = 0; i < arr3.length; i++) {
//         if (arr3[i] <= 1) {
//             console.log(`${arr3[i]} không phải là số nguyên tố`);
//             prime = false;
//         } else {
//             let prime = true;
//             for (let j = 2; j < arr3[i]; j++) {
//                 if (arr3[i] % j == 0) {
//                     prime = false;
//                 }
//             }
//             if (prime == true) {
//                 console.log(`${arr3[i]} là số nguyên tố`);
//             } else {
//                 console.log(`${arr3[i]} không phải là số nguyên tố`);
//             }
//         }
//     }
// }
// checkPrime(arr3);

