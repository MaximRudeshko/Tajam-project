const postData = async (url, data) => {
    let res =  await fetch(url, {
        method: 'POST',
        body:data
    })

    return await res.text()
}

const forms = (formSelector) => {
    const form = document.querySelector(formSelector)

    const messages = {
        ok: './assets/img/ok.png',
        failure: './assets/img/fail.png',
        spinner: './assets/img/spinner.gif',
        succes: 'Thanks, we will you call back soon:)',
        error: 'Something has gone wrong, please try again:('
    }


    form.addEventListener('submit', e => {
        e.preventDefault()

        let statusMessage = document.createElement('div');
        statusMessage.style.cssText = `
    width: 100%;
    height: 150px;
    color:#fff;
`
        form.parentNode.appendChild(statusMessage);

        form.style.display = 'none'

        let img = document.createElement('img');
        img.setAttribute('src', messages.spinner);
        statusMessage.appendChild(img);

        let textMessage = document.createElement('div');
        textMessage.textContent = messages.succes;
        statusMessage.appendChild(textMessage)

        const formData = new FormData(form)

        postData('./assets/server.php', formData)
            .then(() => {
                textMessage.textContent = messages.succes
                img.setAttribute('src', messages.ok)
            })
            .catch(() => {
                textMessage.textContent = messages.error
                img.setAttribute('src', messages.failure)
            })
            .finally(() => {
                form.reset();
                setTimeout(() => {
                    statusMessage.remove()
                    form.style.display = 'block'
                }, 2000)
            })
    })
}

forms('.popup__form form')
forms('.contact form')