const skills = ['HTML5', 'CSS3', 'Javascript / ES6+', 'Tailwind CSS', 'Vue.js']
const skillsList = document.querySelector('#skills')

const generateSkillItems = ()=> {
   return skills.map(skill => {
      return `
         <li class="flex items-center gap-4"> <span class="text-sm text-brand-light"> ▶ </span> ${skill} </li>
      `
   }).join('')
}

skillsList.innerHTML = generateSkillItems()