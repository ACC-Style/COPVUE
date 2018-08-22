<template>
  <div class="badgeInput grid-x">
    <div class="cell small-12 medium-10 large-8 margin_auto">
      <div class="card shadow_3">
        <div class="card-divider border-top-left-square color_white padding_4 texture_dust back_primary-n1">
          <h1 class="text-center" >Badge Number</h1>
        </div>
        <div class="card-section">
        <div class="grid-x">
            <div class="cell small-8 medium-8 float-center">
              <h3 class="text-center" >{{ msg }}</h3>
              <input type="number" class="font_4 font_slab padding_4 padding-right_5 padding-left_5 text-center border-width_2 border_secondary-4 shadow_n2" style="height:auto;">
              <router-link to="/confirm" class="button xlarge navigation shadow round expanded margin-top_4">Go <i class="fal fa-arrow-alt-right"></i></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>   
  </div>
</template>

<script>
export default {
  name: 'badgeInput',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
