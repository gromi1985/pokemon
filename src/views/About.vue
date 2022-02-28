<template>
  <div id="principalPage">
    <div class="w-100">
    <p >ALL OF YOUR POKES BALLS FAVORITES HERE...</p>
    </div>
    <img id="logo" alt="start Image" src="../assets/pokeball-pokemon-svgrepo-com.svg">
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";

export default {
  name: 'Home',
  components: {
    Footer
  },
  }
</script>

<style>
div>img{
  width: 100%;
  height:auto;
}
p{
  color:black;
  font-size:.8rem;
  padding:.8rem;

}

#principalPage{
  height:75vh;
}
#principalPage #logo{
  height:20vh;
  width:20vh;
}

Footer{
  position:absolute;
  bottom:-15vh;
  height:auto;
  margin-right:0px;
  margin-left:0px;

}

@media (max-width: 400px) {
  #infoCharacter,
    #moreMain{
    height:auto;
  }
  
  Footer{
    height:40vh;
    bottom:-40vh;
  }

}
</style>