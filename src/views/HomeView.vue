<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
.btn1 {
  margin-top: 10px;
  width: 55%;
  font-family: Montserrat;
  font-weight: 800;
  /* position: relative; */
  border-radius: 13px;
background-color: #cbff5b;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 10px 0px;
box-sizing: border-box;
text-align: center;
font-size: 16px;
  /* transition: 0.25s; */
}
h2 {
  font-size: 53px;
  font-family: Montserrat;
  font-weight: 700;
  line-height: 68.9px;
  color: #000;
  text-align: left;
  margin-bottom: 20px;
  padding-top:150px;
}
p {
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  font-family: Montserrat;
  /* color: #000; */
  text-align: left;
  display: flex;
  align-items: center;
  width:450px
}
.vertical_small_line{
  width: 60px;
  height: 8px;
  border-radius: 30px;
  background-color: #204a60;
  margin: 25px 0px 20px;
}

</style>

]
<template>
  
    <div id="app">
      <v-app>
        <v-layout>
          <v-main>
            <NavBar  @navigation = "link_url"/>
            
            <CarouselView ref="home"/>
            <ServicesView ref="service"/>
            <AboutView ref="about"/>
            <ImageView ref="images"/>
            <ContactUsView ref="contact"  @navigation1 = "link_url1"/>
          </v-main>
        </v-layout>
       
       
      </v-app>
    </div>
  
  <!-- <NavBar /> -->
</template>

<script>
import { defineComponent } from "vue";

import NavBar from "../components/NavBar.vue";
import ServicesView from "../components/ServicesView.vue";
import AboutView from "../components/AboutView.vue";
import ImageView from "../components/ImageView.vue";
import ContactUsView from "@/components/ContactUsView.vue";
import CarouselView from "@/components/CarouselView.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    NavBar,
    CarouselView,
    ServicesView,
    AboutView,
    ImageView,
    ContactUsView,
  },
  methods: {
    link_url(sectionRef) {
  if (sectionRef && this.$refs[sectionRef]) {
    this.$nextTick(() => {
      this.$refs[sectionRef].$el.scrollIntoView({ behavior: "smooth" });
    });
  }
},
    link_url1(sectionRef) {
  if (sectionRef && this.$refs[sectionRef]) {
    this.$nextTick(() => {
      this.$refs[sectionRef].$el.scrollIntoView({ behavior: "smooth" });
    });
  }
}


  }
});
</script>
