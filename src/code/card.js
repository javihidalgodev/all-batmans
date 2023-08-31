const cards = Array.from(document.querySelectorAll('.card'))
const infos = Array.from(document.getElementsByClassName('info'))
const mores = Array.from(document.getElementsByClassName('more'))

const closeModalBtns = Array.from(document.querySelectorAll('.close-modal-btn'))

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('active')
  })

  card.addEventListener('mouseleave', () => {
    card.classList.remove('active')
    card.querySelector('.info').classList.remove('visible')
  })

  card.addEventListener('touchend', (e) => {
    // console.log(e.target)
    // console.log(e.currentTarget)

    if(e.currentTarget.classList.contains('active')){
      if(!e.target.classList.contains('more') && !e.target.classList.contains('info')) {
        console.log(e.currentTarget)
        e.currentTarget.classList.remove('active')
      }
    } else {
      cards.forEach(card => {
        card.classList.remove('active')
        card.querySelector('.info').classList.remove('visible')
      })

      e.currentTarget.classList.add('active')
    }
  })
})

mores.forEach(more => {
  more.addEventListener('click', (e) => {
    e.preventDefault()
    e.target.parentElement.parentElement.querySelector('.info').classList.add('visible')
  })
})

closeModalBtns.forEach(closeBtn => {
  closeBtn.addEventListener('click', (e) => {
    e.currentTarget.parentElement.classList.remove('visible')
  })
})