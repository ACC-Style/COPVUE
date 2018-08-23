<template>
    <header class="padding_4 border-bottom-width_4 border_primary border_solid grid-x back_white">
      <a href="#/badge">
        <img src="assets/img/headerlogo.svg" style="height: 75px;" alt="">
      </a>
      <div class="hide-for-small-only cell auto text-center font_3 padding_4 font_slab color_acc show-medium">
       {{ title }}
      </div>
      <div class="cell small-6 medium-3 padding_4 text-right">
        <button class="button margin-bottom_0 secondaryalt" type="button" data-toggle="offCanvas" aria-expanded="false" aria-controls="offCanvas">Language: English</button>
      </div>
    </header>
</template>


<script>
export default {
  name: 'appheader',
  props: {
    title: String
  }
}
</script>
