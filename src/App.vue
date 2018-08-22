<template>
  <div id="app" class=" texture_light  back_secondaryalt-3">
    <div class="text-center back_secondary-5 shadow_n3 padding_2 grid-x padding_1">
        <div class="cell auto margin_auto">
          <ul id="nav" class="menu quicklinks">
            <li class="quicklinks__item"  v-for="route in routes" :key="route.path" ><router-link class="quicklinks_link" :to="route.path" >{{route.name}}</router-link></li>
          </ul>
      </div>
    </div>
    <LangOffCanvas/>
    <div  class="off-canvas-content" data-off-canvas-content>
      <AppHeader title="COP Quick Print" class="margin-bottom_5"/>
      <router-view class="padding-bottom_5"/>
    </div>
  </div>
</template>

<style >
a.router-link-exact-active {
  text-decoration: underline;
}
</style>

<script>
import AppHeader from '@/components/AppHeader.vue'
import LangOffCanvas from '@/components/LanguageOffCanvas.vue'

export default {
    name: 'app',
  components: {
    AppHeader,
    LangOffCanvas
  },  data() {
    return {
      routes: this.$router.options.routes
    };
  }
}
</script>


