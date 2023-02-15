// let luong = 19;
// let rank = (luong > 80) ? 
//     "Bậc 7" : (luong > 52) ?
//     "Bậc 6" : (luong > 32) ?
//     "Bậc 5" : (luong > 18) ?
//     "Bậc 4" : (luong > 10) ?
//     "Bậc 3" : (luong > 5) ?
//     "Bậc 2" : (luong <= 5) ?
//     "Bậc 1" : "";
//     console.log(rank)
let luong;
switch (true) {
    case luong > 80: {
        console.log("Bậc 7");
        break
    }
    case luong > 52: {
        console.log("Bậc 6");
        break
    }
    case luong > 32: {
        console.log("Bậc 5");
        break
    }
    case luong > 18: {
        console.log("Bậc 4");
        break
    }
    case luong > 10: {
        console.log("Bậc 3");
        break
    }
    case luong > 5: {
        console.log("Bậc 2");
        break
    }
    case luong <= 5 && luong >= 0: {
        console.log("Bậc 1");
        break
    }
    default:                     {
        console.log("Mời nhập lại");
        break
    }  
}
