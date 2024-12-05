window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-item'),
        tabContents = document.querySelectorAll('.tab-content'),
        tabParents = document.querySelector('.tab')


    function hideTabContents() {
        tabContents.forEach(tabContent => {
            tabContent.style.display = 'none'
        })
    }

    function remover() {
        tabs.forEach(tab => {
        tab.classList.remove('tab-active')
    })
}


    function showTabContents(index) {
        tabContents[index].style.display = 'flex'
        tabs[index].classList.add('tab-active')
    }


    hideTabContents()
    showTabContents(0)

    tabParents.addEventListener('click', event => {
        const target = event.target

        if(target && target.classList.contains('tab-item')) {
            tabs.forEach((tab, index) => {
                if(target === tab) {
                    hideTabContents()
                    remover()
                    showTabContents(index)
                }
            })
        }
    })


    Loader

    const loader = document.querySelector('.loader-container')
        setTimeout(() => {
          loader.style.display = 'none'
         }, 0)


    const deadline = '2025-10-09'

    function getRemainingTime(endtime) {
       const time = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor(time / (1000 * 60 * 60 * 24)),
        hours = Math.floor(time/ (1000 * 60 *60) % 24),
        minutes = Math.floor(time / (1000 * 60) % 60), 
        seconds = Math.floor((time / 1000) % 60)

    return {
        totalTime: time,
        days, 
        hours, 
        minutes,
        seconds,
    }


    }


// //     function setClock(selector, endtime) {
// //         const timer = document.querySelector(selector),
// //             days = timer.querySelector('#day')
// //             hours = timer.querySelector('#hour')
// //             minutes = timer.querySelector('#minute')
// //             seconds = timer.querySelector('#second')
// //             timeInterval = setInterval(updateClock, 1000)

// //         function updateClock() {
// //             const time = getRemainingTime(endtime) 

// //             days.textContent = time.days
// //             hours.textContent = time.hours
// //             minutes.textContent = time.minutes
// //             seconds.textContent = time.seconds

// //             if(time.totalTime<=0) {
// //                 clearInterval(timeInterval)
// //             }
// //         }

// //     }

// //     setClock('.countdown', deadline)
    
//     const deadline = '2025-10-09'

//     function getRemainingTime(endtime) {
//         const time = Date.parse(endtime) - Date.parse(new Date()),
//             days = Math.floow(time / (1000 * 60 * 60 * 24)),
//             hours = Math.floor(time / (1000 * 60 * 60) % 24),
//             minutes = Math.floor(time / (1000 * 60) % 60)
//             seconds = Math.floor((time / 1000) % 60)
//     }


//     return {
//         totalTime: time, 
//         days,
//         hours,
//         minutes, 
//         seconds
//     }

//     function setClock(selector, endtime) {
//         const timer = document.querySelector(selector),
//             days = timer.querySelector('#day'),
//             hours = timer.querySelector('#hour'),
//             minutes = timer.querySelector('#minute'),
//             seconds = timer.querySelector('#second'),
//             timeInterval = setInterval(updateClock, 1000)


//             function updateClock() {
//                 const time = getRemainingTime(endtime)

//                 days.textContent = time.days
//                 hours.textContent = time.hours
//                 minutes.textContent = time.minutes
//                 seconds.textContent = time.seconds
            
//                 if(time.totalTime <= 0) {
//                     clearInterval(timeInterval)
//             }
//     }

    
// })

