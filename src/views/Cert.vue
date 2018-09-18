<template>
    <section class="certificate back_primary-5 back_white texture_light">
        <div class="padding_5 cell auto grid-x">
            <div class="cell small-12 medium-10 large-8 float-center">
                <div class="card margin-bottom_5 margin_auto shadow_4 " style="max-width: 960px;">
                    <div class="card-divider border-top-left-square color_white padding_4 texture_dust back_primary-n1">
                        <h2 class="text-center cell" style="width:100%">certificate preview</h2>
                    </div>
                    <div class="border-width_4 border_secondary-5 border_solid margin-bottom_2 margin_3 padding_2">
                        <div class="padding_4  padding-bottom_0"> <img src="/COPVUE/assets/img/cert-top.png"  alt=""></div>
                    <div class="padding_4 grid-x">
                        <input type="text" class="font_2 margin_0 padding_2 shadow_n2  text-center cell auto border_none"  style="height:auto" value="Name of Doctor, Designation" />
                        <button href="" class="button secondaryalt cell font_2 padding_2 padding-right_5 padding-left_5 auto shrink margin_0"><i class="fas fa-pencil"></i></button>
                    </div>
                    <div class="padding_4 padding-top_0 "> <img src="/COPVUE/assets/img/cert-bottom.png"  alt=""></div>
                    </div>
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
                    <div class="card-divider border-top-left-square  padding_4 texture_dust back_secondary-alt">
                        <h4 class="text-center cell"><i class="fas fa-check-square"></i> Email a copy to address below</h4>
                    </div> 
                                            <div class="padding_5 grid-x">
                            <input type="text" class=" margin_0 shadow_n2  text-center cell auto"  style="height:auto" value="emailaddress@email.com" />
                            <button href="" class="button cell secondaryalt padding-right_5 padding-left_5 auto shrink margin_0" @click="openEmailReveal"><i class="fas fa-pencil"></i></button>
                        
                    </div>
                </div>

                <div class="text-center button-group large radius expanded">
                    <!-- <a data-open="EmailModal"  class="button" @click="openEmailReveal"><i class="fal fa-at"></i> Email</a>
                    <a data-open="PrintModal" class="button" @click="openPrintReveal"><i class="fal fa-print"></i> Print</a> -->
                    <a href="#/badge" class="button border-radius_round xlarge navigation"> Print  <i class="fas fa-print"></i></a>
                </div>
            </div>
        </div>

        <reveal ref="printReveal">
            <h3 class="padding_5" slot="header"><i class="fal fa-print"></i>  Printing it to the Printer <i class="fas fa-cog fa-spin"></i></h3>
            <div slot="content">
                <div class="grid-x"><div class="cell small-10 medium-6 large-4 float-center"><button class="button secondaryalt expanded small" data-close aria-label="Close modal" >Cancel</button></div></div>
            </div>
        </reveal>
        <reveal ref="emailReveal">
            <h3 slot="header">Please enter your email</h3>
            <div slot="content">
                <div class="">
                    <div class="input-group margin-bottom_4">
                        <span class="input-group-label"><i class="fas fa-envelope"></i></span>
                        <input class="input-group-field" type="text" placeholder="youremail@email.com" v-model="emailtext">
                        <div class="input-group-button" v-if="emailtext!=''">
                            <button type="submit" class="button secondaryalt hollow" @click="emailtext=''"><i class="fas fa-times"></i></button>
                        </div>
                        <div class="input-group-button">
                            <button type="submit" class="button">Save</button>
                        </div>
                        </div>
                </div>
                <div class="grid-x border-top-width_1 border_dashed border_primary padding-top_4"> 
                    <div class="cell small-4"><a @click="emailtext= emailtext +'@gmail.com'" class="button small expanded secondaryalt margin-bottom_0"><i class="fal fa-at"></i>gmail.com</a></div>
                    <div class="cell small-4"><a @click="emailtext= emailtext +'@hotmail.com'" class="button small expanded secondaryalt margin-bottom_0"><i class="fal fa-at"></i>hotmail.com</a></div>
                    <div class="cell small-4"><a @click="emailtext= emailtext +'@yahoo.com'" class="button small expanded secondaryalt margin-bottom_0"><i class="fal fa-at"></i>yahoo.com</a></div>
                    <div class="cell small-4"><a @click="emailtext= emailtext +'@mail.com'" class="button small expanded secondaryalt margin-bottom_0"><i class="fal fa-at"></i>mail.com</a></div>
                    <div class="cell small-4"><a @click="emailtext= emailtext +'@outlook.com'" class="button small expanded secondaryalt margin-bottom_0"><i class="fal fa-at"></i>outlook.com</a></div>
                    <div class="cell small-4"><a @click="emailtext= emailtext +'@aol.com'" class="button small expanded secondaryalt margin-bottom_0"><i class="fal fa-at"></i>aol.com</a></div>
                </div>
                <div class=""><div class="padding-top_2"><button class="button secondary expanded small" data-close aria-label="Close modal" >Cancel</button></div></div>
            </div>
        </reveal>
    </section>
</template>

<script>
import Reveal from "@/components/Reveal.vue";
export default {
  name: "certificate",
  components: {
    Reveal
  },
  methods: {
    set_sessionsVisible: function($set) {
      this.sessionsVisible = $set;
    },
    openPrintReveal: function() {
      this.$refs.printReveal.openReveal();
    },
    openEmailReveal: function() {
      this.$refs.emailReveal.openReveal();
    }
  },

  data() {
    return {
      sessionsVisible: false,
      emailtext: ""
    };
  }
};
</script>

