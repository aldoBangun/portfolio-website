const theHeader = document.querySelector('header')
let lastScroll = 0;


window.addEventListener('scroll', () => {
   toggleNavBorder()
   toggleNavVisibility()
})

function toggleNavBorder() {
   if(window.scrollY === 0) {
      theHeader.classList.remove('border-b', 'border-solid', 'border-gray-700')
   }

   if(window.scrollY > 100) {
      theHeader.classList.add('border-b', 'border-solid', 'border-gray-700')
   }
}


function toggleNavVisibility() {

   if(window.scrollY > lastScroll) {
      theHeader.classList.add('transform', '-translate-y-full')
   } else {
      theHeader.classList.remove('transform', '-translate-y-full')
   }

   lastScroll = window.scrollY
}