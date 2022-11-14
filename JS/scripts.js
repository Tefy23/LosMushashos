let pagination = document.querySelectorAll('.ball');
let carousel = document.getElementById('carousel');
let cards = document.querySelectorAll('.card');
let leftBtn = document.getElementById('leftArrow');
let rightBtn = document.getElementById('rightArrow');
let section = 0

const updatePag = () => {
  pagination.forEach((el) => el.style.width = '12px');
  pagination[section].style.width = '25px'
}

pagination.forEach((curItem, index) => {
  curItem.addEventListener('click', () => {
    section = index;
    updatePag()
    carousel.scrollLeft = (index * (window.innerWidth - 150)) + (index * 10)
  })
})

leftBtn.addEventListener('click', () => {
  if(section > 0){
    section--
    carousel.scrollLeft = (section * (window.innerWidth - 150)) + (section * 10)
    updatePag()
  }
})
rightBtn.addEventListener('click', () => {
  if(section < 2){
    section++
    carousel.scrollLeft = (section * (window.innerWidth - 150)) + (section * 10)
    updatePag()
  }
})