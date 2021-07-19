<template>

   <form @submit.prevent="sendEmail" class="max-w-xl mx-auto">
      <BaseInput name="name" ref="name" />
      <BaseInput name="email" ref="email" />
      <BaseInput name="message" textarea ref="message" />
      <button
         id="send-message"
         type="submit"
         class="
            bg-brand
            text-brand-lightest
            inline-flex
            items-center
            w-32
            h-10
            justify-center
            rounded-md
            hover:bg-brand-dark
         "
      >
         Send
      </button>
   </form>

</template>

<script>
import BaseInput from './UI/BaseInput.vue'

import emailJs from 'emailjs-com'
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from '../apikey.js'

export default {
   components: {
      BaseInput
   },
   methods: {
      resetForm() {
         for(const prop in this.$refs) {
            this.$refs[prop].$refs[prop].value = ''
         }
      },
      createEmailTemplate() {
         const template = {}
         
         for(const prop in this.$refs) {
            template[prop] = this.$refs[prop].$refs[prop].value
         }

         return template
      },
      async sendEmail() {
         const emailTemplate = this.createEmailTemplate()

         try {
            await emailJs.send(SERVICE_ID, TEMPLATE_ID, emailTemplate ,USER_ID)
         } catch (err) {
            console.log(err)
         }

         this.resetForm()
      }
   }
};

</script>
