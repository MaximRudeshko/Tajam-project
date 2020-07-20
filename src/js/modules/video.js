document.addEventListener('DOMContentLoaded', () => {
    const playVideo = () => {
        const modal = document.querySelector('.video__overlay'),
              playBtn = document.querySelector('.video__play'),
              close = document.querySelector('.close')

        let player
    

        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
        playBtn.addEventListener('click', e => {
            modal.style.display = 'flex'
            document.body.style.overflow = 'hidden'
            const path = e.target.getAttribute('data-play')
            console.log(e.target)
            createPlayer(path)
        })
    
        close.addEventListener('click', () => {
            modal.style.display = 'none'
            document.body.style.overflow = ''
            player.stopVideo()
        })
    
        function createPlayer(url){
                player = new YT.Player('player', {
                height: '360',
                width: '640',
                videoId: url
            })
        }
    
       
    
        
    }
    
    playVideo()
})

