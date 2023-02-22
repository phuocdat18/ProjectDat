let matrix = [
    [1, 10, 4, 4],
    [2, 7, 1, 8],
    [3, 5, 1, 6],
    [1, 2, 1, 2]
]
//Bài 0: Tính tổng các số chẵn trong ma trận
// let sum = 0;
// for (let i =0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         if (matrix[i][j] % 2 == 0) {
//             sum += matrix[i][j];
//         }
//     }
// }
// console.log(sum);

//Bài 01: Đếm các số lẻ trong ma trận
// let oddNumbers = 0;
// for (let i = 0; i < matrix.length; i++) {
//     for( let j =0; j < matrix[i].length; j++) {
//         if (matrix[i][j] % 2 != 0) {
//             oddNumbers += 1;
//         }
//     } 
// }
// console.log(` Có ${oddNumbers} số lẻ`);

//Bài 02: tìm vị trí [i][j] của số nguyên đầu tiên trong ma trân
let position2 = 0;
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] > 0) {
            for (let k = 2; k <= matrix[i][j]; k++) {
                if (matrix[i][j] % k == 0) {
                    if (matrix[i][j] % 2 != 0) {
                        if (matrix[i][j] % 3 != 0) {
                            console.log(`Số ${matrix[i][j]} là số nguyên tố đầu tiên ở vị trí i = ${i} và j = ${j}`);
                            break 
                        }
                        else position2 += 1;
                    }
                }
                if (matrix[i][j] == 2 || matrix[i][j] == 3) {
                    console.log(`Số ${matrix[i][j]} là số nguyên tố đầu tiên ở vị trí i = ${i} và j = ${j}`);
                    break;
                }
            }
        }
    }
}