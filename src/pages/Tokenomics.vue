<template>
<Header/>
<div class="TokenomicsSection">
    <div class="ContentSection">
        <div class="AnalysisBox">
            <div class="TotalBox">
                <img src="/images/tokenomics/total.png" />
            </div>
            <div class="AllocationBox" data-aos="flip-down" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                <div class="SummaryBox">
                    <img src="/images/tokenomics/tbl.png" />
                </div>
                <div class="TokenBox">
                    <img src="/images/tokenomics/Chart.png" />
                </div>
            </div>
        </div>
        <Footer />
    </div>
</div>
</template>

<script>
import Header from '../components/layout/Header.vue';
import Footer from '../components/layout/Footer.vue';

export default {
  name: 'Tokenomics',
  components: {
      Header,
      Footer,
  }
}
</script>

<style>
.TokenomicsSection{
    width : 100%;
    background-image : url('/images/tokenomics/tokenomics.png');
    background-size : 100% auto;
    background-repeat : no-repeat ;
}

.BackImages{
    width : 100% ;
    height : auto ;
    position : absolute ;
}

.BackImages>img {
    width : 100%;
}

.ContentSection{
    width : 100% ;
    height : auto ;
    display : flex ;
    flex-direction : column ;
    align-items : center ;
    padding-top : 100px;
}

@media screen and (min-width : 600px){
    .ContentSection{
        padding-top : 250px;
    }
}
@media screen and (min-width : 980px){
    .ContentSection{
        padding-top : 500px;
    }
}

.AnalysisBox{
}

.TotalBox{
    align-items : center;
    width : calc((100% - 50px));
    margin-left : 25px;
    margin-right : 25px;
    max-width : 980px;
}
.TotalBox>img {
    width : 100%;
    margin : auto ;
}
@media screen and (min-width : 980px){
    .TotalBox{
        width : 100%;
        margin-left : 0px;
        margin-right : 0px ;
    }
}
.AllocationBox{
    display : flex;
    flex-direction : column ;
    width : 100%;
    max-width : 980px;
    margin-top : 35px ; 
    align-items: center;
    
}

@media screen and (min-width : 980px){
    .AllocationBox{
        flex-direction : row ;
    }
}

.SummaryBox{
    width : calc((100% - 50px));
    margin-left : 25px;
    margin-right : 25px;

    max-width : 609px;
     
    
}

.SummaryBox>img {
    width : 100%;
}

@media screen and (min-width : 980px){
    .SummaryBox{
        width : calc((100% - 50px) / 2);
        margin-left : 0px;
        margin-right : 0px ;
    }
}


.TokenBox{
    width : calc((100% - 50px));
    max-width : 609px;
    margin-top : 35px;
    margin-left : 25px;
    margin-right : 25px;
    
}
.TokenBox>img {
    width : 100%;
} 
@media screen and (min-width : 980px){
    .TokenBox{
    margin-top : 0px;
    margin-left : 50px;
    margin-right : 0px ;
    width : calc((100% - 50px) / 2);
    }
}
</style>