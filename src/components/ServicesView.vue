
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
  line-height: 68.9px;
  color: #204a60;
}
h6 {
  font-family: "Lato", sans-serif;
  font-weight: 900;
  font-style: normal;
  font-size: 16px;
}
.service{
  padding-bottom: 75px;
}
</style>

<template>
  <v-container class="service">
    <v-row>
      <v-col
        col="12"
        md="12"
        sm="12"
        class="d-flex justify-center align-center"
        style="column-gap: 10px"
      >
        <div class="vertical_small_line"></div>
        <h2>Our Services</h2>
        <div class="vertical_small_line"></div>
      </v-col>
      <v-col cols="12" md="12">
        <v-card elevation="6" style="background-color: #f6f1f1">
          <v-card-text class="pl-12">
            <v-row class="justify-center">
              <v-col
                class="px-3"

                v-for="(item, index) in image_dataset"
                :key="index"
                style="
                  display: flex;
                  justify-content: start;
                  align-items: center;
                  column-gap: 20px;
                "
                cols="12"
                md="5"
                sm="6"
              >
                <v-img
                  :src="require(`../assets/${item.img}`)"
                  style="max-width: 10%"
                ></v-img>
                <h6>{{ item.description }}</h6>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      image_dataset: [
      {
          img: "travel.png",
          description: "Travels Service ",
        },
        {
          img: "internet.png",
          description: "Website designing Service ",
        },
        
        {
          img: "car.png",
          description: "Car Rental Services",
        },
        {
          img: "social-media.png",
          description: "Digital Marketing Service ",
        },
        {
          img: "car_travel.png",
          description: "Tourism Service ",
        },
        {
          img: "video-marketing.png",
          description: "Promotional Film Service ",
        },


        {
          img: "driver.png",
          description: "Acting Driver Service ",
        },
       
        {
          img: "camera.png",
          description: "Commerical Event Service",
        },
        
        
        {
          img: "car.png",
          description: "Used Car Buying & Selling",
        },



        {
          img: "editing.png",
          description: "Photography & Video Editing Service ",
        },
      
      


       
      





     






        



       
       
       
        
      
        
      ],
    };
  },
};
</script>
 