<!-- <a href="" target="_blank_">
              <img width="60" src="" alt="logo" />
            </a> -->
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
              max-height: 10.700000762939453px;
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
              background-color: #ed9b0a;
              width: 50%;
              left: 0;
            }
            .link:hover .underline_right {
              background-color: #ed9b0a;
              width: 50%;
              right: 0;
            }
            
            h1 {
              font-family: Montserrat;
              font-size: 17px;
              text-align: center;
            }
          
            .item-wrapper {
              font-family: Montserrat;
              font-size: 12px;
              font-weight: 700;
            }
            .link{
              padding-top: 0px;
              padding-bottom: 0px;
            }
            /* .item-wrapper .title {
              display: inline-block; 
            } */
            </style>
            <template>
              <v-card id="nav" elevation="12">
                <v-toolbar :elevation="3" style="height: 80px;"  class=" d-flex justify-center align-center " >
                  <!-- <template v-slot:prepend>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
              </template> -->
            
                
                    <!-- <nav class="my_nav"> -->
                      <v-container
                          fluid
                        class="d-flex justify-start align-center mx-10"

                      >
                     <v-row>
                      <v-col cols="12" md="3"   class=" d-flex justify-left align-center "
 >
                        <img :src="require('../assets/icons/logo.png')"   style="width: 40%;"/>
            
                       
                      </v-col>
                      <!-- <v-spacer></v-spacer> -->
                        <v-col
                          cols="12"
                          class=" logo d-flex flex-column justify-center align-center "
                          md="4"
                          
                         
                        >
                          <h1 style="color: #ed9b0a  ; line-height: 1">SOORYAN</h1>
                          <h1 style="color: #204a60">TRAVELS</h1>
                        </v-col>
                        <v-col
                          cols="12"
                          md="5"
                          class=" d-flex justify-center align-center "
                        >
                          <v-row>
                            <v-col cols="12"  class=" d-flex align-center justify-end"> 
                              <div class="item-wrapper " v-for="(item, i) in links"
                                :key="i">
                                <div class="link">
                                  <span class="underline_left"></span>
                                <span class="title item-wrapper" @click=page_navigate(item.url)>{{ item.title }}</span>
                                <span class="underline_right"></span>
                                </div>
                              </div>
                            </v-col>
                          </v-row>
                        </v-col>
                     </v-row>
                      </v-container>
                    <!-- </nav> -->
                  
                </v-toolbar>
              </v-card>
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
                    { title: "Services", url: "service", visible: true },
                    { title: "About Us", url: "about", visible: true },
                    { title: "Images", url: "images", visible: true },
                    { title: "Contact Us", url: "contact", visible: true },
                  ],
                };
              },
              methods: {
                page_navigate(link_url){
            console.log(link_url,"link_url")
            this.$emit('navigation', link_url)
                }, 
                // generateDynamicRoute(url) {
                //   return `/${url}`;
                // },
                // toggleVisibility(selectedItem) {
                //   // Set the clicked link's visibility to false
                //   selectedItem.visible = false;
            
                //   // Set visibility to true for all other links
                //   this.links.forEach((item) => {
                //     if (item !== selectedItem) {
                //       item.visible = true;
                //     }
                //   });
                // },
              },
            };
            </script>
           
            