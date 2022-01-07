<template>
    <div class="FooterSection">
        <div class="FooterPlayer">
            <img src="/images/landing/FooterPlayer.png" alt="" />
        </div>
        <div class="FooterContentBox">
            <div style="z-index : 1;">
                <img src="/images/landing/Line 2.png"  alt="" />
            </div>
            <div class="FooterContent">
                <div class="FooterLogo">
                    <img src="/images/landing/FooterLogo.png" alt="" />
                </div>
                <div class="FooterDetail">
                    <div style="display : flex; flex-direction : row;">
                        <div style="display : flex; flex-direction : column; color : white; width : 103px;">
                            <div>Home</div>
                            <div>Game</div>
                            <div>NFT Card</div>
                            <div>Feature</div>
                            <div>Roadmap</div>
                            <br/>
                            <div>Socials</div>
                        </div>
                        <div style="display : flex; flex-direction : column; color : white; margin-left : 84px; width : 154px">
                            <div>Tokenomics</div>
                            <div>Whitepaper</div>
                            <div>Pitchdeck</div>
                            <br/>
                            <br/>
                            <br/>
                            <div style="display : flex; flex-direction : row">
                                <div><Icon/></div>
                                <div><img src="" alt=""/></div>
                                <div><img src="" alt=""/></div>
                                <div><img src="" alt=""/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="margin-top : 24px;z-index : 1">
                <img src="/images/landing/Line 3.png"  alt="" />
            </div>
            <div class="CopyBox">
                Copyright©2021 Heroes & Empires. All rights reserved
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
};
</script>

<style>

.FooterSection{
    position : relative ;
    display : flex ;
    flex-direction : column ;
    width : 100% ;
    height : 615px ;
    margin : auto;
    
}

@media screen and (min-width : 1300px){
    .FooterSection{
        width : 1300px ;
        margin : auto;
    }
}

.FooterContent{
    display : flex ;
    flex-direction : column ;
    align-items : center ;
    justify-content : flex-end ;
    width : 100% ;
}
@media screen and (min-width : 1300px){
    .FooterContent{
        flex-direction : row ;
    }
}
.FooterPlayer{
    z-index : 2;
}


@media screen and (max-width : 520px){
    .FooterPlayer>img{
        transform : scale(0.7);
        width : 100%;
    }
}
@media screen and (min-width : 1300px){
    .FooterPlayer{
        position : absolute ;
        top : -30px;
        left : calc((100% - 1300px) / 2);
    }
}


.FooterLogo{
    padding-top : 40px;
}

.FooterDetail{
    padding-top : 74px;
    margin-left : 140px;
}

.CopyBox{
    font-family: 'Lancelot';
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 27px;
    text-align: center;
    color : white ;
    margin-top : 35px;
}

.FooterContentBox{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

@media screen and (min-width : 1300px){
    .FooterContentBox{
        position : absolute ;
        left : calc((100% - 1300px) / 2);
        top : 230px;
    }
}
</style>