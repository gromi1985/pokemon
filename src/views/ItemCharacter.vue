<template>
  <div class="infoCharacter px-0 ">
    <div >
      <div class="row">
        <h1>{{ getItemCurrent.name }}</h1>
      </div>
      <div id="moreMain" class="d-flex justify-content-center align-items-center flex-wrap">
          <img class="mx-5 my-5" :src="getItemCurrent.imgUrl2" />

              <div id="moreData">

        <div id="temp" class="d-flex flex-column justify-content-left  ps-3 ">
          <p class="text-start">Altura: {{ getItemCurrent.altura }}</p>
          <p class="text-start">Peso: {{ getItemCurrent.peso }}</p>
          <div class="d-flex ">
            <p>Tipo:</p>
            <div  v-for = "(item , index)  in getItemCurrent.tipo"   :key="index">
              <p class="me-3">{{item }}<span></span></p>
            </div>
          </div>
          <p class="text-start">Habilidad: {{ getItemCurrent.habilidad }}</p>
          <p class="text-start">Especie: {{ getItemCurrent.especie }}</p>
          <div></div>
        </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import {  mapGetters } from "vuex";
export default {
  components:{
    Footer
  },
  computed: {
    ...mapGetters(["getItemCurrent"]),
  },

  mounted() {
    // console.log("Estamos montando");
    this.id = this.$route.params.id;
    // console.log(this.id);
    this.$store.dispatch("GET_ITEMCHARACTER", this.id);
  },
};
</script>

<style scoped>
.infoCharacter #moreMain img{
  background-color: ghostwhite;
}
.infoCharacter h1 {
  background: #fff;
  text-transform: capitalize;
}
.infoCharacter{
  background:no-repeat url('../assets/fondo1.jpg');
  background-size:100% 100%;
  height:85vh;
  font-size:1.5rem;
  margin-left:0px;
  margin-right:0px;
  position:relative;
}
#moreMain{
  height:50vh;
  margin-right: 0;
  margin-left: 0;
}
#moreMain img{
  max-height: 30vh;
  width: 300px;
  
}
#temp{
  height: 40%   !important;;
} 
#moreData>*{
  line-height: 3rem;
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
    height:50vh;
    bottom:-50vh;
  }


}

</style>
