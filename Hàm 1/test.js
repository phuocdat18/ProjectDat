// var a = [-3,5,1,3,2,10];
// console.log(a.reverse());
let number = [4, 5, 7, 1, 6];
function checkPrime(number) {
    for (let i = 0; i < number.length; i++) {
        if (number[i] <= 1) {
            console.log(`${number[i]} không phải là số nguyên tố`);
            prime = false;
        } else {
            let prime = true;
            for (let j = 2; j < number[i]; j++) {
                if (number[i] % j == 0) {
                    prime = false;
                }
            }
            if (prime == true) {
                console.log(`${number[i]} là số nguyên tố`);
                prime = true;
            } else {
                console.log(`${number[i]} không phải là số nguyên tố`);
                prime = false;
            }
        }
    }
}
checkPrime(number);