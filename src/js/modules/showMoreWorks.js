const showMoreCard = () => {
    const cards = document.getElementById('more-works'),
          trigger = document.getElementById('works-btn'),
          works = document.querySelector('.works__content'),
          spinner = document.createElement('img');

        trigger.addEventListener('click', function(){
        
        spinner.setAttribute('src', './assets/img/spinner.gif')
        spinner.style.cssText = `
            height: 50px;
            width:50px;
            margin: 0 auto;
        `
        works.appendChild(spinner)
        this.remove()

        setTimeout(() => {
            spinner.remove()
            cards.style.display = 'flex';
        },2000)
    })
}

showMoreCard()