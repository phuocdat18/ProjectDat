//Bài tập 3
let num31 = 6;
let num32 = 9;
let sum = 0;
function checkNumber(num31, num32) {
    if ( num31 > num32) {
        console.log(` Bài 3: Số ${num31} lớn hơn số ${num32}`);
    } else if(num31 < num32) {
        sum = num31 + num32;
        console.log(` Bài 3: Số ${num31} bé hơn số ${num32} \n Tổng của 2 số là ${sum}`);
    } else {
        console.log(` Bài 3: 2 số bằng nhau`);
    }
    }
checkNumber(num31, num32);


// Bài tập 4
function addNumbers() {
    firstNum = 4;
    secondNum = 8;
    result4 = firstNum + secondNum;
    return result4;
}
result4 = 0;
result4 = addNumbers(); 
console.log(` Bài 4: Tổng của 2 số là ${result4}`);


// Bài tập 5
let star1 = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"]
let star2 = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major"]
let star = "Dubhe"
function check_star(star) {
    let index_star1 = 0;
    let result5 = "";
    for (let i = 0; i < star1.length; i++) {
        if (star == star1[i]) {
            index_star1 = i;
            for (let j = 0; j < star2.length; j++) {
                if (index_star1 == j) {
                    result5 = `Chòm sao ${star2[j]}`;
                    return result5;
                } else {
                    result5 = "Không tìm thấy chòm sao"
                }
            }
        } else {
            result5 = "Không tìm thấy sao";
        }
    }
    return result5;
    
}
// check_star(star)
console.log(` Bài 5: Kết quả là ${check_star(star)}`);