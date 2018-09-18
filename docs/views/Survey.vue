<template>
  <div class="Survey">
    <div class="grid-x">			
		<div class=" cell small-12 medium-10 large-8 float-center ">
		<h1 class="border-bottom-width_2 border_solid border_black padding_0 margin-bottom_5 text-center">Please Answer All Questions
			<span class="sub-line font_0"><span class="translation">Translation is here</span></span>
		</h1>
			<div class="card shadow_2">
				<div class="card-divider border-top-left-square color_white padding_4 texture_dust back_primary-n1">
					<h2>Please rate the conference
						<span class="sub-line">Translation is here</span>
					</h2>
			</div>
			<div class="padding_4"> <div class="grid-x">
				<a  class="button cell auto hollow alert margin-bottom_0 hover_alert font_4 hover-text_alert-5 text-center"><i class="fal fa-star"></i><br><div class="font_1 padding-top_3">Worst</div></a>
				<a  class="button cell auto hollow warning margin-bottom_0 hover_warning font_4 hover-text_warning-5"><i class="fal fa-star"></i><i class="fal fa-star"></i></a>
				<a  class="button cell auto hollow secondary margin-bottom_0 hover_secondary font_4 hover-text_secondary-5"><i class="fal fa-star"></i><i class="fal fa-star"></i><i class="fal fa-star"></i></a>
				<a  class="button cell auto hollow primary margin-bottom_0 hover_primary font_4 hover-text_primary-5"><i class="fal fa-star"></i><i class="fal fa-star"><i class="fal fa-star"></i></i><i class="fal fa-star"></i></a>
				<a  class="button cell auto hollow success margin-bottom_0 hover_success font_4 hover-text_success-5 text-center"><i class="fal fa-star"></i><i class="fal fa-star"></i><i class="fal fa-star"></i><i class="fal fa-star"></i><i class="fal fa-star"></i><br><div class="font_1 padding-top_3">Best</div></a>
			</div></div>
			</div>
			<div class="card shadow_2">
				<div class="card-divider border-top-left-square color_white padding_4 texture_dust back_primary-n1">
					<h2>Did you find the information biased
						<span class="sub-line">Translation is here</span>
					</h2>
			</div>
			<div class="padding_4">
				<div class="grid-x ">
					<a  class="button cell auto hollow margin-bottom_0 font_4 alert hover_alert hover-text_alert-5"><i class="fal fa-angry"></i><br><div class="font_1 padding-top_3">Very Biased</div></a>
					<a  class="button cell auto hollow margin-bottom_0 font_4 warning hover_warning hover-text_warning-5"><i class="fal fa-frown"></i></a>
					<a  class="button cell auto hollow margin-bottom_0 font_4 secondary hover_secondary hover-text_secondary-5"><i class="fal fa-meh"></i></a>
					<a  class="button cell auto hollow margin-bottom_0 font_4 primary hover_primary hover-text_primary-5"><i class="fal fa-smile"></i></a>
					<a  class="button cell auto hollow margin-bottom_0 font_4 success hover_success hover-text_success-5"><i class="fal fa-grin-beam"></i><br><div class="font_1 padding-top_3">Not Biased</div></a>
			</div>
			</div>
			</div>
			<div class="card shadow_2">
				<div class="card-divider border-top-left-square color_white padding_4 texture_dust back_primary-n1">
					<h2>Would you come back?
						<span class="sub-line">Translation is here</span>
					</h2>
				</div>
				<div class="grid-x grid-padding-x grid-padding-y">
					<div class="cell small-6">
						<a class="button xlarge alert hollow round expanded margin-top_4"> <i class="far fa-thumbs-down"></i> No </a>
					</div>
					<div class="cell small-6">
						<a class="button xlarge success hollow round expanded margin-top_4"> <i class="far fa-thumbs-up"></i> Yes</a>
					</div>
				</div>
			</div>
			<div class="padding_4">
				<div class="grid-x">
					<div class="cell small-8 medium-8 float-center">
						<a href="#/cert" class="button xlarge navigation shadow round expanded margin-top_4"> Next <i class="fal fa-arrow-alt-right"></i></a>
					</div>
				</div>
			</div>
		</div>
		</div>
  </div>
</template>
<script>
export default {
	  name: "Survey",
  data(){ return{
      selected:0,
      items: [{ name: "English", id:"0" }, { name: "French", id:"1" }, { name: "German", id:"2" }]
  }},
}
</script>
