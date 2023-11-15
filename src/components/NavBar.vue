<!-- <a href="" target="_blank_">
              <img width="60" src="" alt="logo" />
            </a> -->
<template>
  <div id="nav" elevation = 12>
    <nav class="my_nav">
      <v-container class="fill-height d-flex justify-center align-center px-0">
        <v-col 
        class="logo pl-6" 
        cols="12" 
        xs="12" 
        sm="3" 
        md="5"
        lg="6" 
        xl="4">
          <h1>Grape </h1>
          <!-- <img src="@/assets/grape.svg" alt="logo"> -->
        </v-col>
        <v-col
          class="d-none d-sm-block "
          cols="12"
          xs="0"
          sm="9"
          md="7"
          lg="6"
          xl="6"
        >
          <v-row>
            <v-col class="d-flex align-center px-0">
              <router-link
                class="link py-0"
                v-for="(item, i) in links"
                :key="i"
                :to="generateDynamicRoute(item.url)"
                @click="toggleVisibility(item)"
              >
                <div v-if="item.visible === true" style="font-family: Montserrat; font-size: 15px; font-weight: 700; ">
                  <span
                    class="underline_left"
                   
                  ></span>
                  {{ item.title }}
                  <span
                    class="underline_right"
                   
                  ></span>
                </div>
              </router-link>
              <button class="btn">Book a Call</button>
            </v-col>
          </v-row>
        </v-col>
        <!-- <v-col
          class="action_btn d-none d-sm-block"
          cols="12"
          xs="0"
          sm="2"
          md="3"
          lg="2"
          xl="1"
        >
          
        </v-col> -->
      </v-container>
    </nav>
    <hr style="border : 1px solid grey">
  </div>
</template>
<script>
export default {
  mounted() {
    // Add the Google Fonts stylesheet dynamically to the DOM
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  },
  data() {
    return {
      links: [
        { title: "Home", url: "home", visible: false },
        { title: "Our Works", url: "works", visible: true },
        { title: "About", url: "about", visible: true },
        { title: "Blog", url: "blog", visible: true },
        { title: "Contact Us", url: "contactus", visible: true },
       
      ],
    };
  },
  methods: {
    generateDynamicRoute(url) {
      return `/${url}`;
    },
    toggleVisibility(selectedItem) {
      // Set the clicked link's visibility to false
      selectedItem.visible = false;

      // Set visibility to true for all other links
      this.links.forEach((item) => {
        if (item !== selectedItem) {
          item.visible = true;
        }
      });
    },
  },
 
};
</script>
<style>
@import url("https://fonts.cdnfonts.com/css/event-horizon");
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
}
#nav {
  /*background: url(https://images.unsplash.com/photo-1551970634-747846a548cb?ixlib)
    center/cover no-repeat;*/
  /* background: radial-gradient(
    ellipse at bottom,
    rgba(27, 39, 53, 1),
    rgba(9, 10, 15, 1)
  ); */
  overflow: hidden;
  z-index: 1;
}
.my_nav {
  backdrop-filter: blur(10px);
}
.link {
  position: relative;
  color: #000;
  padding: 10px 10px;
  font-size: 15px;
  line-height: 20.7px;
  font-weight: 600;
  font-family: Montserrat;
  color: #000;
  text-align: left;
  display: inline-block;
  max-height: 20.700000762939453px;
}
.link .underline_left,
.link .underline_right {
  display: block;
  position: absolute;
  height: 4px;
  width: 0px;
  bottom: -18px;
  transition: 0.25s;
}
.link .underline_left {
  /* background-color: #000; */
  left: 50%;
  border-radius: 2px 0 0 2px;
}
.link .underline_right {
  /* background-color: #000; */
  right: 50%;
  border-radius: 0 2px 2px 0;
}
.link:hover .underline_left {
  background-color: #cbff5b;
  width: 50%;
  left: 0;
}
.link:hover .underline_right {
  background-color: #cbff5b;
  width: 50%;
  right: 0;
}
.btn {
  margin-left: 10px;
  position: relative;
  font-size: 14px;
  font-family: Montserrat;
  background: #cbff5b;
  backdrop-filter: blur(10px);
  color: #000;
  padding: 5px 31.401622772216797px 5px 31.728382110595703px;
  box-sizing: border-box;
  letter-spacing: 2px;
  overflow: hidden;
  border: 1px solid #fff5;
  border-radius: 12px;
  transition: 0.25s;
  text-align: center;
  font-weight: 600;
}
.btn:hover {
  box-shadow: 5px 5px 5px #0005;
  transform: scale(1.025);
}
.btn:active {
  box-shadow: 0 0 0 #0005;
  transform: scale(1);
}
.btn::before {
  position: absolute;
  content: "";
  height: 100%;

  text-align: center;
  width: 100%;
  background: -webkit-linear-gradient(
    left,
    rgba(255, 255, 255, 0) 0,
    rgba(255, 255, 255, 0.25) 50%,
    transparent 50%
  );
  top: 0;
  left: -80%;
  transform: skew(-45deg);
  transition: 0.5s;
}
.btn:hover::before {
  left: 120%;
}
h1{
  font-family: Montserrat;
}
</style>

