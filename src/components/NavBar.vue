<template>
    <div class="container-fluid " id="headCustom">  
      <nav id='menu' class="navbar justify-content-around">
              <p>Pokedex</p>
              <div v-if="!auth" id="registerUser" class=" d-flex justify-content-end align-items-center">
                <router-link class = "nav-link" to = "/login"> LOGIN </router-link>
                <span>//</span>
                 <router-link class = "nav-link" to = "/register"> SIGN UP </router-link>
              </div>
              <div v-else>
                 <span>{{getUserCurrent}}</span>
                 <router-link @click="onLogout"  class = "nav-link" to = "/about">LOGOUT </router-link>
              </div>
    </nav>
  </div> 


</template>

<script>
import { mapGetters, mapState} from  'vuex'

export default {
  name:'NavBar',
 data(){
   return {
    brand:'Prueba'
   }
 },
 computed:{
    ...mapState(['auth']),
    ...mapGetters(['getUserCurrent']),
  },
  methods:{
    onLogout() {
      console.log('onLogout()');
      this.$store.dispatch("doLogout");
    }
  }
}
</script>

<style scoped>

#headCustom {
    margin: 0 auto;
    padding: 15px 0;
    background-color:rgb(31, 30, 30);
}

#menu{
  padding:0;
  color:white;
  width:100%;
}
#container-nav{
  width: 100%;
  margin-left:0;
   
}
p{
   font-size:3rem;
   font-family: 'Lobster', cursive;
   transition:all 300ms ease-in-out;
   color:white;
   position:relative;
   cursor:pointer;
}
p::before{
  content:url("../assets/pokeball-pokemon-svgrepo-com.svg");
  width: 15px;
  height: 15px;
  position:absolute;
  left: 10px;
  top:10px;
}
#pokeimg{
  height: 2rem;;
}
#menu>ul{
  list-style: none;
  padding :1rem;
}
#menu>ul>li{
margin:1.3rem;
}
img{
    height: 100%;
    width:203px;
    /* max-height: 88px; */
}  
.nav-link{
  color:rgb(153, 153, 153);
}  
.nav-link:hover{
  color:rgb(153, 153, 153);;
}
/**Estilos de los Input para Login y Register */


</style>