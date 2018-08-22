<template>
<div class="login ">
	<div class="grid-x">
		<div class="cell small-6 large-4 margin_auto">
			<div class="card shadow_2 cell  ">
			<div class="card-divider color_white font-size_3 padding_4 texture_dust  back_primary">
				ACC Staff Login
			</div>
			<div class="card-section">
				<div class="grid-container">
					<div class="grid-x grid-padding-x">
						<div class="medium-6 cell">
							<label>User Name
								<input type="text" placeholder="" >
							</label>
						</div>
						<div class="medium-6 cell">
							<label>Password
								<input type="text" placeholder="">
							</label>
						</div>
					</div>
				</div>
				<div class="grid-container">
					<a href="/#/badge" class="button disabled float-right color_white margin-bottom_0 border_radius">Log in <i class="fal fa-arrow-alt-right"></i></a>
				</div>
			</div>
		</div>
<div class="padding_3 font_n1 text-center">
	<a href="/#/about" class="link secondary text_underline">About this Utlity</a>
</div>
		</div>
	</div>
</div>
</template>
<script>
export default {
name: 'login'
}
</script>