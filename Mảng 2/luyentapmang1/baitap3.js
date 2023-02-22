let numbers = [5,12,7,15,9,11,18,3,6,10];
let max = numbers[0];

for (let i =0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
let average = sum/numbers.length;
console.log(` Phần tử lớn nhất trong mảng là ${max}`);
console.log(`Trung bình tổng của các phần tử trong bảng là ${average}`);