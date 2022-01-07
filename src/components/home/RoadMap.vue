<template>
    <div class="RoadMapSection">
        <div class="RoadMapTitle">
            <img src="/images/landing/RoadmapCards.png" alt='' />
        </div>
        <div class="RoadMapContent">
            <div style="flex : 1.6"/>
            <div class="RoadTurn" style="width:200px">
                <div class="RoadTitle">
                    <div>
                        <img src="/images/landing/Q4, 2021.png" alt=""/>
                    </div>
                    <div>
                        <img src="/images/landing/cup.png" alt=""/>
                    </div>
                </div>
                <div class="RoadTask">
                    <p style="color : '#FEBF00' ">-Seed Funding</p>
                    <p>-Pvt Sale Round</p>
                    <p>-Strategic Round</p>
                    <p>-Public Sale</p>
                    <p>-IDO’s -Listing</p>
                </div>
            </div>
            <div class="RoadTurn" style="width:238px">
                <div class="RoadTitle">
                    <div>
                        <img src="/images/landing/Q4, 2021.png" alt=""/>
                    </div>
                    <div>
                        <img src="/images/landing/boss.png" alt=""/>
                    </div>
                </div>
                <div class="RoadTask">
                    <p>-Nft Sale</p>
                    <p>-Nft Marketplace Launch</p>
                    <p>-Taro token Staking</p>
                    <p>-Nft Staking</p>
                    <p>-Nft evolution system</p>
                </div>
            </div>
            <div class="RoadTurn" style="width:215px">
                <div class="RoadTitle">
                    <div>
                        <img src="/images/landing/Q4, 2021.png" alt=""/>
                    </div>
                    <div>
                        <img src="/images/landing/boss.png" alt=""/>
                    </div>
                </div>
                <div class="RoadTask">
                    <p>-Alpha Testing</p>
                    <p>-Free2Play & Play2earn Mechanism Testing</p>
                </div>
            </div>
            <div class="RoadTurn" style="width:250px">
                <div class="RoadTitle">
                    <div>
                        <img src="/images/landing/Q4, 2021.png" alt=""/>
                    </div>
                    <div>
                        <img src="/images/landing/boss.png" alt=""/>
                    </div>
                </div>
                <div class="RoadTask">
                    <p>-Contracts Audit</p>
                    <p>-PvE and PvP</p>
                    <p>-Governance System</p>
                </div>
            </div>
            <div style="flex : 1.6"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'RoadMap',
  components: {
  },
  setup(){
  }
}
</script>

<style>

.RoadMapSection{
    background-image : url('/images/landing/RoadMapBg.png') ; 
    background-size : 100% 100%;
    background-repeat : no-repeat;
    margin : 0px ;
    padding : 0px ;
    padding-top : 50px;
}

.RoadMapTitle{
    background-image : url('/images/landing/RoadMapTitleBg.png') ; 
    background-size : 100% 100%;
    background-repeat : no-repeat;
    width: 100%;
    height: 88.72px;
    margin : auto;
    display : flex;
    
}

.RoadMapTitle>img {
    height : 50px ;
    margin : auto ;
    margin-top : 26px;
}

@media screen and (min-width : 994px){
    .RoadMapTitle{
        width: 993.6px;
    }
}

.RoadMapContent{
    background-image : url('/images/landing/wave_mb.png') ; 
    background-size : 100% 100%;
    background-repeat : no-repeat;
    margin-top : 100px;
    height : auto;
    display : flex ;
    flex-direction : column ;
}

@media screen and (max-width : 994px){
    .RoadMapContent{
        align-items: center;
        background-image : url('/images/landing/wave_mb.png') ; 
        background-size : 100% 100%;
        background-repeat : no-repeat;
        
    }
}
@media screen and (min-width : 994px){
    .RoadMapContent{
        flex-direction : row ;
        height : 763px;
        background-image : url('/images/landing/wave.png') ;
        background-size : 100% 100%;
        background-repeat : no-repeat;
        margin-top : 401px;
    }
}
.RoadTurn{
    display : flex ;
    flex-direction : column ;
    flex : 2;
    margin-top: 20px;
}

.RoadTitle{
    display : flex ;
    flex-direction : column ;
    align-items : center ;
}

.RoadTask{
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 27px;
    text-align: center;
    color : white;
    font-family: 'Lancelot';
}

</style>
