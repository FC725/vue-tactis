<template>
    <div class="FeatureSection">
        <div class="FeatureTitle">
            <img src="/images/landing/Feature.png" alt='' />
        </div>
        <div class="FeatureContent">
            <div class="Section">
                <div class="DescribeBox">
                    <div class="OwerBox"  data-aos="fade-right" data-aos-duration="1000"></div>
                    <div class="DuelBox"  data-aos="fade-right" data-aos-duration="1000"></div>
                </div>
                <div class="ContentImgBox" data-aos="fade-left" data-aos-duration="1000">
                    <img src="/images/landing/Priest.png" alt =""/>
                </div>
            </div>
            <div class="Section">
                <div class="ContentImgBox"  data-aos="fade-right" data-aos-duration="1000">
                    <img src="/images/landing/Naga.png" alt =""/>
                </div>
                <div class="DescribeBox">
                    <div class="MarketBox"  data-aos="fade-left" data-aos-duration="1000"></div>
                    <div class="ChestBox"  data-aos="fade-left" data-aos-duration="1000"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AOS from "aos";

AOS.init();
export default {
  name: 'Feature',
  components: {
  },
  setup(){
  }
}

</script>

<style>
@import './aos.css';

.FeatureSection{
    background-color : #1A1A1A;
    padding-top : 50px; 
    padding-bottom : 50px; 
}

.FeatureTitle{
    background-image : url('/images/landing/NTFTitleBg.png') ; 
    background-size : 100% 100%;
    background-repeat : no-repeat;
    width: 100%;
    height: 88.72px;
    margin : auto;
    display : flex;
}
.FeatureTitle>img {
    height : 50px ;
    margin : auto ;
    margin-bottom: 14px !important;
}

@media screen and (min-width : 994px){
    .FeatureTitle{
        width: 993.6px;
    }
}

.FeatureContent{
    display : flex ;
    flex-direction : column;
    width : 100%;
    margin : auto;
    
    
}
.FeatureContent>div:first-of-type {
    flex-direction : column-reverse;
    
}
@media screen and (min-width : 980px){
    .FeatureContent>div:first-of-type{
        flex-direction : row ;
    }
}
@media screen and (min-width : 980px){
    .FeatureContent{
        width : 980px;
    }
}
.DescribeBox{
    display : flex ;
    flex-direction : column ;
}

.OwerBox{
    display : flex ;
    background-image : url('/images/landing/ower.png') ;  ;
    background-size : 100% 100%;
    font-family : 'LHF Uncial Caps';
    font-weight : 400;
    font-style : normal;
    font-size : 30px;
    line-height : 30.36px;
    align-items: center;
    margin-top : 50px;
    color : white ;
    width : 472px; 
    height : 340px;
}

.DuelBox{
    display : flex ;
    background-image : url('/images/landing/Duel.png') ;  ;
    background-size : 100% 100%;
    font-family : 'LHF Uncial Caps';
    font-weight : 400;
    font-style : normal;
    font-size : 30px;
    line-height : 30.36px;
    align-items: center;
    margin-top : 10px;
    color : white ;
    width : 472px; 
    height : 340px;
}


.MarketBox{
    display : flex ;
    background-image : url('/images/landing/Market.png') ;  ;
    background-size : 100% 100%;
    font-family : 'LHF Uncial Caps';
    font-weight : 400;
    font-style : normal;
    font-size : 30px;
    line-height : 30.36px;
    align-items: center;
    margin-top : 50px;
    color : white ;
    width : 472px; 
    height : 340px;

}

.ChestBox{
    display : flex ;
    background-image : url('/images/landing/Chest.png') ;
    background-size : 100% 100%;
    font-family : 'LHF Uncial Caps';
    font-weight : 400;
    font-style : normal;
    font-size : 30px;
    line-height : 30.36px;
    align-items: center;
    margin-top : 10px;
    color : white ;
    width : 100%; 
    height : 340px;
}

.ContentImgBox{
    margin-top : 69.28px;
    
}
.ContentImgBox>img {
    transform : scale(0.7);
}

@media screen and (min-width : 450px){
    .ContentImgBox{
        transform : scale(1);
        width : 471px;
        height : 683px;
    }
}

.Section{
    display : flex ;
    flex-direction : column;
    align-items: center;
    
}

@media screen and (min-width : 980px){
    .Section{
        flex-direction : row;
    }
}
</style>