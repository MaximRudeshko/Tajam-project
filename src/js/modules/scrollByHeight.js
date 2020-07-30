const upElem = document.getElementById('up')

window.addEventListener('scroll', () => {
    if(window.pageYOffset >= 1000){
        upElem.style.visibility = 'visible'
        upElem.style.opacity = 1
    }else{
        upElem.style.visibility = 'hidden'
        upElem.style.opacity = 0
    }
})

const links = document.querySelectorAll('[href^="#"]'),
      speed = 0.5

    links.forEach(item => {
    item.addEventListener('click', function(e){
        e.preventDefault();

        let scrollTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;

        requestAnimationFrame(step);

        function step(time){
            if(start === null){
                start = time
            }

            let progress = time - start,
                r =  toBlock < 0 ? Math.max(scrollTop - progress / speed, toBlock + scrollTop): Math.min(scrollTop + progress / speed, toBlock + scrollTop);

            document.documentElement.scrollTo(0, r);

            if(r !== toBlock + scrollTop){
                requestAnimationFrame(step)
            }else{
                location.href = hash;
            }
        }
    })
})
