<template>
  <div id="templateCard" 
       class="col-10 col-md-4 col-lg-3  m-3" 
       v-for = "(item,index) in info" 
       :key="index" 
       @click="DetailCharacter(item.urlInitId)">
        <div id="mainCard" clss="card ">
          <img
            src="../assets/45degreee_fabric.png"
            class="card-img-top imgCard-1 d-block"
          />

          <div class="card-body pt-0">
            <img :src="item.imgUrl" class="card-img-top imgCard-2" />

            <h5 class="card-text"> {{item.name}}<span>39</span></h5>
            <p class="card-text">{{item.experience}} Exp</p>
          </div>
          <div class="card-footer d-flex flex-nowrap justify-content-between">
            <div class="card-footer-item">
              <h3 class="text-center mb-0">{{item.atack}}K</h3>
              <p class="p-0 m-0 text-dark">Ataque</p>
            </div>
            <div class="card-footer-item ">
              <h3  class="mb-0">{{item.especial}}K</h3>
              <p class="p-0 m-0 text-dark">Especial</p>
            </div>
            <div class="card-footer-item ">
              <h3 class="mb-0">{{item.defensa}}K</h3>
              <p class="p-0 m-0 text-dark">Defensa</p>
            </div>
          </div>
          <!-- <a id="whereGo" href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
  </div>
</template>

<script>
 import {mapActions,mapState} from  'vuex'
export default {
  
  computed: {
      ...mapState(['info']),
    },
  methods: {
    ...mapActions(['GET_LISTPOKES']),
    
    DetailCharacter(urlId){ 
      console.log("DetailCharacter");
      // console.log('DetailCharacter:' + url); 
      // let patternRegex= '[^/]+/$';//Ultima parte de la url
      // this.$router.push('/detailPoke/'+ url.match(patternRegex)[0]);   
            this.$router.push("/itemCharacter/" + urlId);                                              
                                               
      },
 
    scroll(){
      window.onscroll = () => {
        let sumaSizes = document.documentElement.scrollTop + window.innerHeight;
        //Esto funciona hasta el final de la pagina
      //  let limitDown = document.documentElement.offsetHeight - 1;
      //   let limitUp = document.documentElement.offsetHeight + 1;


        let limitDown = document.documentElement.offsetHeight - 129;
        let limitUp = document.documentElement.offsetHeight + 5;

        let bottomOfWindow = sumaSizes >= limitDown && sumaSizes <= limitUp;


        //cambio y no espero que llegue al final, por el footer


        // console.log('Todavia no entra.....')
        // console.log(bottomOfWindow);
        // console.log('limitDown:' + limitDown);
        // console.log('limitUp:' + limitUp);
        // console.log('sumaSizes:' + sumaSizes);
        // console.log('document.documentElement.scrollTop :' + document.documentElement.scrollTop);
        // console.log('window.innerHeight: ' + window.innerHeight);
        // console.log('document.documentElement.offsetHeight:' + document.documentElement.offsetHeight);

        if (bottomOfWindow ) {
          console.log('Va a pintar...');
          this.$store.dispatch("GET_LISTPOKES");
        }
       
      };
      },
  },

 
    /* beforeMount() {
       this.$store.dispatch("GET_LISTPOKES");
       window.addEventListener('scroll',this.scroll()); 

     },*/
   mounted() {
      this.$store.dispatch("GET_LISTPOKES");
      this.scroll();
    },
  
  }
</script>

<style scoped>
#mainCard {
  font-family: "Kumbh Sans", sans-serif;
  box-sizing: border-box;
  height: 35vh;
  font-size: 62.5%;
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 20px 20px 50px 10px pink inset;
  /* width:30vw; */
}
#mainCard > img {
  width: 100%;
  height: 12vh;
}

.imgCard-2 {
  width: 55%;
  height: 9vh;
  /* border: 3px solid rgb(182, 182, 185); */
  border-radius: 50%;
  margin-top: -5.5vh;
  background-color: transparent;
}
h5 {
  margin-top: 1rem;
  font-size: 1.4rem;
  text-transform: capitalize;
 
}
.card-body>p {
color:black;
}
span {
  font-weight: 400;
  margin-left: 1rem;
  color: hsl(0, 0%, 59%);
  text-transform: capitalize;

}
p.card-text {
  font-size: 1.0rem;
  margin-bottom: 2rem;
  margin-top: 0;
  padding-top:0;
}

div.card-body{
    border-bottom: 1px solid rgba(153,153,153,0.383)
}
.card-footer{
    height:6vh;
    padding-bottom: .4rem;;
}

.card-footer-item h3{
  font-size:1.1rem;
}
#whereGo{
  margin-top:-15px;
}
</style>
