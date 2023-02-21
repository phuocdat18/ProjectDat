// bài 0: Tính tổng các số chẵn trong ma trận
let matrix = [
    [3, 1, 5, 4],
    [2, 7, 1, 8],
    [3, 5, 1, 6],
    [1, 2, 1, 2]
]

// let sum = 0;
// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         if (matrix[i][j] % 2 == 0) {
//             sum = sum + matrix[i][j];
//             break;
//         }
//     }
// }
// console.log(`Tổng ma trận là ${sum}`);

// let sum = 0;
// for (let i = 0; i < matrix.length; i++) {
//     let count = 0;
//     for (let j = 0; j < matrix[i].length; j++) {
//         if (matrix[i][j] % 2 == 0) {
//             count = count +1;
//             break;
//         }
//         if (count == 1) {
//             sum = sum + matrix[i][j];
//             break;
//         }
//     }
// }
// console.log(`Tổng ma trận là ${sum}`);

// Bài 1: Tính tổng giá trị tam giác trên bên trái
// let sum11 = 0;
// for(let i = 0; i < matrix.length; i++) {
//     for (let j =0; j <=i; j++) {
//         sum11 += matrix[i][j];
//     }
// console.log(`Tổng giá trị tam giác trên bên trái là ${sum11}`);
// }

let sum2 = 0;
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; i <= j < matrix[i].length; j++) {
        sum2 += matrix[i][j];
    }
}
console.log(`Tổng giá trị của tam giác dưới bên phải là ${sum2}`);
