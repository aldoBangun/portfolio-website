<template>
   <div class="mb-8" v-if="textarea">
      <label :for="name" class="block text-brand mb-3 capitalize">{{ name }}</label>
      <textarea
         :id="name"
         class="form-control resize-none"
         rows="4"
         :ref="name"
      ></textarea>
   </div>
   <div class="mb-8" v-else>
      <label :for="name" class="block text-brand mb-3 capitalize"> {{ name }} </label>
      <input type="text" :id="name" class="form-control" :ref="name" />
   </div>   
</template>

<script>

export default {
   props: {
     name: {
        type: String,
        required: true
     },
     textarea: {
        type: Boolean,
        required: false,
        default: false
     } 
   },
}

</script>