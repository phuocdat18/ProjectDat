// var changeImage1 = src = `image/matbai.png`;
// var changeImage2 = src = `image/matbai.png`;
// var changeImage3 = src = `image/matbai.png`;
var changeImage1 = src = null;
var changeImage2 = src = null;
var changeImage3 = src = null;

// const myButton = document.querySelector('#myButton'); // Lấy thẻ button có id="myButton"
// const myTable = document.querySelector('#myTable'); // Lấy thẻ table có id="myTable"

// myButton.addEventListener('playNewGame', function () {
//     myTable.innerHTML = myTable.innerHTML; // Gán lại nội dung của table để khởi động lại
// });




// var myButton = document.querySelector("#myButton");
// myButton.addEventListener("click", function () {
//     var myTable1 = document.querySelector("#myTable1");
//     var cells1 = myTable1.querySelectorAll("td");
//     cells1.forEach(function (cell1) {
//         cell1.classList.remove("animate__animated", "animate__fadeInDown");
//         // cell1.querySelector.remove("img:nth-of-type(1)").src = `image/${idCards[3][0].id}.png`;
//         // cell1.querySelector.remove("img:nth-of-type(2)").src = `image/${idCards[4][0].id}.png`;
//         // cell1.querySelector.remove("img:nth-of-type(3)").src = `image/${idCards[5][0].id}.png`;
//     });
//     void myTable1.offsetWidth;
//     cells1.forEach(function (cell1) {

//         cell1.classList.add("animate__animated", "animate__fadeInDown");
//         cell1.querySelector("img:nth-of-type(1)").src = "image/matbai.png";
//         cell1.querySelector("img:nth-of-type(2)").src = "image/matbai.png";
//         cell1.querySelector("img:nth-of-type(3)").src = "image/matbai.png";
//         document.getElementById("yourname").innerHTML = name + ": ";

//     });
// });
let name = prompt("Nhập tên của bạn:");
let myCell = document.getElementById("yourname");
myCell.innerHTML = name;

Swal.fire({
    background: '#660000',
    color: '#FFFFFF',
    title: 'Lưu ý',
    text: "Đánh bạc là một hình thức đánh động tài sản  và có thể gây hại cho sức khỏe và tài chính của một người. Chúng tôi khuyến khích việc tham gia vào các hoạt động giải trí an toàn và có ít rủi ro hơn, và tôn trọng các quy định pháp luật về trò chơi và đánh bạc.",
    icon: 'question',
    iconHtml: '!',
    confirmButtonText: 'Tiếp tục',
    cancelButtonText: 'Dừng lại',
    showCancelButton: true,
    showCloseButton: true
})
    .then((result) => {
        if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                'Đã dừng lại',
                'Bạn đã có 1 lựa chọn dũng cảm.',
                'success'
            ).then(() => {
                window.close();
            });
        }
    })



function Card(id, name, type, point) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.point = point

    this.getId = function () {
        return this.id;
    }
}


function Player(id, point) {
    this.id = id;
    this.point = point;
    this.playerCards = [];
}
let MAX_CARD_ID = 44;
let MIN_CARD_ID = 1;
let idCards = [];
function Table() {
    this.cards = [];
    this.players = [];


    this.findCardRandom = function () {
        let checkRandomCard = true;
        let idRandomCard;
        do {
            idRandomCard = Math.round(Math.random() * (MAX_CARD_ID - MIN_CARD_ID) + MIN_CARD_ID);
            if (this.checkCardIdExists(idRandomCard) == false) {
                checkRandomCard = true;
            } else {
                checkRandomCard = false;
            }
        } while (checkRandomCard);

        let indexCard = this.cards.findIndex((card) => {
            return card.getId() == idRandomCard;
        });
        let cardPlayer = this.cards.splice(indexCard, 1);
        return cardPlayer;

    }
    this.checkCardIdExists = function (id) {
        for (let i = 0; i < this.cards.length; i++) {
            if (this.cards[i].getId() == id) {
                return true;
            }
        }
        return false;
    }
    this.initCards = function () {
        let card1K = new Card(1, "A", "K", 1);
        let card1R = new Card(2, "A", "R", 1);
        let card1C = new Card(3, "A", "C", 1);
        let card1B = new Card(4, "A", "B", 1);

        let card2K = new Card(5, "2", "K", 2);
        let card2R = new Card(6, "2", "R", 2);
        let card2C = new Card(7, "2", "C", 2);
        let card2B = new Card(8, "2", "B", 2);

        let card3K = new Card(9, "3", "K", 3);
        let card3R = new Card(10, "3", "R", 3);
        let card3C = new Card(11, "3", "C", 3);
        let card3B = new Card(12, "3", "B", 3);

        let card4K = new Card(13, "4", "K", 4);
        let card4R = new Card(14, "4", "R", 4);
        let card4C = new Card(15, "4", "C", 4);
        let card4B = new Card(16, "4", "B", 4);

        let card5K = new Card(17, "5", "K", 5);
        let card5R = new Card(18, "5", "R", 5);
        let card5C = new Card(19, "5", "C", 5);
        let card5B = new Card(20, "5", "B", 5);

        let card6K = new Card(21, "6", "K", 6);
        let card6R = new Card(22, "6", "R", 6);
        let card6C = new Card(23, "6", "C", 6);
        let card6B = new Card(24, "6", "B", 6);

        let card7K = new Card(25, "7", "K", 7);
        let card7R = new Card(26, "7", "R", 7);
        let card7C = new Card(27, "7", "C", 7);
        let card7B = new Card(28, "7", "B", 7);

        let card8K = new Card(29, "8", "K", 8);
        let card8R = new Card(30, "8", "R", 8);
        let card8C = new Card(31, "8", "C", 8);
        let card8B = new Card(32, "8", "B", 8);

        let card9K = new Card(33, "9", "K", 9);
        let card9R = new Card(34, "9", "R", 9);
        let card9C = new Card(35, "9", "C", 9);
        let card9B = new Card(36, "9", "B", 9);

        let card10K = new Card(37, "10", "K", 10);
        let card10R = new Card(38, "10", "R", 10);
        let card10C = new Card(39, "10", "C", 10);
        let card10B = new Card(40, "10", "B", 10);

        let cardJK = new Card(41, "J", "K", 10);
        let cardJR = new Card(42, "J", "R", 10);
        let cardJC = new Card(43, "J", "C", 10);
        let cardJB = new Card(44, "J", "B", 10);

        // let cardQK = new Card(45, "Q", "K", 10);
        // let cardQR = new Card(46, "Q", "R", 10);
        // let cardQC = new Card(47, "Q", "C", 10);
        // let cardQB = new Card(48, "Q", "B", 10);

        // let cardKK = new Card(49, "K", "K", 10);
        // let cardKR = new Card(50, "K", "R", 10);
        // let cardKC = new Card(51, "K", "C", 10);
        // let cardKB = new Card(52, "K", "B", 10);




        this.cards.push(card1K)
        this.cards.push(card1R)
        this.cards.push(card1C)
        this.cards.push(card1B)

        this.cards.push(card2K)
        this.cards.push(card2R)
        this.cards.push(card2C)
        this.cards.push(card2B);

        this.cards.push(card3K)
        this.cards.push(card3R)
        this.cards.push(card3C)
        this.cards.push(card3B);

        this.cards.push(card4K)
        this.cards.push(card4R)
        this.cards.push(card4C)
        this.cards.push(card4B);

        this.cards.push(card5K)
        this.cards.push(card5R)
        this.cards.push(card5C)
        this.cards.push(card5B);

        this.cards.push(card6K)
        this.cards.push(card6R)
        this.cards.push(card6C)
        this.cards.push(card6B);

        this.cards.push(card7K)
        this.cards.push(card7R)
        this.cards.push(card7C)
        this.cards.push(card7B);

        this.cards.push(card8K)
        this.cards.push(card8R)
        this.cards.push(card8C)
        this.cards.push(card8B);

        this.cards.push(card9K)
        this.cards.push(card9R)
        this.cards.push(card9C)
        this.cards.push(card9B);

        this.cards.push(card10K)
        this.cards.push(card10R)
        this.cards.push(card10C)
        this.cards.push(card10B);


        this.cards.push(cardJK)
        this.cards.push(cardJR)
        this.cards.push(cardJC)
        this.cards.push(cardJB);

        // this.cards.push(cardQK)
        // this.cards.push(cardQR)
        // this.cards.push(cardQC)
        // this.cards.push(cardQB);

        // this.cards.push(cardKK)
        // this.cards.push(cardKR)
        // this.cards.push(cardKC)
        // this.cards.push(cardKB);


        let p1 = new Player(1, 0);
        let p2 = new Player(2, 0);
        let p3 = new Player(3, 0);

        this.players.push(p1, p2, p3)

    }


    this.draw = function () {
        for (let i = 0; i < this.players.length; i++) {
            console.log(`Nguoi choi ${this.players[i].id}`);
            for (let j = 0; j < this.players[i].playerCards.length; j++) {
                console.log(this.players[i].playerCards[j]);
                let id = this.players[i].playerCards[j]
                idCards.push(this.players[i].playerCards[j]);

            }
        }
    }


    this.random = function () {
        for (let i = 0; i < this.players.length; i++) {
            // this.players[i].cards.length
            for (let j = 0; j < 3; j++) {
                let cardPlayer = this.findCardRandom();

                this.players[i].playerCards.push(cardPlayer);
            }
        }


    }
}

let table = new Table();
table.initCards();
table.random();
table.draw();

function changeImage_1() {
    const score = document.querySelector("#score");
    const betAmount = document.querySelector("#bet-amount");
    const result = document.querySelector("#result");

    let currentScore = 1000;
    const bet = parseInt(betAmount.value);
    if (isNaN(bet) || bet < 50 || bet > 500) {
        alert("Vui lòng nhập số tiền đặt cược từ 50 đến 500.");
        return;
    }
    document.getElementById("changeImage1").src = `image/${idCards[3][0].id}.png`;
    latbai = false
    let num1 = idCards[3][0].point
    return num1

}
function changeImage_2() {
    const score = document.querySelector("#score");
    const betAmount = document.querySelector("#bet-amount");
    const result = document.querySelector("#result");

    let currentScore = 1000;
    const bet = parseInt(betAmount.value);
    if (isNaN(bet) || bet < 50 || bet > 500) {
        alert("Vui lòng nhập số tiền đặt cược từ 50 đến 500.");
        return;
    }
    document.getElementById("changeImage2").src = `image/${idCards[4][0].id}.png`;
    let num2 = idCards[4][0].point
    return num2
}
function changeImage_3() {


    const score = document.querySelector("#score");
    const betAmount = document.querySelector("#bet-amount");
    const result = document.querySelector("#result");

    let currentScore = 1000;
    const bet = parseInt(betAmount.value);
    if (isNaN(bet) || bet < 50 || bet > 500) {
        alert("Vui lòng nhập số tiền đặt cược từ 50 đến 500.");
        return;
    }
    document.getElementById("changeImage3").src = `image/${idCards[5][0].id}.png`;
    let sum1 = 0;
    sum1 = idCards[3][0].point + idCards[4][0].point + idCards[5][0].point;
    let sumNumber1 = sum1 % 10;

    document.getElementById("yourname").innerHTML = name + ": " + sumNumber1 + " Điểm";
    return sumNumber1
}
// var cards = ['image/matbai.png', 'image/matbai.png', 'image/matbai.png'];

// // Lấy các phần tử trong HTML
// var cards1 = document.getElementById('changeImage1');
// var cards2 = document.getElementById('changeImage2');
// var cards3 = document.getElementById('changeImage3');
// var myButton = document.getElementById('myButton');
// function onclickCard1(event) {
//     var id = event.target.id;
//     var newCard = table();
//     event.target.style.backgroundImage = src = `image/${idCards[3][0].id}.png`;
//     cards.splice(cards.indexOf(newCard), 1);


// }











function check() {
    // this.sumNumber1 = sumNumber1;
    // this.sumNumber2 = sumNumber2;
    // this.sumNumber3 = sumNumber3;
    // this.getSumNumber1 = function () {
    //     return this.sumNumber1;
    // }
    // this.setSumNumber1 = function (sumNumber1) {
    //     this.nsumNumber1 = sumNumber1;
    // }
    // this.getSumNumber2 = function () {
    //     return this.sumNumber2;
    // }
    // this.setSumNumber2 = function (sumNumber2) {
    //     this.nsumNumber2 = sumNumber2;
    // }
    // this.getSumNumber3 = function () {
    //     return this.sumNumber3;
    // }
    // this.setSumNumber3 = function (sumNumber3) {
    //     this.nsumNumber3 = sumNumber3;
    // }
    const score = document.querySelector("#score");
    const betAmount = document.querySelector("#bet-amount");
    const result = document.querySelector("#result");

    let currentScore = 1000;
    const bet = parseInt(betAmount.value);
    if (isNaN(bet) || bet < 50 || bet > 500) {
        alert("Vui lòng nhập số tiền đặt cược từ 50 đến 500.");
        return;
    }


    document.getElementById("changeImage_4").src = `image/${idCards[0][0].id}.png`;
    document.getElementById("changeImage_5").src = `image/${idCards[1][0].id}.png`;
    document.getElementById("changeImage_6").src = `image/${idCards[2][0].id}.png`;
    document.getElementById("changeImage_7").src = `image/${idCards[6][0].id}.png`;
    document.getElementById("changeImage_8").src = `image/${idCards[7][0].id}.png`;
    document.getElementById("changeImage_9").src = `image/${idCards[8][0].id}.png`;
    let sum2 = 0;
    let sum3 = 0;
    sum2 = idCards[0][0].point + idCards[1][0].point + idCards[2][0].point;
    let sumNumber2 = sum2 % 10;
    document.getElementById("player2").innerHTML = "Người chơi 2: " + sumNumber2 + " Điểm";
    sum3 = idCards[6][0].point + idCards[7][0].point + idCards[8][0].point;
    let sumNumber3 = sum3 % 10;
    document.getElementById("player3").innerHTML = "Người chơi 3: " + sumNumber3 + " Điểm";
    let num1 = changeImage_1();
    let num2 = changeImage_2();
    let sumNumber1 = changeImage_3();


    console.log(sumNumber1);
    console.log(sumNumber2);
    console.log(sumNumber3);






    if (sumNumber1 > sumNumber2) {
        if (sumNumber1 > sumNumber3) {
            var audio = document.getElementById("winsound");
            audio.play();
            currentScore += bet;
            // result.innerText = `Bạn đã thắng ${bet} điểm!`;
            Swal.fire({
                width: 600,
                padding: '3em',
                color: '#716add',
                background: '#fff url(image/youwin.png)',
                backdrop: `rgba(0,0,123,0.4) 
                    url("/images/nyan-cat.gif") 
                    left top 
                    no-repeat
                     `





            })
        } else {

            var audio = document.getElementById("losesound");
            audio.play();
            currentScore -= bet;
            // result.innerText = `Bạn đã thua ${bet} điểm!`;
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: `Bạn đã thua ${bet} điểm!`,
                showConfirmButton: false,
                timer: 3000
            })
        }
    } else if (sumNumber1 < sumNumber2) {
        if (sumNumber1 > sumNumber3) {

            var audio = document.getElementById("losesound");
            audio.play();
            currentScore -= bet;
            // result.innerText = `Bạn đã thua ${bet} điểm!`;
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: `Bạn đã thua ${bet} điểm!`,
                showConfirmButton: false,
                timer: 3000
            })
        } else {

            var audio = document.getElementById("losesound");
            audio.play();
            currentScore -= bet;
            // result.innerText = `Bạn đã thua ${bet} điểm!`;
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: `Bạn đã thua ${bet} điểm!`,
                showConfirmButton: false,
                timer: 3000
            })
        }
    } else if (sumNumber1 < sumNumber3) {
        if (sumNumber1 < sumNumber2) {

            var audio = document.getElementById("losesound");
            audio.play();
            currentScore -= bet;
            // result.innerText = `Bạn đã thua ${bet} điểm!`;
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: `Bạn đã thua ${bet} điểm!`,
                showConfirmButton: false,
                timer: 3000
            })
        } else {

            var audio = document.getElementById("losesound");
            audio.play();
            currentScore -= bet;
            // result.innerText = `Bạn đã thua ${bet} điểm!`;
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: `Bạn đã thua ${bet} điểm!`,
                showConfirmButton: false,
                timer: 3000
            })
        }
    } else if (sumNumber1 == sumNumber2 || sumNumber1 == sumNumber3) {
        alert("Mời bạn chơi lại");
        var audio = document.getElementById("cardsound");
        audio.play();
    }


    score.innerText = currentScore;
    if (currentScore <= 0) {
        alert("Bạn đã thua trò chơi!");
        currentScore = 0;
        score.innerText = currentScore;
    }

}



function playNewGame() {



    // changeImage1 = null
    // changeImage2 = null
    // changeImage3 = null
    document.getElementById("changeImage1").src = `image/matbai.png`;
    document.getElementById("changeImage2").src = `image/matbai.png`;
    document.getElementById("changeImage3").src = `image/matbai.png`;
    document.getElementById("changeImage_4").src = `image/matbai.png`;
    document.getElementById("changeImage_5").src = `image/matbai.png`;
    document.getElementById("changeImage_6").src = `image/matbai.png`;
    document.getElementById("changeImage_7").src = `image/matbai.png`;
    document.getElementById("changeImage_8").src = `image/matbai.png`;
    document.getElementById("changeImage_9").src = `image/matbai.png`;
    document.getElementById("yourname").innerHTML = name + ": ";
    document.getElementById("player2").innerHTML = "Người chơi 2: ";
    document.getElementById("player3").innerHTML = "Người chơi 3: ";

    // var changeImage1 = src = `image/matbai.png`;
    // var changeImage2 = src = `image/matbai.png`;
    // var changeImage3 = src = `image/matbai.png`;


}

// const depositButton = document.getElementById("naptien");

// depositButton.addEventListener("click", function () {
//     window.location.href = "https://example.com";
// });


function money() {
    // Swal.fire({
    //     title: 'Sweet!',
    //     text: 'Modal with a custom image.',
    //     imageUrl: src = `image/naptien.png`,
    //     imageWidth: 400,
    //     imageHeight: 500,
    //     imageAlt: 'Custom image',
    // })

    // (async () => {

    //     /* inputOptions can be an object or Promise */
    //     const inputOptions = new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve({
    //                 '#ff0000': 'Red',
    //                 '#00ff00': 'Green',
    //                 '#0000ff': 'Blue'
    //             })
    //         }, 1000)
    //     })

    //     const { value: color } = await Swal.fire({
    //         title: 'Select color',
    //         input: 'radio',
    //         inputOptions: inputOptions,
    //         inputValidator: (value) => {
    //             if (!value) {
    //                 return 'You need to choose something!'
    //             }
    //         }
    //     })

    //     if (color) {
    //         Swal.fire({ html: `You selected: ${color}` })
    //     }

    // })()

    (async () => {

        /* inputOptions can be an object or Promise */
        const inputOptions = new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    '#ff0000': '100.000đ',
                    '#00ff00': '200.000đ',
                    '#0000ff': '500.000đ'
                })
            }, 1000)
        })

        const { value: color } = await Swal.fire({
            title: 'Select color',
            input: 'radio',
            inputOptions: inputOptions,
            inputValidator: (value) => {
                if (!value) {
                    return 'Bạn cần chọn số tiền để nạp!'
                }
            }
        })

        if (color) {
            let imageUrl;
            if (color === '#ff0000') {
                imageUrl = 'image/naptien.png';
            } else if (color === '#00ff00') {
                imageUrl = 'image/naptien.png';
            } else if (color === '#0000ff') {
                imageUrl = 'image/naptien.png';
            }
            Swal.fire({
                title: 'Mời bạn quét mã QR để nạp tiền',
                html: `<img src="${imageUrl}" style="max-width: 400px; height: 500px;" />`
            })

        }

    })()


}


















// var myButton = document.querySelector("#myButton");
// myButton.addEventListener("click", function() {
//   var myTable1 = document.querySelector("#myTable1");
//   var myTable2 = document.querySelector("#myTable2");
//   var myTable3 = document.querySelector("#myTable3");
//   var cells1 = myTable1.querySelectorAll("td");
//   var cells2 = myTable2.querySelectorAll("td");
//   var cells3 = myTable3.querySelectorAll("td");
//   cells1.forEach(function(cell1) {
//     cell1.classList.remove("animate__animated", "animate__fadeInDown");
//   });
//   cells2.forEach(function(cell2) {
//     cell2.classList.remove("animate__animated", "animate__fadeInTopRight");
//   });
//   cells3.forEach(function(cell3) {
//     cell3.classList.remove("animate__animated", "animate__fadeInTopLeft");
//   });
//   void myTable1.offsetWidth;
//   cells1.forEach(function(cell1) {
//     cell1.classList.add("animate__animated", "animate__fadeInDown");
//     document.getElementById("yourname").innerHTML = name + ": ";
//   });
//   void myTable2.offsetWidth;
//   cells2.forEach(function(cell2) {
//     cell2.classList.add("animate__animated", "animate__fadeInTopRight");
//     document.getElementById("player2").innerHTML = "Người chơi 2: ";
//   });
//   void myTable3.offsetWidth;
//   cells3.forEach(function(cell3) {
//     cell3.classList.add("animate__animated", "animate__fadeInTopLeft");
//     document.getElementById("player3").innerHTML = "Người chơi 3: ";
//   });
// });









    // function changeImage_1() {
    //     let num1 = Math.ceil(Math.random() * 11);
    //     var properti = Math.ceil(Math.random() * 4);
    //     document.getElementById("changeImage_1").src = `image/${properti}${num1}.png`;
    //     r.setNumber1(num1);
    //     console.log(r.toString());

    // }






        //