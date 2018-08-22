<template>
  <div class="ProcessedSurvey grid-x">
		<div class=" cell small-12 medium-10 large-8 float-center ">
            <div class="card shadow_3">
               <div class="card-divider color_white padding_4 texture_dust back_secondary-n1">
                   <h1>You have already taken the survey</h1>
               </div> 
               <div class="card-section">
                   <router-link to="cert" class="button xlarge navigation round float-right margin_auto">Continue <i class="fal fa-arrow-alt-right"></i></router-link>
               </div>
            </div>
		</div>
  </div>
</template>
<script>
export default {
    name: "ProcessedSurvey",
    data(){ return{  }},
}
</script>
