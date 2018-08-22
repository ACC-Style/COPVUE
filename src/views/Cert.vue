<template>
    <section class="certificate back_primary-5 back_white texture_light margin-top_n5">
        <div class="back_white margin_0 padding-left_5 padding-right_5 padding_3 shadow_3 grid-x">
            <div class="cell small-8 medium-6 large-4 float-center">
                <div class="button-group expanded margin-bottom_0">
                    <a class="button" @click="set_sessionsVisible(false)" v-bind:class="[ sessionsVisible == false ? 'success':'secondaryalt']" ><i class="fas fa-check"  v-if="!sessionsVisible"></i> Certificate Only</a>
                    <a class="button" @click="set_sessionsVisible(true)" v-bind:class="[ sessionsVisible == true ? 'success':'secondaryalt']" ><i class="fas fa-check"  v-if="sessionsVisible"></i> Certificate with Sessions</a>
                </div>
            </div>
        </div>
        <div class="padding_5 cell auto grid-x">
            <div class="cell small-12 medium-8 float-center">
                <div class="card margin-bottom_5 margin_auto shadow_4 " style="max-width: 960px;">
                <div class="padding_3"> <img src="https://picsum.photos/960/500" alt="" class="border_solid border_black-5 border-width_1"></div>
                    <div class="card-section" v-if="sessionsVisible">
                        <table class="unstriped table">
                            <thead class="thead">
                                <tr>
                                    <th>Session Name</th>
                                    <th>Extra Data</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Session Name</td>
                                    <td>Extra Data</td>
                                </tr>
                                <tr>
                                    <td>Session Name</td>
                                    <td>Extra Data</td>
                                </tr>
                                <tr>
                                    <td>Session Name</td>
                                    <td>Extra Data</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="card-divider color_black padding_2 texture_dust back_primary_2">
                        <h5 class="text-center font_nomral font_n1 font_italic" style="width:100%">certificate preview</h5>
                    </div>
                </div>
                <div class="text-center button-group large radius expanded">
                    <a data-open="EmailModal"  class="button"><i class="fal fa-at"></i> Email</a>
                    <a data-open="PrintModal" class="button"><i class="fal fa-print"></i> Print</a>
                    <a href="#/badge" class="button alert"> <i class="fas fa-times"></i> Close</a>
                </div>
            </div>
        </div>
        <div class="reveal" id="PrintModal" data-reveal>
            <h1><i class="fal fa-print"></i>  Printing it to the Printer <i class="fas fa-cog fa-spin"></i></h1>
            <button class="close-button" data-close aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="reveal" id="EmailModal" data-reveal>
            <h2><i class="fal fa-at"></i>  Printing it to the Printer <i class="fas fa-cog fa-spin"></i></h2>
            <div class="padding_3"><input type="text" name="" id=""></div>
            <div class="grid-x">
                <div class="cell small-4">@gmail.com</div>
                <div class="cell small-4">@hotmail.com</div>
                <div class="cell small-4">@yahoo.com</div>
            </div>

            <button class="close-button" data-close aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
    </section>
</template>

<script>
export default {
    name:"certificate", 
    methods: {
      set_sessionsVisible: function($set){
            this.sessionsVisible = $set;
      }
      },
    data(){ return{
      sessionsVisible:false,
  }},
}

</script>

