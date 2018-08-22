<template>
  <div class="badgeInput">
    <BadgeInput msg="Please Put your Badge Number In"/>
  </div>
</template>

<script>

  // @ is an alias to /src
  import BadgeInput from '@/components/BadgeInput.vue'

  export default {
    name: 'badgeInput',
    components: {
      BadgeInput
    }
  }
</script>
