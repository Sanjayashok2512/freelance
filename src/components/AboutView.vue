<style scoped>
.vertical_small_line {
  width: 60px;
  height: 4px;
  border-radius: 30px;
  background-color: #204a60;
}
p {
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  font-family: Montserrat;
  /* color: #000; */
  text-align: justify;
  display: flex;
  align-items: center;
  /* width: 450px; */
}
h2 {
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 35px;
  margin: 20px 0px;
  line-height: 68.9px;
  color: black;
}

h6 {
  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 12px;
}
</style>
<template>
 <div class="about" style="background-color: #ed9b0a">
  <v-container  >
    <v-row class="pa-4">
      <v-col
        col="12"
        md="12"
        sm="12"
        class="d-flex justify-center align-center"
        style="column-gap: 10px"
      >
        <div class="vertical_small_line"></div>
        <h2>About Us</h2>
        <div class="vertical_small_line"></div>
      </v-col>
      <v-col
        cols="12"
        md="6"
        sm="12"
      >
        <v-img
          :src="require('../assets/carabout2.png')"
          width="100%"
          height="100%"
        ></v-img>
      </v-col>
      <v-col
        col="12"
        md="6"
        sm="12"
      >
      <p style="text-align: justify; padding-bottom: 30px; font-weight: 700;">
          Sooriyan Travels is Pleased to welcome you. Sooriyan Travels
           is a Company operating in chennai. Our company offers car, van
          and Luxury Bus Rentals. Our company has Experienced good Drivers. They
          will understand your Needs and Act Accordingly. More than ten travels
          Companies are associated with Sooriyan Travels so you can get
          the Best Service at any time through Sooriyan Travels. We kindly
          ask customers for their continued good support. Wishing you all
          success in your Pleasant journey.
        </p>
      </v-col>
    </v-row>
  </v-container>
 </div>
</template>

