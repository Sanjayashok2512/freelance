<style scoped>
.vertical_small_line {
  width: 60px;
  height: 4px;
  border-radius: 30px;
  background-color: #ed9b0a;
}

.images {
  padding-bottom: 75px;
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
  font-weight: 500;
  font-style: normal;
  font-size: 12px;
}

 
</style>
<!-- <style lang="sass" scoped>

  
</style> -->
<template>
  <v-container class="images">
    <v-row class="justify-center">
      <!-- images -->
      <v-col
        cols="12"
        lg="12"
        md="12"
        sm="12"
        class="d-flex justify-center align-center"
        style="column-gap: 10px"
      >
        <div class="vertical_small_line"></div>
        <h2>Images</h2>
        <div class="vertical_small_line"></div>
      </v-col>
      <v-col
        cols="12"
        lg="4"
        md="4"
        sm="6"
        xs="12"
        v-for="(item, i) in image_dataset"
        :key="i"
      >
      <v-hover
        v-slot="{ isHovering, props }"
        open-delay="200"
      >
      <v-card
      :class="{ 'on-hover': isHovering }"
          :elevation="isHovering ? 16 : 2"
          height="250"
          width="350"
          v-bind="props"
          :image="require(`../assets/${item.img}`)"
        >
        </v-card>
      </v-hover>
      
      </v-col>

      <!-- vedio -->
      <v-col
        cols="12"
        md="12"
        sm="12"
        class="d-flex justify-center align-center"
        style="column-gap: 10px"
      >
        <div class="vertical_small_line"></div>
        <h2>Video</h2>
        <div class="vertical_small_line"></div>
      </v-col>
      <v-col
        cols="12"
        md="6"
        sm="12"
        class="d-flex align-center"
        style="column-gap: 10px"
      >
      <v-card
        class="mx-auto"
        height="300"
        width="100%"
        theme="dark"
        title= "vedio"
        ></v-card>
        
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
          img: "car13.jpeg",
        },
       
        {
          img: "car11.jpeg",
        },
        {
          img: "car4.jpeg",
        },
       
        {
          img: "car6.jpeg",
        },
        {
          img: "car3.jpeg",
        },
        {
          img: "car5.jpeg",
        },
        // {
        //   img: "car7.jpeg",

        // },
        // {
        //   img: "car8.jpeg",

        // },
        // {
        //   img: "car11.jpeg",

        // },
      ],
    };
  },
};
</script>
