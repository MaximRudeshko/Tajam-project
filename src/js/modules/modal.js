const bindTriggers = (triggersSelector, modalSelector, closeSelector, contentSelector) => {
    const triggers = document.querySelectorAll(triggersSelector),
      modal = document.querySelector(modalSelector),
      closeBtn = document.querySelector(closeSelector),
      content = document.querySelector(contentSelector)


    triggers.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            modal.style.opacity = 1;
            modal.style.visibility = 'visible';
            content.style.transform = 'translateY(0)';
            document.body.style.overflow = 'hidden' 
        })
    })

    closeBtn.addEventListener('click', () => {
        modal.style.opacity = 0;
        modal.style.visibility = 'hidden'
        document.body.style.overflow = '' 
    })

    modal.addEventListener('click', e => {
        if(e.target == modal){
            modal.style.opacity = 0;
            modal.style.visibility = 'hidden'
            document.body.style.overflow = ''
        }
    })
}

bindTriggers('.header-content__btn', '.popup', '.popup__close', '.popup__form');
bindTriggers('.story__btn', '.popup', '.popup__close', '.popup__form')
bindTriggers('.team__btn', '.popup', '.popup__close', '.popup__form')