<template>
  <div class="principalPage">
    <p>ALL OF YOUR POKEMONS FAVORITES NOW HERE+</p>
    <!-- <img alt="start Image" src="../assets/img1.webp"/> -->
    <div class="row justify-content-center mx-0">
     <ListCharacters  ></ListCharacters>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
 import ListCharacters from '@/components/ListCharacters.vue'
import Footer from "@/components/Footer.vue";

export default {
  name: 'Home',
  components: {
    ListCharacters,
    Footer
  },
  
}
</script>

<style>
div>img{
  width: 100%;
}
p{
  color:white;
  font-size:.8rem;
  padding:.8rem;
}
.principalPage{
  min-height: 100vh;
  margin:0px;
}

Footer{
  height:15vh;
}
</style>