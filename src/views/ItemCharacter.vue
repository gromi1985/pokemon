<template>
  <div class="infoCharacter px-0 ">
    <div >
      <div class="row">
        <h1>{{ getItemCurrent.name }}</h1>
      </div>
      <div id="moreMain" class="row justify-content-center align-items-center flex-wrap">
        <div id="moreData-1" class="col-10 col-sm-5 col-md-4 col-lg-3">
          <img :src="getItemCurrent.imgUrl2" />
         
        </div>
        <div id="moreData-2" class="col-10 col-sm-5 col-md-4 col-lg-3">
            <div id="temp" class="d-flex flex-column justify-content-left  ps-3 ">
              <p class="text-start">Altura: {{ getItemCurrent.altura }}</p>
              <p class="text-start">Peso: {{ getItemCurrent.peso }}</p>
              
              <p class="text-start">Habilidad: {{ getItemCurrent.habilidad }}</p>
              <p class="text-start">Especie: {{ getItemCurrent.especie }}</p>
              <div></div>
            </div>
             <div class="d-flex ps-3">
                <TypeColor :types="getItemCurrent.tipo"/>
           </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import TypeColor from '@/components/TypeColor.vue'
import {  mapGetters } from "vuex";

export default {
  components:{
    Footer,
    TypeColor
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
  /* height:85vh; */
  font-size:1.2rem;
  margin-left:0px;
  margin-right:0px;
  position:relative;
}

#moreMain{
  min-height:70vh;
}
/* #moreMain img{
  max-height: 30vh;
  width: 300px;
  
} */
/* #temp{
  height: 40%   !important;;
}  */
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
#moreData-1>img{
  width:100%;
}

@media (max-width: 600px) {
  /* #infoCharacter,
    #moreMain{
    height:auto;
  } */
  #moreData-1
  {
    margin-top:10vh;
    height:auto;
  }
  #moreData-2{
    height:40vh;
    margin-top:10vh;
  }
  Footer{
    height:50vh;
    bottom:-50vh;
  }


}

</style>
