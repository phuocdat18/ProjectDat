// let number = [4, 5, 7, 1, 6];
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


//mẫu
// var a = [-3,5,1,3,2,10];
// console.log(a.reverse());

// Bài 10: Hàm thêm 1 giá trị vào vị trí cuối cùng của mảng.
// var number1 = [4, 5, 7, 1, 6];
// number1.push(5);
// console.log(number1);

//Bài 9: Hàm tìm vị trí của 1 số trong mảng, nếu không tìm thấy trả về -1
let num = 656;
let number9 = [4, 5, 7, 1, 6];
for ( let i = 0; i < number9.length; i++) {
    if(num == number9[i]) {
        console.log(` Số ${number9[i]} nằm ở vị trí ${i}`);
    } else {
        console.log(` Không có số ${num}`);
        break;
    } 
}










