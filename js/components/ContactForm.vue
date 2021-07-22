<template>

   <form @submit.prevent="sendEmail" class="max-w-xl mx-auto">
      <BaseInput name="name" ref="name" />
      <BaseInput name="email" type="email" ref="email" />
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
   <teleport to="body">
      <base-modal :open="isSentEmail" @close-modal="closeModal">
         <h1 class="text-2xl text-brand pb-4 font-bold">Email Sent</h1>
         <p class="text-lg text-brand-dark">Yay, Thanks for mailing me!! 😁</p>
      </base-modal>
      <base-modal :open="isError" @close-modal="closeModal">
         <h1 class="text-2xl text-brand pb-4 font-bold">Failed to send</h1>
         <p class="text-lg text-brand-dark">Woopss, can't send your email. Please try again later 😭</p>
      </base-modal>
      <BaseLoading :loading="isLoading" />
   </teleport>
</template>

<script>
import BaseInput from './UI/BaseInput.vue'
import BaseModal from './UI/BaseModal.vue'
import BaseLoading from './UI/BaseLoading.vue'

import emailJs from 'emailjs-com'
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from '../apikey.js'

export default {
   data() {
      return {
         isSentEmail: false,
         isError: false,
         isLoading: false
      }
   },
   components: {
      BaseInput,
      BaseModal,
      BaseLoading
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
         this.isLoading = true

         try {
            await emailJs.send(SERVICE_ID, TEMPLATE_ID, emailTemplate ,USER_ID)

            this.isLoading = false
            this.isSentEmail = true
         } catch (_err) {
            setTimeout(()=> {
               this.isLoading = false
               this.isError = true
            }, 2000)
         }

         this.resetForm()
      },
      closeModal() {
         this.isSentEmail = false
         this.isError = false
      }
   }
};

</script>
