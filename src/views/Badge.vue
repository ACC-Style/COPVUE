<template>
  <div class="badgeInput padding-right_4 padding-left_4">
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
