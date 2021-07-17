<template>
   <li class="flex items-center gap-4">
      <span class="text-sm text-brand-light"> ▶ </span> <span> {{ skill }} </span>
   </li>
</template>

<script>

export default {
   props: {
      skill: {
         type: String,
         required: true
      }
   }
}

</script>