const ModalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for(let card of cards){
    card.addEventListener('click' , function(){
        ModalOverlay.classList.add('actived');

        let name_Card = card.getAttribute('id');
        let title_Card = card.querySelector('.name-card').innerHTML;
        let autor_Card = card.querySelector('.autor-card').innerHTML;

        ModalOverlay.querySelector('#img-modal').src = `img/${name_Card}.png`;
        ModalOverlay.querySelector('#name-card').innerHTML = title_Card;
        ModalOverlay.querySelector('#name-autor').innerHTML  = autor_Card;

    })
}

document.querySelector('#close-modal').addEventListener('click' , function(){
    ModalOverlay.classList.remove('actived');   
})


