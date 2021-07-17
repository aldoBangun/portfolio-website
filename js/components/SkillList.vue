<template>
   <ul class="text-gray-500 grid grid-cols-2 gap-4">
      <SkillItem v-for="skill in skills" :key="skill" :skill="skill" />
   </ul>
</template>

<script>
import SkillItem from './SkillItem.vue';

export default {
   components: {
      SkillItem
   },
   data() {
      return {
         skills: ['HTML5', 'CSS3', 'Javascript / ES6+', 'Tailwind CSS', 'Vue.js']
      }
   },
}

</script>