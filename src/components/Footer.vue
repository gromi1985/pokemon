<template>
    <footer class="container-fluid mainContainerF">
        <div class="footer-content">
            <div class="social-link flex-column justify-content-center">
                <h3 class="text-center" >Follow Star Wars</h3>
                  <RedesSociales/>
            </div>
        <section id="help">
        <div class="d-flex flex-column ">
          <p id="copyright">TM &amp; © Lucasfilm Ltd. All Rights Reserved</p>
          <ul id="terms-legal" class="d-flex footerCustom flex-wrap justify-content-center">
              <li><a target="_blank" href="#">Terms of Use |</a></li>
              <li><a target="_blank" href="#">| Additional Content Information |</a></li>
              <li><a target="_blank" href="#">| Privacy Policy |</a></li>
              <li><a target="_blank" href="#">| Children’s Online Privacy Policy |</a></li>
              <li><a target="_blank" href="#">| Your California Privacy Rights |</a></li>
              <li><a target="_blank" href="#">| Star Wars at shopDisney |</a></li>
              <li><a target="_blank" href="#">| Star Wars Helpdesk |</a></li>
              <li><a target="_blank" href="#">| Interest-Based Ads |</a></li>
              <li><a target="_blank" href="#">| Do Not Sell My Personal Information</a></li>
          </ul>
        </div>
        </section>
       </div>

    </footer>
</template>
<script>
import RedesSociales from "@/components/RedesSociales.vue";
export default{
    components:{
        RedesSociales
    }
}
</script>

<style scoped>
footer{
    /* position: absolute; 
    font-family:sans-serif;
    bottom: 0;
    left: 0;
    right: 0; */
    background: #111;
    /* height: vh; */
    /* width: 100vw; */
    padding-top: 35px;
    color: #fff;
    margin-right: 0;
    margin-left: 0;
 }

 .footer-content{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}

 footer ul {
    list-style:none
}

.footer-content h3{
    font-size: 1.3rem;
    font-weight: 500;
    text-transform: capitalize;
    line-height: 3rem;
}
footer * {
    color:white;
    padding: 0;
}
.social-link{
  padding:0;
}
#copyright{
    margin-bottom:0;
    font-size:.5rem;
    /* padding:.5rem; */
}

/*
footer a, footer p {
   
    color: #CCCCCC;
    font-size: 0.5rem;
    line-height: normal;
}

footer #utility .social-links .sw-kids-container {
    margin: 0 20px;
}

footer #utility .social-links {
    text-align: center;
    margin-top: 16px;
} */

#terms-legal.footerCustom li a{
text-decoration: none;
font-size:.5rem;
padding-left: 10px;
padding-right: 10px;
color:white;

}
</style>