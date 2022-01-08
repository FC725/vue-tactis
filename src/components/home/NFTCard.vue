<template>

<div class="NFTCardsSection" id="nft">
    <div class="NFTTitle">
        <img src="/images/landing/NFT Cards.png" alt='' />
    </div>
    <div class="GeneralCards" data-aos="fade-right" data-aos-duration="1000">
        <Carousel></Carousel>
    </div>
</div>

</template>

<script>

import AOS from "aos";
import Carousel from '../Carousel/Carousel.vue';

AOS.init();
export default {
  name: 'Feature',
  components: {
      Carousel
  },
  
}

</script>

<style>
@import './aos.css';
.NFTCardsSection{
    background-image : url('/images/landing/NFTCardsBg.png') ; 
    background-size : 100% 100%;
    background-repeat : no-repeat;
    margin : 0px ;
    padding : 0px ;
    * { box-sizing: border-box; }
}

.NFTTitle{
    background-image : url('/images/landing/NTFTitleBg.png') ; 
    background-size : 100% 100%;
    background-repeat : no-repeat;
    width: 100%;
    height: 88.72px;
    margin : auto;
    display : flex;
}
.NFTTitle>img {
    height : 50px ;
    margin : auto ;
    margin-top : 26px;
}

@media screen and (min-width : 994px){
    .NFTTitle{
        width: 993.6px;
    }
}

.GeneralCards{
    display : flex ;
    flex-direction : row ;
    margin : 0px 20px 0px 20px;
}

.Unicorn{
    height : 400px;
    width : 300px;
}
</style>