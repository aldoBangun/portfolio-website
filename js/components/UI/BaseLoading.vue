<template>
   <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-filter backdrop-blur-md z-50" v-if="loading">
     <svg width="100" height="100" class="animate-spin">
        <circle cx="50" cy="50" r="40" fill="transparent" class="stroke-current text-brand" stroke-width="3" stroke-dasharray="60" />
     </svg>
   </div>
</template>

<script>

export default {
   props: {
      loading: {
         type: Boolean,
         required: false,
         default: false
      }
   }
}
</script>