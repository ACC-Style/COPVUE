<template>
  <div class="Survey">
    <div class="grid-x">			
		<div class=" cell small-12 medium-10 large-8 float-center ">
		<h1 class="border-bottom-width_2 border_solid border_black padding_0 margin-bottom_5 text-center">Please Answer All Questions</h1>
			<div class="card shadow_2">
				<div class="card-divider border-top-left-square color_white padding_4 texture_dust back_primary-n1">
					<h2>Please rate the conference
						<span class="sub-line">English version of question will show here if translated</span>
					</h2>
			</div>
			<div class="padding_4"> <div class="grid-x">
				<a  class="button cell auto hollow warning margin-bottom_0 hover_warning hover-text_warning-5 text-center"><i class="font_5  fal fa-star"></i><br><div class="font_1 padding-top_3">Worst</div></a>
				<a  class="button cell auto hollow warning margin-bottom_0 hover_warning hover-text_warning-5"><i class="font_5  fal fa-star"></i></a>
				<a  class="button cell auto hollow warning margin-bottom_0 hover_warning hover-text_warning-5"><i class="font_5  fal fa-star"></i></a>
				<a  class="button cell auto hollow warning margin-bottom_0 hover_warning hover-text_warning-5"><i class="font_5  fal fa-star"></i></a>
				<a  class="button cell auto hollow warning margin-bottom_0 hover_warning hover-text_warning-5 text-center"><i class="font_5  fal fa-star"></i><br><div class="font_1 padding-top_3">Best</div></a>
			</div></div>
			</div>
			<div class="card shadow_2">
				<div class="card-divider border-top-left-square color_white padding_4 texture_dust back_primary-n1">
					<h2>Did you find the information Biased</h2>
			</div>
			<div class="padding_4">
				<div class="grid-x ">
					<a  class="button cell auto hollow margin-bottom_0 alert hover_alert hover-text_alert-5"><i class="font_5  fal fa-angry"></i><br><div class="font_1 padding-top_3">Very Biased</div></a>
					<a  class="button cell auto hollow margin-bottom_0 warning hover_warning hover-text_warning-5"><i class="font_5  fal fa-frown"></i></a>
					<a  class="button cell auto hollow margin-bottom_0 secondary hover_secondary hover-text_secondary-5"><i class="font_5  fal fa-meh"></i></a>
					<a  class="button cell auto hollow margin-bottom_0 primary hover_primary hover-text_primary-5"><i class="font_5 fal fa-smile"></i></a>
					<a  class="button cell auto hollow margin-bottom_0 success hover_success hover-text_success-5"><i class="font_5 fal fa-grin-beam"></i><br><div class="font_1 padding-top_3">Not Biased</div></a>
			</div>
			</div>
			</div>
			<div class="card shadow_2">
				<div class="card-divider border-top-left-square color_white padding_4 texture_dust back_primary-n1">
					<h2>Would you come back?</h2>
				</div>
				<div class="grid-x grid-padding-x grid-padding-y">
					<div class="cell small-6">
						<a class="button xlarge success hollow round expanded margin-top_4"> <i class="far fa-thumbs-up"></i> Yes</a>
					</div>
					<div class="cell small-6">
						<a class="button xlarge alert hollow round expanded margin-top_4"> <i class="far fa-thumbs-down"></i> No </a>
					</div>
				</div>
			</div>
			<div class="padding_4">
				<div class="grid-x">
					<div class="cell small-8 medium-8 float-center">
						<a href="#/cert" class="button xlarge navigation shadow round expanded margin-top_4"> Get Certificate <i class="fal fa-arrow-alt-right"></i></a>
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
