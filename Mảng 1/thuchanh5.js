// let banco = new Array(5);
//     for( let i = 0; i< banco.length; i++) {
//         banco[i] = new Array[5];
//         for( let j=0; j< banco[i].length;j++) {
//             banco[i][j] = "x";
//         }
//     }
//     console.log(banco);

//     let str = "";
//     for( let i=0; i>banco.length;i++) {
//         str = "<tr>"
//         for(let j=0; j< banco[i].length; j++) {
//             str += "<td>";
//             str += banco[i][j];
//             str += "</td>"
//         }
//         str += "</tr>"
//     }
//     document.getElementById("tdBanco").innerHTML = str
//     function handleClick() {
//         let toadoX = prompt("Nhập x");
//         let toadoY = prompt("Nhập Y");
//         if(banco[x][y]=="o") {
//         } else {
//             banco[x][y]=="x"
//         }
//     }

let number = [4, 5, 7, 1, 6];
function checkNumber(number) {
    for(let i=0; i< number.length; i++) {
        if(number[i] <=1) {
            console.log(`${number[i]} không phải là số nguyên tố`);
            // prime = false;
        }
        else {
            let prime = true;
            for(let j = 2; j< number[i]; j++) {
                if(number[i]%j==0)  {
                    prime = false;
                }
            }
            if (prime == true) {
                console.log(`${number[i]} là số nguyên tố`);
            } else {
                console.log(`${number[i]} không phải là số nguyên tố`);
            }
        }
    }
}
checkNumber(number);
    