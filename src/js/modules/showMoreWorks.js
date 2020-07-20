const showMoreCard = () => {
    const cards = document.getElementById('more-works'),
          trigger = document.getElementById('works-btn');


    trigger.addEventListener('click', function(){
        console.log(cards, trigger)
        cards.style.display = 'flex';
        this.remove()
    })
}

showMoreCard()