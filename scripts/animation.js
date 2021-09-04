function start() {
    let tl = anime.timeline({
        autoplay: false

    });

    // Add children
    tl
        .add({
            targets: '#btn',
            top: '1500px',
            duration: 500,
            easing: 'easeInOutSine'

        })
        .add({
            targets: '#skip',
            top: '1500px',
            duration: 500,
            easing: 'easeInOutSine'

        })



    .add({
            targets: '#stars',
            top: '0px',
            duration: 1000,
            easing: 'easeInOutSine'

        })
        .add({
            targets: '#mountains_behind',
            bottom: '0px',
            duration: 1000,
            easing: 'easeInOutSine'

        })
        .add({
            targets: '#moon',
            top: '0px',
            duration: 1000,
            easing: 'easeInOutSine'

        })
        .add({
            targets: '#mountains_front',
            bottom: '0px',
            duration: 1000,
            easing: 'easeInOutSine'

        })
        .add({
            targets: '#text',
            marginRight: '0',
            duration: 1000,
            easing: 'easeInOutSine'

        })
        .add({
            targets: '#hed',
            top: '0px',
            duration: 1000,
            easing: 'easeInOutSine'

        })
        .add({
            targets: '#sec',
            right: '0px',
            duration: 1000,
            easing: 'easeInOutSine'

        })
    tl.play()
}

let btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    start()

    let block = () => {
        document.body.classList.remove('notOverflow');
    }
    setInterval(block, 7000)
})


function skip() {
    let tl = anime.timeline({
        autoplay: false

    });

    // Add children
    tl
        .add({
            targets: '#btn',
            top: '1500px',
            duration: 0,
            easing: 'easeInOutSine'

        })
        .add({
            targets: '#skip',
            top: '1500px',
            duration: 0,
            easing: 'easeInOutSine'

        })



    .add({
            targets: '#stars',
            top: '0px',
            duration: 0,
            easing: 'easeInOutSine'

        })
        .add({
            targets: '#mountains_behind',
            bottom: '0px',
            duration: 0,
            easing: 'easeInOutSine'

        })
        .add({
            targets: '#moon',
            top: '0px',
            duration: 0,
            easing: 'easeInOutSine'

        })
        .add({
            targets: '#mountains_front',
            bottom: '0px',
            duration: 0,
            easing: 'easeInOutSine'

        })
        .add({
            targets: '#text',
            marginRight: '0',
            duration: 0,
            easing: 'easeInOutSine'

        })
        .add({
            targets: '#hed',
            top: '0px',
            duration: 0,
            easing: 'easeInOutSine'

        })
        .add({
            targets: '#sec',
            right: '0px',
            duration: 0,
            easing: 'easeInOutSine'

        })
    tl.play()
}

let skipbtn = document.getElementById('skip')

skipbtn.addEventListener('click', () => {
    skip()

    let block = () => {
        document.body.classList.remove('notOverflow');
    }
    setInterval(block, 0)
})