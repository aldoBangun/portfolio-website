import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import HoverEffect from 'hover-effect'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

// Animations on Landing Page

const sections = gsap.utils.toArray('section')
const timeline = gsap.timeline({ defaults: { opacity: 0, duration: 0.7} })

timeline
   .from('#nav-brand', { y: 100})
   .from('#nav-menu li', { y: '-50', stagger: 0.1 }, '-=0.5')
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
      start: "top 75%",
      onEnter: () => { tl.play()},
   })
})

// Hide || Show Navbar & Navbar Border

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


// Smooth Scrolling

const navLinks = gsap.utils.toArray('.nav-link')

navLinks.forEach(link => {
   const targetElement = document.querySelector(link.hash)

   link.addEventListener('click', e => {
      e.preventDefault()
      gsap.to(window, { duration: 0.5, scrollTo: {y: targetElement, offsetY: 86} })
   })
})

// Hover Effect

const hoverEffect = new HoverEffect({
   parent: document.querySelector('#profile-pic'),
   intensity: 0.3,
   speedIn: 0.8,
   speedOut: 0.8,
   image1: './img/image-1.jpg',
   image2: './img/profile-pic.jpg',
   displacementImage: './img/4.png'
})