<template>
<div id="all-piece">
  <NavBar></NavBar>
  <div id="nav" class="d-flex flex-row justify-content-center border-y">
    <div class="border-x">
      <router-link v-if='auth'  to="/">HOME</router-link>
       <router-link v-else to="/Login" >HOME</router-link>
    </div>
    <div class="">
      <router-link to="/about">ABOUT</router-link> 
    </div>

  </div>
  
  <div class="container-fluid px-0">
    <router-view />
  </div>
 
  </div>
  
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import { mapState} from  'vuex'


export default {
  name: "App",
  components: {
    NavBar
  },
  computed: {
    ...mapState(['auth']),
  },
  
};
</script>

<style>

#app button{
  background: black;
  border:none;
  color:rgb(153, 153, 153);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position:relative;
  
}

#nav a {
  font-weight: 700;
   color:#999999; 
  font-family: "DIN Next W01 Regular", Helvetica, Arial, sans-serif;
   text-decoration:none;
   font-size: .875rem;
   line-height: 1rem;

}
#nav>div{
  padding:20px;
}

#nav div a.router-link-exact-active {
  color: rgb(168, 51, 51);
}

#all-piece>p{
  margin-bottom: 0;
}
.border-y{
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
}
.border-x{
  border-left: 1px solid gray;
  border-right: 1px solid gray;
}
#nav{
  margin-bottom:40px;
}


</style>
