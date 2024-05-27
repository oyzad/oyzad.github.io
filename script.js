document.addEventListener('DOMContentLoaded', () => {
    const stickGallery = document.getElementById('stickGallery');
    const sticks = [
        {name: 'Stick 1', price: '$100', image: 'stick1.jpg'},
        {name: 'Stick 2', price: '$150', image: 'stick2.jpg'},
        {name: 'Stick 3', price: '$200', image: 'stick3.jpg'},
    ];

    sticks.forEach(stick => {
        const stickDiv = document.createElement('div');
        stickDiv.innerHTML = `
            <h3>${stick.name}</h3>
            <p>${stick.price}</p>
            <img src="images/${stick.image}" alt="${stick.name}">
        `;
        stickGallery.appendChild(stickDiv);
    });

    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submitted!');
    });
});
