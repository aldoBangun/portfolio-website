import { createApp } from 'vue'

import SkillList from './components/SkillList.vue'
import ContactForm from './components/ContactForm.vue'

createApp(SkillList).mount('#skills')

createApp(ContactForm).mount('#contact-form')