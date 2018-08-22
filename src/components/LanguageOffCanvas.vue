<template>
    <div class="off-canvas position-right back_secondary-n3 texture_medium" id="offCanvas" data-off-canvas>
        <button class="close-button" aria-label="Close menu" type="button" data-close="">
            <span aria-hidden="true">×</span>
        </button>
        <div class="margin-top_4 border-bottom-width_1 border_white-5 padding_3 border_solid">
            <h2 class="color_white font_2 font_display">Select Language</h2>
        </div>
        <ul class="no-bullet"> 
            <li @click="selected = item.id" v-for="item in items" :key="item.id" class="border-bottom-width_1 border_solid border_white-3 color_white font_0 font_normal hover-text_black hover_secondary-2 padding_3 ">
             <i class="fas" v-bind:class="[ item.id == selected ? 'fa-check-square':'fa-square']"></i> 
             <span class="margin-left_3 padding-left_2 border-left-width_1 border_white-3 border_solid"> {{item.name}}</span>
             </li>
        </ul>
        </div>
</template>


<script>
export default {
  name: "offCanvas",
  data(){ return{
      selected:0,
      items: [{ name: "English", id:"0" }, { name: "French", id:"1" }, { name: "German", id:"2" }]
  }},
    
};
</script>
