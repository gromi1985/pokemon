<template>
  <div id="login">
    
    <div>
      <div>
        <img src="../assets/loginAccount.png" alt="" />
      </div>
      <h1>SIGN IN</h1>
      <form 
      id="signIn"
      @submit.prevent="checkForm"
      novalidate
      action="#">
        <InputElement
          idElement="field-7"
          headTitle="Email"
          @newOninput="oninputElement"
          @newBlur="blurElement"
          @newFocus="focusElement"
          :flagEvents="flagEventsObject"
          tipo="2"
        ></InputElement>

        <InputElement
          idElement="field-8"
          headTitle="Password"
          @newOninput="oninputElement"
          @newBlur="blurElement"
          @newFocus="focusElement"
          :flagEvents="flagEventsObject"
          tipo="1"
        ></InputElement>

        <input class="h-element" type="submit" value="Sign In" />
        <span class="errorLogin text-start" 
               v-if="!auth && esActivateError">{{msgError}}</span>

        <div id="remember-container">
          <span id="remember"> Need help signing in?</span>
        </div>
        <input class="h-element" type="button" value="Create an account" @click="goRegister"/>
      </form>
    </div>
    
  </div>
</template>
<script>
import InputElement from "@/components/InputElement.vue";
import { mapActions,mapState} from  'vuex'

export default {
  name: "Login",
  components: {
    InputElement,
  },
  data() {
    return {
      email: "",
      usuario: "",
      password: "",
      mostrar: false,
      esActivateError:false,
      msgError:"Error: Usuario o Password Incorrecto",
  
      userLogin:{email:'',password:'',existeUser:false},
      flagEventsObject: {
        esActivateBlur: false,
        esActivateFocus: false,
        esActivateOninput: false,
      },
    };
  },
  computed:{
    ...mapState(['auth']),
  },

  methods: {
    ...mapActions(['LOGIN_USER']) ,
    goHome() {this.$router.push({name:'Home'})},
    goRegister(){this.$router.push({name:'Register'})},
    checkForm(e) {
      let userMail= document.querySelector('#field-7 input').value;
      let userPassword= document.querySelector('#field-8 input').value;
       e.preventDefault();
       this.userLogin.email = userMail;
       this.userLogin.password = userPassword;
       
      if(userPassword && userMail)
      {
          if(this.emailValidatePattern(this.userLogin.email)){
          
           this.LOGIN_USER(this.userLogin);
           if(this.auth){
             this.goHome();
           }

           else
             this.esActivateError = true;
          }
      }
      },
    initEventVariables() {
      this.flagEventsObject.esActivateBlur = false;
      this.flagEventsObject.esActivateFocus = false;
      this.flagEventsObject.esActivateOninput = false;
    },
    blurElement() {
      this.initEventVariables();
      this.flagEventsObject.esActivateBlur = true;
    },
    focusElement() {
      this.initEventVariables();
      this.flagEventsObject.esActivateFocus = true;
    },
    oninputElement() {
      this.initEventVariables();
      this.flagEventsObject.esActivateOninput = true;
    },
     emailValidatePattern(cadena)
    {
         console.log('emailValidatePattern');

         let tuEmail = cadena.toString()
         const patron = /^[\w]+@{1}[\w]+\.+[a-z]{2,3}$/
         let respuesta = patron.test(tuEmail)
         console.log('Respuesta:' + respuesta);
         return respuesta;
    },
  },
  // computed: {
  //     ...mapGetters (['getUser']),
  //         getUserTwo(){
  //           return this.$store.getters.getUser;
  //        }
  //   },
};
</script>
<style>
#login {
  font-family: "DIN Next W01 Light";
  margin-top: 100px;
  padding-bottom: 40px;
  min-width: 440px;
  min-height: 23rem;
  width: 410px;
  margin: 0 auto;
  font-size: 12px;
  min-height: 100vh;
}

#login * {
  letter-spacing: 0.06em;
}

form > * {
  margin: 0 auto;
}

#login img {
  width: 322px;
  height: 60px;
}
#login > div {
  height: auto;
  background-color: #181818;
  padding: 60px;
  margin-top: 40px;
}
#login > div > form > * {
  width: 100%;
}
#login .elementItem input,
#login input.h-element
{
  height: 40px;
}


#remember-container {
  text-align: right;
  font-size: 1.25em;
}
#login h1 {
  font-size: 1.4rem;
  margin-bottom: 1.3rem;
  text-transform: uppercase;
  color: #edd700;
  text-align: center;
}
#login input:not([type="checkbox"]) {
  margin-bottom: 1rem;
}

.elementItem > label {
  display: block;
  /* border:2px solid #edd700; */
  box-sizing: border-box;
  position: relative;
  background: white;
  width: 100%;
  border: none;
}

.elementItem > label > input {
  display: block;
  background: transparent;
  outline: none;
  width: 100%;
  padding: 5px 5px;
  /* border:none; */
  border: 2px solid black;
}
.elementItem > label > span {
  position: absolute;
  color: #abb0b8;
  top: 5px;
  left: 5px;
}
.elementItem > label > span,
.elementItem > label > #input {
  padding: 0;
}

/*FIELD*/
.elementItem > label > input.focus {
  background: #abb0b8;
  color: #edd700;
}
.elementItem > label.focus {
  color: #abb0b8;
  border-color: #edd700;
}

.elementItem > label > input.blur {
  background: white;
}
.elementItem > label > .blur {
  border-color: red;
}

.blur,
.oninput,
.errorLogin {
  border: none;
  color: red;
  background-color: #181818;
  display: block;
}

.elementItem .blur {
  margin-bottom: 0.4rem !important;
}
.elementItem > label > span.oninput {
  color: white;
}
span#remember{
 color: #edd700;
}
</style>