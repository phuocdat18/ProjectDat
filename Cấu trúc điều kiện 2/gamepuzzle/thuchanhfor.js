let number = 10;
        if(number <2) {
            console.log(`${numuber} không phải số nguyên tố`);
        } else {
            if(number == 2) {
                console.log(`${numuber} là số nguyên tố`);
            }
            else {
                let i = 2;
                let isPrime = true;
                for (; i < number; i++) {
                    if(number % i ==0) {
                        console.log(`${number} không phải là số nguyên tố`);
                        isPrime = false;
                        break;
                    }
                }
                if(isPrime == true) {
                    console.log(`${number} là số nguyên tố`);
                }
            }
        }