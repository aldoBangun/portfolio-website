import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sections = gsap.utils.toArray('section')
const timeline = gsap.timeline({ defaults: { opacity: 0, duration: 0.7} })

timeline
   .from('#nav-brand', { y: 100})
   .from('#nav-menu li', { y: 100, stagger: 0.2 }, '-=0.5')
   .from('#home p', { y: '-100' }, '-=0.5')
   .from('#home h1', { x: '-100' }, '-=0.5')
   .from('#cta a', { x: '100', stagger: 0.2 }, '-=0.5')

sections.forEach(section => {
   const tl = gsap.timeline({ paused: true })

   tl.from(section, {
      opacity: 0,
      y: 200,
   })

   ScrollTrigger.create({
      trigger: section,
      opacity: 0,
      start: "top center",
      onEnter: () => { tl.play()},
   })
})

const theHeader = document.querySelector('header')

window.addEventListener('DOMContentLoaded', toggleNavBorder)

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

let lastScroll = 0;

function toggleNavVisibility() {

   if(window.scrollY > lastScroll) {
      theHeader.classList.add('transform', '-translate-y-full')
   } else {
      theHeader.classList.remove('transform', '-translate-y-full')
   }

   lastScroll = window.scrollY
}