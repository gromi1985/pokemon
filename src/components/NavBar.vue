<template>
    <div class="container-fluid " id="headCustom">  
      <nav id='menu' class="navbar justify-content-center">
              <p>Pokedex</p>
    </nav>
  </div> 


</template>

<script>
export default {
  name:'NavBar',
 data(){
   return {
    brand:'Prueba'
   }
 },
 methods: {
         goHome(){
          this.$router.push({ path: 'home'})
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