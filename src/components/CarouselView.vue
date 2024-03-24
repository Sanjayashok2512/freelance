
<style scoped>
.vertical_small_line {
  width: 80px;
  height: 8px;
  border-radius: 30px;
  background-color: #ed9b0a;
}
h3 {
  font-size: 40px;
  font-family: Montserrat;
  font-weight: 700;
  line-height: 53.9px;
  color: #204a60;
  text-align: left;
  margin-bottom: 20px;
  padding-top: 30px;
}
p {
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  padding-top: 20px;
  font-family: Montserrat;
  /* color: #000; */
  text-align: justify;
  display: flex;
  align-items: center;
  /* width: 450px; */
}
.container {
  display: flex;
  width: 40vw;
}

.card {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 50vh;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  flex: 0.5;
  margin: 10px;
  position: relative;
  transition: all 700ms ease-in;
}

.card h3 {
  font-size: 24px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  margin: 0;
  opacity: 0.8;
}

.card.active {
  flex: 5;
}

@media (max-width: 480px) {
  .container {
    width: 100vw;
  }

  .card:nth-of-type(4),
  .card:nth-of-type(5) {
    display: none;
  }
}
</style>
<template>
  <div>
    <v-container class="home " >
      <v-row class="pt-7" >
        <v-col cols="12" md="5"
        sm="12">
          <h3>
            We are provide Sooryan <br />
            Cars for rent
          </h3>
          <div class="vertical_small_line"></div>
          <p>
            Step into a world of luxury with Sooriyan Travels in Chennai.
            We offer premium car rentals with experienced drivers catering to
            your every need. Our association with over ten travel companies
            guarantees top-notch service. Your ongoing support is valued.
            Wishing you success and a pleasant journey with us.
          </p>
        </v-col>
        <v-col cols="12" md="7" sm="0" style="display: flex; align-items: center; justify-content: end;">
          <v-img
            :src="require('../assets/home_image.png')"
            width="100%"
            height="100%">
          </v-img>
           <!-- <div class="container  hidden-sm-and-down">
      <div
        v-for="(image, index) in image_dataset"
        :key="index"
        :class="{ card: true, active: index === activeIndex }"
        :style="{ 'background-image': 'url(' + image.url + ')' }"
        @click="setActive(index)"
      >
        <h3
        :class="{ card: true}"
         v-if="index === activeIndex"  >{{ image.title }}</h3>
      </div>
   
          </div> -->
        </v-col>
      </v-row>
    </v-container>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
        activeIndex: 0,
      image_dataset: [
        // { title: "Home", img: "home"},
        // { title: "Services", img: "service" },
        // { title: "About Us", img: "about" },
        // { title: "Images", img: "images" },
        // { title: "Contact Us", img: "contact" },
        {
          url:
            "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          title: "Explore The World"
        },
        {
          url:
            "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          title: "Wild Forest"
        },
        {
          url:
            "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
          title: "City on Winter"
        },
        {
          url:
            "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          title: "Mountains"
        }
      ],
    };
  },
  methods: {
    setActive(index) {
      this.activeIndex = index;
    }
  },
};
</script>