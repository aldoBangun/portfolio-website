<template>
   <div @click="closeModal" class="fixed inset-0 bg-black bg-opacity-25 backdrop-filter backdrop-blur-md z-50" v-if="open">
      <div @click.stop class="absolute bg-brand-darker rounded-md shadow-lg p-8 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-96">
         <div class="mb-8">
            <slot></slot>
         </div>
         <button @click="closeModal" class="text-brand inline-flex items-center h-10 px-4 border hover:bg-brand hover:text-brand-darker border-brand rounded-md">Okay</button>
      </div>
   </div>
</template>

<script>
   export default {
      props: {
         open: {
            type: Boolean,
            required: false,
            default: false
         }
      },
      methods: {
         closeModal() {
            this.$emit('close-modal')
         }
      }
   }
</script>