<template>

<div class="container">
    <div class="Header">
        <div class="logo">
            <img src="/images/landing/logo.png" alt='' />
        </div>
        <div class="NavBar">
            <ul class="NavList">
                <li style="width : 72px"><a href='/home'>Home</a></li>
                <li style="width : 102px"><a href='/gameplay'>GamePlay</a></li>
                <li style="width : 108px"><a href='/nft'>NFT Cards</a></li>
                <li style="width : 114px"><a href="/tokenomics/tokenomics">Tokenomics</a></li>
                <li style="width : 119px"><a href="/">Ambassador</a></li>
            </ul>
            
        </div>
    </div>
    <div class="MobileHeader">
        <div class="MobileLogo">
            <img src="/images/landing/logo.png" alt='' />
        </div>
        <div class="HamburgerBtn" >
            <div class="CloseBox"></div>
            <div class="HamburgerLine1"></div>
            <div class="HamburgerLine2"></div>
            <div class="HamburgerLine3"></div>
        </div>
        
        <div class="HamburgerBox">
            
            <div class="NavBarList">
                <div style="height:39px"><a href='/home'>Home</a></div>
                <div style="height:39px"><a href='/gameplay'>GamePlay</a></div>
                <div style="height:39px"><a href='/nft'>NFT Cards</a></div>
                <div style="height:39px"><a href='/tokenomics/tokenomics'>Tokenomics</a></div>
                <div style="height:39px"><a href='/'>Ambassador</a></div>
                <div class="NavTitleBox"><img src="/images/landing/NavbarPlayer.png" /></div>
                <div class="OtherBox">
                    <div class="Tokenomics">
                    </div>
                    <div class="SocialBox">
                        <div class="Socials"></div>
                        <div class="OtherSocials"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

</template>

<script>

export default {
  name: 'Header',
  components: {
  }
}
</script>

<style>

.Header {
    display : flex;
    flex-direction : row;
    width : 90%;
    margin : auto;
    padding-top : 14px ;
    justify-content: space-between ;
    position : fixed ;
    top : 0px;
    left : 50px;
    align-items: center;
    z-index : 9999;
    visibility : hidden;
    
}

@media screen and (min-width : 980px) {
    .Header {
        width : 980px;
        left : calc((100% - 980px) / 2);
        visibility : visible;
    }
}

.Logo{
    display : flex ;
}

.NavList {
    background-image : url('/images/landing/Loading_Bar 2.png');
    background-size : cover ;
    background-repeat : no-repeat;
    padding-top : 20px;
    cursor : pointer ;
    display : none ;
}

@media screen and (min-width : 980px) {
    .NavList {
        display : block ;
    }
}

.NavList>li {
    list-style : none ;
    display : inline-block;
    height: 39px;
    position: relative;
    box-sizing: border-box;
    overflow: visible;
    visibility: inherit;
}

.NavList>li>a {
    font-size : 16px;
    font-family : 'Lancelot' ;
    color : white;
    text-decoration: none;
}
.NavList>li>a:hover {
    color : rgb(243,167,143);
    transition: color .4s ease 0s;
}

.HamburgerBtn {
    height: 26px;
    width: 26px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    transition: transform .2s ease;
    z-index: 5;
    position: fixed;
    top: 20px;
    right: 12px;
    visibility : show ;
    
}

@media screen and (min-width : 980px){
    .HamburgerBtn {
        visibility : hidden ;
    }
}

.HamburgerLine1 {
    transform: rotate(-45deg) translate(-7px,-3px);
    width: 17px;
    transition: transform .2s ease,border-color .2s ease;
    height : 2px;
    border : 1px red solid ;

}

.HamburgerLine2 {
    width: 30px;
    transition: opacity .2s ease,transform .2s ease;
    transform: rotate(-45deg);
    height: 2px;
    border : 1px red solid ;
    border-radius: 10px;

}

.HamburgerLine3 {
    height : 2px;
    border : 1px red solid ;
    transform: rotate(-45deg) translate(6px,2px);
    width: 17px;
    transition: transform .2s ease,border-color .2s ease;
}

.HamburgerBox {
    position : fixed ;
    top : 0px ;
    right : 0px ;
    width : 238px ;
    height : 100% ;
    background-image : url('/images/landing/mbNavbar.png');
    display : none ;
    transition : ;
    
}

@media screen and (min-width : 980px){
    .HamburgerBox {
        display : none ;
    }
}

.BackHamBox{
    z-index : 5 ;
    position : fixed ;
    top : 0px;
    left: 0px;
    width : 100% ;
    height : 100% ;
}

.NavBarList{
    z-index : 4;
    margin-top : 20px;
    display : flex;
    flex-direction : column ;
    align-items : center ;
    color : white ;
    

}

.NavBarList>div>a {
    text-decoration : none ;
    color : white ;
    font-size : 22px;
}

.NavTitleBox{
    display: flex;
    justify-content: center;
    margin-top : 20px ;
    
}

.NavTitleBox>img {
    width : 60%;
}
.OtherBox{
}
.Tokenomics{
}
.SocialBox{
}
.Socials{
}
.OtherSocials{
}

.CloseBox {
    position: fixed;
    top: 22px;
    right: 13px;
    background-color: white;
    width: 22px;
    height: 22px;
    border-radius: 7px;
    transition-delay : 1s;
    transform: rotate(-45deg);
    opacity : 0;
    transition:opacity, transform .2s ease,border-color .2s ease;
    
}

.MobileHeader{
    position : fixed ;
    top : 0px; 
    left : 0px ;
    background-color : black ;
    display : block ;
    height : 60px;
    width : 100%;
    z-index : 9999;
    
}


@media screen and (min-width : 980px){
    .MobileHeader{
        display : none ;
    }
}
.MobileLogo {
    position : absolute ;
    top : 5px ;
    left : 20px;  
}

.MobileLogo>img {
    height : 50px;
} 

</style>