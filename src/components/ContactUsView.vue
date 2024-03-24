<style scoped>
.vertical_small_line {
  width: 60px;
  height: 4px;
  border-radius: 30px;
  background-color: #ed9b0a;
}
h2 {
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 35px;
  margin: 20px 0px;
  line-height: 30px;
  color: white;
}
h6 {
  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 13px;
  color: white;
  line-height: 2;
}
h5 {
  color: #ed9b0a;
  font-size: 18px;
  font-weight: 900;

  font-family: "Lato", sans-serif;
  padding-bottom: 8px;
}
.hover-effect:hover {
  color: #ed9b0a; /* Change to the color you desire */
}
</style>
<template>
  <div class="contact" style="background-color: #204a60">
    <v-container fluid class="d-flex justify-start align-center px-10">
      <v-row>
        

        <v-col
          col="12"
          lg="12"
          md="12"
          sm="12"
          xs="12"
          class="d-flex justify-center align-center"
          style="column-gap: 10px"
        >
          <div class="vertical_small_line"></div>
          <h2>Contact Us</h2>
          <div class="vertical_small_line"></div>
        </v-col>
        <v-col
          col="12"
          md="12"
          lg="12"
          sm="12"
          xs="12"
          class="d-flex justify-center align-center"
          style="column-gap: 10px"
        >
          <v-row class="justify-center" style="column-gap: 25px;">
            <v-col cols="12" md="3" sm="12">
          <v-img :src="require('../assets/contactus.jpg')" width="100%"></v-img>
          <h6 style="color: #ed9b0a; text-align: center">
                Sooryan Travels Operating in Chennai and Nagapattinam
              </h6>
        </v-col>
            <v-col cols="12" md="7" sm="12">
              <v-row>
                <v-col cols="12" md="5" sm="6">
              <v-img
                :src="require('../assets/icons/logo1.jpg')"
                max-width="36%"
              >
              </v-img>
              <h6 class="pt-3">
                <span class="mdi mdi-map-marker"></span>
                No: 34 Srinivasapuram <br />
              <span class="pl-4">
                Kilvelur & Post
              </span>   <br />
                <span class="pl-4">
                  Nagapattinam District
                </span>  <br />
                <span class="pl-4">Pin Code - 611104 </span><br />
                <span class="pl-4">Tamilnadu , India. </span><br />
              </h6>
              <h6> 
                <span class="mdi mdi-phone"></span> 
                 9710092765 / 9962237701</h6>
              <h6> <span class="mdi mdi-email"></span>
                 Sooryantravels@gmail.com</h6>
            
            </v-col>
            <v-col cols="12" md="3" sm="6">
              <h5>Quick Links</h5>
              <h6
                :class="{ 'hover-effect': isHovered }"
                @mouseover="isHovered = true"
                @mouseout="isHovered = false"
                @click="page_navigate('home')"
              >
                Home
              </h6>
              <h6
                :class="{ 'hover-effect': isHovered }"
                @mouseover="isHovered = true"
                @mouseout="isHovered = false"
                @click="page_navigate('service')"
              >
                Services
              </h6>
              <h6
                :class="{ 'hover-effect': isHovered }"
                @mouseover="isHovered = true"
                @mouseout="isHovered = false"
                @click="page_navigate('about')"
              >
                About Us
              </h6>
              <h6
                :class="{ 'hover-effect': isHovered }"
                @mouseover="isHovered = true"
                @mouseout="isHovered = false"
                @click="page_navigate('images')"
              >
                Images
              </h6>
            </v-col>
            <v-col cols="6" md="4" sm="6">
              <h5>Social Media</h5>
              <v-row>
                <v-col
                  cols="12"
                  md="8"
                  sm="2"
                  class="d-flex flex-wrap align-center"
                  style="justify-content: space-between"
                >
                  <template v-for="(item, i) in social_media" :key="i">
                    <v-img
                      :src="require(`../assets/icons/${item.icon}`)"
                      alt="social_media"
                      style="max-width: 20%"
                    ></v-img>
                  </template>
                  
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="12" sm="12">
              
            </v-col>
              </v-row>
            </v-col>
            
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-row><v-col cols="12" md="12" style="text-align: center; " >
              <hr color="grey">
              <p style="font-size: 10px; font-weight: 900; color: grey;" class="py-5">@Copy right by all</p>
            </v-col></v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isHovered: false,
      social_media: [
        {
          icon: "facebook.png",
        },
        {
          icon: "instagram.png",
        },
        {
          icon: "twitter.png",
        },
        {
          icon: "whatsapp.png",
        },
      ],
    };
  },
  methods: {
    page_navigate(link_url1) {
      console.log(link_url1, "link_url");
      this.textColor = "#ed9b0a";
      this.$emit("navigation1", link_url1);
    },
  },
};
</script>
