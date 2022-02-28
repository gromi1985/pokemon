<template>
<!-- Tipo 1: Texto
     Tipo 2: Email
     Tipo 3: Password -->
  <div id="register" class="row justify-content-center align-items-center">
    <div class="col-sm-7 col-md-5 col-lg-2">
    <div>
      <img src="../assets/loginAccount.png" alt="" />
    </div>
    <h1>CREATE YOUR ACCOUNT</h1>
    <form
      novalidate
      id="form"
      action="#"
      @submit="checkForm">
    <div>
     
      <InputElement idElement="field-1" 
                    headTitle="First Name"
                    @newOninput="oninputElement"
                    @newBlur="blurElement"
                    @newFocus="focusElement"
                    :flagEvents='flagEventsObject'
                    tipo='1'
                    ></InputElement>

      <InputElement idElement="field-2" 
                    headTitle="Last Name"
                    @newOninput="oninputElement"
                    @newBlur="blurElement"
                    @newFocus="focusElement"
                    :flagEvents='flagEventsObject'
                    tipo='1'
                    ></InputElement>


      <InputElement idElement="field-3" 
                    headTitle="Email"
                    @newOninput="oninputElement"
                    @newBlur="blurElement"
                    @newFocus="focusElement"
                    :flagEvents='flagEventsObject'
                    tipo='2'
                    ></InputElement>
       
      <InputElement idElement="field-4" 
                    headTitle="Display Name"
                    @newOninput="oninputElement"
                    @newBlur="blurElement"
                    @newFocus="focusElement"
                    :flagEvents='flagEventsObject'
                    tipo='1'
                    ></InputElement>

       <span class="textDisplayName">
        New display names need to be approved. Until then, you'll see a
        temporary display name.
      </span>
      <InputElement idElement="field-5" 
                    headTitle="Password"
                    @newOninput="oninputElement"
                    @newBlur="blurElement"
                    @newFocus="focusElement"
                    :flagEvents='flagEventsObject'
                    tipo='3'
                    ></InputElement>

      <div class="text-check">
        <label class="checkbox">
          <input class="me-1" type="checkbox" />Show password
        </label>
      </div>
     </div>


      <div class="text-check">
        <label>
          <input class="me-1" type="checkbox" v-model="offers" /> Yes! I would
          like to receive by email special offers and updates about Lucasfilm
          Ltd. and other products and services from The Walt Disney Family of
          Companies.
        </label>
      </div>

      <p class="termAccept">
        By creating an account, you agree to our Terms of Use and acknowledge
        that you have read our Privacy Policy, Cookies Policy and EU Privacy
        Rights. More...
      </p>
      <p class="termAccept">My home country/region: Spain. input.</p>
      <input class="h-element w-100" type="submit" value="Create Account" />

      <p>
        <a href="" @click="goLogin">Already have an account? Sign In</a>
      </p>
    </form>
  </div>
  </div>
</template>


<script>
import InputElement from '@/components/InputElement.vue'
import {mapActions} from  'vuex'


export default {
  name: 'Register',
  components:{
    InputElement
  },
  data() {
    return {
      flagEventsObject:{'esActivateBlur':false,
                        'esActivateFocus':false,
                        'esActivateOninput':false},
      contador:10,
      esActivateError:false,
      msgError:"Error: Usuario o Password Incorrecto",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      offers: "",
      displayName: "",


      userRegister: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        offers: "",
        displayName: "false"
      },
      flagError:false
    };
  },
  methods: {
     ...mapActions(['REGISTERUSER']) ,
    goLogin() {
      this.$router.push({ name: "Login" });
    },
    goHome(){
      this.$router.push({name:'Home'});
    },
    initEventVariables(){
     console.log('initEventVariables');
     this.flagEventsObject.esActivateBlur = false;
     this.flagEventsObject.esActivateFocus= false;
     this.flagEventsObject.esActivateOninput= false;
    },
    blurElement() {
      console.log('blur');  
      this.initEventVariables();
      this.flagEventsObject.esActivateBlur = true;
    },
    focusElement(){
      console.log('focus');
      this.initEventVariables();
      this.flagEventsObject.esActivateFocus = true;
    },
    oninputElement(){
      console.log('oninputElement');
      this.initEventVariables();
      this.flagEventsObject.esActivateOninput = true;
    },
     validateUser(){
         this.$store.dispatch("PUSH_USER");
         this.goHome();   
     },
    
    checkForm(e){
      console.log('checkForm');
       e.preventDefault();
       this.userRegister.email = document.querySelector('#field-1 input').value;
       this.userRegister.password = document.querySelector('#field-2 input').value;
       this.userRegister.firstName = document.querySelector('#field-3 input').value;
       this.userRegister.lastName = document.querySelector('#field-4 input').value;
       this.userRegister.offers = document.querySelector('#field-5 input').value;
       this.userRegister.displayName = false;

        if(this.userRegister.email &&
           this.userRegister.password &&
           this.userRegister.firstName &&
           this.userRegister.lastName &&
           this.userRegister.offers )
           this.flagError = false;
        else
           this.flagError = true;

     if(!this.flagError)
      {
          this.REGISTERUSER(this.userRegister);
          this.goLogin();
      }

    }
    
  },
};
</script>
<style>

#register {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 200;
  margin-top: 100px;
  padding-bottom: 40px;
  background-color: #181818;
  /* min-width: 440px; */
  /* min-height: 100vh; */
   /* width: 40%;  */
  margin: 0 auto;
  font-size: 12px;
  padding:40px;
}
#register * {
  letter-spacing: .06em;
}

form > * {
  margin: 0 auto;
}

#register img {
  width: 100%;
  height: 60px;
}

/* #register > div > form > *,
#register .text-check {
  width: 350px;
} */

#register .text-check,
.termAccept {
  display: block;
  text-align: left;
  color: #aaa;
  padding-left: 0px;
  padding-right: 0px;
  widows: 100%;
}


#register input[type="checkbox"] {
  display: inline-block;
}
#register input:not([type="checkbox"]){
  margin-bottom:1rem;
}


.textDisplayName {
  color: #abb0b8;
  display: block;
  padding-top: 7px;
  text-align: justify;
}
#register h1 {
  font-size: 1.4rem;
  margin-bottom: 1.3rem;
  text-transform: uppercase;
  color: #edd700;
  text-align: center;
}




/**FIELD-1 */
#register .elementItem input,
#register input.h-element
{
  height: 40px;
}
.elementItem > label{
  display: block;
  /* border:2px solid #edd700; */
  box-sizing: border-box;
  position:relative;
  background: white;
  width: 100%;
  border:none
}

.elementItem>label>input{
  display:block;
  background: transparent;
  outline:none;
  width: 100%;
  padding:5px 5px;
  /* border:none; */
    border:2px solid #edd700;


}
.elementItem>label>span{
  position:absolute;
  color:#abb0b8;
  top:5px;
  left:5px ;
}
.elementItem>label>span,
.elementItem>label>#input{
  padding:0;
}

/*Evento Focus*/
.elementItem>label>input.focus{
  background: #abb0b8;
  color:#edd700;
}
.elementItem>label.focus{
 color:#abb0b8;
 border-color: #edd700;
}

/**Evento BLUR */
.elementItem>label>input.blur{
  background: white;
}
.elementItem>label>.blur{
  border-color: red;
}

.blur,
.oninput,
.errorLogin {
  border:none;
  color:red;
  background-color:#181818;
  display:block;

}

.elementItem .blur{
  margin-bottom: .4rem !important;
}

/**Evento ONINPUT */
.elementItem>span.oninput{
  display:none
}

.elementItem>label>input.oninput{
  color:#edd700;
  background-color:#abb0b8; 
}
</style>