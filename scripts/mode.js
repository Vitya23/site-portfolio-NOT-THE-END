let toggle = document.getElementById('theme')
const sun = document.querySelector('.sun')
const moon = document.querySelector('.moon')
const stars = document.querySelector('.stars')
const body = document.getElementsByTagName('body')[0]




toggle.addEventListener('change', function() {
    if (this.checked) {
        sun.classList.remove('hide')
        moon.classList.add('hide')
        stars.classList.add('hide')
        body.style.background = '#7597de'
        body.style.transition = 'background 5s ease'




    } else {
        sun.classList.add('hide')
        moon.classList.remove('hide')
        stars.classList.remove('hide')

        body.style.background = '#010205'
        body.style.transition = 'background 5s ease'




    }
});