const xeList = document.getElementById('xe-list');
        const form = document.querySelector('form');
        const nameInput = document.getElementById('name');
        const priceInput = document.getElementById('price');
        const descInput = document.getElementById('description');
        const imageInput = document.getElementById('image');

        const xeData = [
            {
                name: 'Honda SH',
                price: '50.000.000 VNĐ',
                description: 'Xe máy thể thao phong cách thời trang',
                image: src = `image/shtrang.png`
            },
            {
                name: 'Yamaha Exciter',
                price: '45.000.000 VNĐ',
                description: 'Xe máy đua cao cấp',
                image: src="image/exiter.png"
            },
            {
                name: 'Suzuki Raider',
                price: '40.000.000 VNĐ',
                description: 'Xe máy thể thao phong cách thời trang',
                image: src="image/suzuki.png"
            },
            {
                name: 'Kawasaki Z1000',
                price: '120.000.000 VNĐ',
                description: 'Xe máy đua cao cấp',
                image: src="image/kawasaki.png"
            }
        ];

        function renderXeList() {
            xeList.innerHTML = '';
            for (let i = 0; i < xeData.length; i++) {
                var xe = xeData[i];
                var li = document.createElement('li');
                var img = document.createElement('img');
                var name = document.createElement('h3');
                var price = document.createElement('p');
                var desc = document.createElement('p');
                img.src = xe.image;
                name.textContent = xe.name;
                price.textContent = xe.price;
                desc.textContent = xe.description;
                li.appendChild(img);
                li.appendChild(name);
                li.appendChild(price);
                li.appendChild(desc);
                xeList.appendChild(li);
            }
        }

        renderXeList();

        form.addEventListener('submit', (event) => {
            event.preventDefault();
             xe = {
                name: nameInput.value,
                price: priceInput.value,
                description: descInput.value,
                image: src= imageInput.value

            };
            console.log(xe.image);
            xeData.push(xe);
            renderXeList();
            form.reset();
        });