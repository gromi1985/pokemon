<template>
    <ul class="socials text-center ps-0">
   
    <li><a href="#"><img class="redSocial-img" src="../assets/facebook.svg" alt="facebook"></a></li>
    <li><a href="#"><img class="redSocial-img" src="../assets/instagram.svg" alt="facebook"></a></li>
    <li><a href="#"><img class="redSocial-img" src="../assets/youtube.svg" alt="facebook"></a></li>
    <li><a href="#"><img class="redSocial-img" src="../assets/linkedin.svg" alt="facebook"></a></li>
    <li><a href="#"><img class="redSocial-img" src="../assets/twitter.svg" alt="facebook"></a></li>

 </ul>
</template>

<script>
export default {

}
</script>

<style>
.socials{
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0 1rem 0;
    font-size:.9rem;
}

.socials li{
    margin: 0 10px;
}

.socials a{
    text-decoration: none;
    color: #fff;
    padding: 5px;
}

/* .socials a i{
    font-size: 1.1rem;
    width: 20px;
    transition: color .4s ease;
} */

.socials a:hover i{
    color: aqua;
}
.redSocial-img{
   width: 1.5rem;
   height: 1.5rem;
}
</style>