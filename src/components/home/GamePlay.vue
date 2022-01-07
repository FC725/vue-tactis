<template>
    <div class="GamePlaySection" id="gameplay">
        <div class="Guardian">
            <img src="/images/landing/Guardian.png" alt=''/>
        </div>
        <div class="GPCard">
            <div class="GPTitle">
                GAMEPLAY
            </div>
            <div class="GPContent">
                TACTICS ROYALE is a game which forces players to make hard choices on an even playing field. 
                <br/><br/>
                Collect, Upgrade and Draft with a roster of mythical heroes in a round based tactical battle for supremacy. Outwit your opponents and adapt as you go. 
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'GamePlay',
  components: {
  }
}

</script>


<style>

.GamePlaySection{
    background-image : url('/images/landing/GamePlaybg.png') ; 
    background-size : 100% 100%;
    background-repeat : no-repeat;
    margin : 0px ;
    padding : 0px ;
    height : 1312px;
    display : flex;
    flex-direction : column ;
    justify-content: center;
    position : relative ;
}

.GPTitle{
    font-family: 'LHF Uncial Caps';
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    line-height: 51px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    justify-content: center;
    padding-top: 39px;
}

.GPContent{
    font-family: 'Lancelot';
    font-style: normal;
    font-weight: normal;
    font-size: 19px;
    line-height: 44px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    margin-top : 40px;
    padding-left : 10px ;
    padding-right : 10px ;
    width : 100%;
}

@media screen and (min-width : 600px) {
    .GPContent{
        font-size: 30px;
    }
}

@media screen and (min-width : 900px) {
    .GPContent{
        font-size: 35px;
        width : 830px;
        padding-left : 85px ;
        padding-right : 55px ;
        margin-top : 85px;
    }
}

.GPCard{
    display : flex;
    flex-direction : column ;
    background-image : url('/images/landing/Card.png') ; 
    background-size : 100% 100% ;
    background-repeat : no-repeat;
    height : 560px ;
    margin-left : auto ;
    margin-right : auto ;
    width : 100%;
    z-index : 2 ;
    position: absolute;
    top: 350px ;
    align-items : center;
}

@media screen and (min-width : 900px) {
    .GPCard{
        width : 932px;
        left : calc((100% - 932px) / 2);
    }
}

.Guardian{
    position: absolute;
    top: 102px ;
    left : calc((100% - 932px) / 2);
    margin-left: 140px;
    z-index : 1 ;
}

</style>