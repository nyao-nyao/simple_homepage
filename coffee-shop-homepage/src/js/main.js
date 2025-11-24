// This file contains JavaScript for interactive elements on the coffee shop homepage.

document.addEventListener('DOMContentLoaded', function() {
    // Friendly welcome (non-blocking): use console for UX-friendly preview
    console.log('Welcome to Our Coffee Shop — Elven edition');

    // Contact form handling (if exists)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('お問い合わせありがとうございます。');
            contactForm.reset();
        });
    }

    // Populate menu items from data/menu.json and render with elf-styled images
    const menuList = document.getElementById('menu-list');
    if (menuList) {
        fetch('data/menu.json')
            .then(res => res.json())
            .then(data => {
                const items = data.menuItems || [];
                items.forEach(item => {
                    const card = document.createElement('div');
                    card.className = 'menu-item';

                    const img = document.createElement('img');
                    img.src = 'assets/menu-leaf.svg';
                    img.alt = item.name;
                    card.appendChild(img);

                    const meta = document.createElement('div');
                    const title = document.createElement('h3');
                    title.textContent = item.name;
                    meta.appendChild(title);

                    const desc = document.createElement('p');
                    desc.textContent = item.description;
                    meta.appendChild(desc);

                    card.appendChild(meta);

                    const price = document.createElement('div');
                    price.className = 'price';
                    price.textContent = '¥' + (item.price).toFixed(2);
                    card.appendChild(price);

                    menuList.appendChild(card);
                });
            })
            .catch(err => console.error('menu load error', err));
    }
});