<template>
  <div>
    <div id="app">
      <v-app>
        <v-main>
          <v-row>
            <v-col cols="12" 
        xs="12" 
        sm="3" 
        md="5"
        lg="6" 
        xl="5"> </v-col>
            <v-col
            class="px-11"
            cols="12"
          xs="0"
          sm="9"
          md="7"
          lg="6"
          xl="5">
              <h2>
                You need design-done. <br />
                Simply snag it!
              </h2>
              <div class="vertical_small_line"></div>
              <p>
                The significance of your brand's designs <br>
                shouldn't be entrusted to unpredictable <br>
                freelancers or costly creative firms. Instead, <br>
                consider employing a knowledgeable, full-time <br> 
                designer who is familiar with both you personally <br>
                and your brand intimately.
                
              </p>
              <button class="btn1"> Request a free proposal </button>
            </v-col>
          </v-row>
        </v-main>
      </v-app>
    </div>
  </div>
  <!-- <HelloWorld /> -->
</template>

<script>
import { defineComponent } from "vue";

// Components
// import HelloWorld from "../components/HelloWorld.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    // HelloWorld,
  },
});
</script>
<style>
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
  background-color: #CBFF5B;
  margin: 25px 0px 20px;
}

</style>

