<template>

<div class="container">
    <div class="Header">
        <div class="logo">
            <img src="/images/landing/logo.png" alt='' />
        </div>
        <div class="NavBar">
            <ul class="NavList">
                <li style="width : 72px"><a v-on:click="goTo('home', 'home')">Home</a></li>
                <li style="width : 102px"><a v-on:click="goTo('home', 'gameplay')">GamePlay</a></li>
                <li style="width : 108px"><a v-on:click="goTo('home', 'nft')">NFT Cards</a></li>
                <li style="width : 114px"><a v-on:click="goTo('Tokenomics', '')">Tokenomics</a></li>
                <li style="width : 119px"><a href="/">Ambassador</a></li>
            </ul>
            
        </div>
    </div>
    <div class="MobileHeader">
        <div class="MobileLogo">
            <img src="/images/landing/logo.png" alt='' />
        </div>
        <div class="HamburgerBtn"  v-on:click="showHamburger()">
            <div class="CloseBox" ref="_closeBtn"></div>
            <div class="HamburgerLine1" ref="hamburgerLine1"></div>
            <div class="HamburgerLine2" ref="hamburgerLine2"></div>
            <div class="HamburgerLine3" ref="hamburgerLine3"></div>
        </div>
        
        <div class="HamburgerBox" ref="_NavBarRef">
            
            <div class="NavBarList">
                <div style="height:39px"><a v-on:click="goTo('home', 'home')">Home</a></div>
                <div style="height:39px"><a v-on:click="goTo('home', 'gameplay')">GamePlay</a></div>
                <div style="height:39px"><a v-on:click="goTo('home', 'nft')">NFT Cards</a></div>
                <div style="height:39px"><a v-on:click="goTo('Tokenomics', '')">Tokenomics</a></div>
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

var _showNavBar    = false;
export default {
    name: 'Header',
    components: {
    },
    methods: {
        goTo : function(parent, child){
            if(window.location.pathname.indexOf('home') != -1 && parent == 'home') {
                document
                    .getElementById(child)
                    .scrollIntoView({ behavior: 'smooth' });
            }else {
                if(parent == 'Tokenomics')
                {
                    window.location.href = "/" + parent
                } else {
                    window.location.href = "/" + parent + "/" + child ;
                }
            }
        },
        showHamburger : function(){
            // console.log(hamburgerLine1);
            if(_showNavBar === false)
            {
                this.$refs["hamburgerLine1"].style.transform = "translateY(7px) rotate(135deg)";
                this.$refs["hamburgerLine2"].style.display = "none";
                this.$refs["hamburgerLine3"].style.transform = "translateY(-7px) rotate(45deg)";
                this.$refs["_closeBtn"].style.transform = "rotate(0deg)";
                this.$refs["_closeBtn"].style.opacity = "1";
                // this.$refs["_NavBarRef"].style.animation = animations.fadeIn;
                this.$refs["_NavBarRef"].style.display = 'block';

            } else {
                this.$refs["hamburgerLine1"].style.transform = "rotate(-45deg) translate(-7px,-3px)";
                this.$refs["hamburgerLine2"].style.display = "block";
                this.$refs["hamburgerLine3"].style.transform = "rotate(-45deg) translate(6px,2px)";
                this.$refs["_closeBtn"].style.transform = "rotate(-45deg)";
                this.$refs["_closeBtn"].style.opacity = "0";
                this.$refs["_NavBarRef"].style.display = 'none';
                
            }
                _showNavBar = !_showNavBar;
        }
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
    background-size : 100% 100% ;
    background-repeat : no-repeat;
    padding-top : 20px;
    cursor : pointer ;
    display : none ;
    padding-left: 40px;
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