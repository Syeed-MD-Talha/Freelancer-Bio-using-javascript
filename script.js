const customerImage = document.querySelector('#customer-img');
const customerName = document.querySelector('.customer-name');
const customerText = document.querySelector('.customer-text');
const btn = document.querySelectorAll('.btn');

const Card = [];

function Obj(img, name, bio) {
    this.img = `image/image${img}.jpeg`;
    this.name = name;
    this.bio = bio;
}

function Create(img, name, bio) {
    Card.push(new Obj(img, name, bio));
}

Create(1, 'Talha', 'Hey guys this is Talha. I am a very good and gentle person.');
Create(2, 'John', 'Hey guys this is Johny. I am a top-rated freelancer. I like to work with flutter development. I have made a lot of projects on flutter.');
Create(3, 'Moral', 'Hey guys this is Moral. I am a Cricketer. I used to play cricket. It is my hobby.');
Create(4, 'Tony', 'Hey guys this is Tony. I am very good at Robotics. I used to make robots.');
Create(5, 'Abdullah', 'Hey guys this is Abdullah. I am an artificial engineer.');

let inx = 0;

btn.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.parentElement.classList.contains('btn-next')) {
            inx = (inx + 1) % Card.length;
        }
        if (e.target.parentElement.classList.contains('btn-prev')) {
            inx = (inx + Card.length - 1) % Card.length;
        }
        e.preventDefault();
        customerImage.src = Card[inx].img;
        customerName.textContent = Card[inx].name;
        customerText.textContent = Card[inx].bio;
    });
});
