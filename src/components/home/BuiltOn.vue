<template>
    <div class="BuiltOnSection">
        <div class="BuiltOnTitle">
            <img src="/images/landing/Built OnCards.png" alt='' />
        </div>
        <div class="BuiltOnIndexs">
            <div>
                <img src="/images/landing/Unity.png" alt='' />
            </div>
            <div>
                <img src="/images/landing/Solana.png" alt='' />
            </div>
            <div>
                <img src="/images/landing/BSC-Logo.png" alt='' />
            </div>
            <div>
                <img src="/images/landing/Polygon.png" alt='' />
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "BuiltOn",
  components: {},
};
</script>

<style>
.BuiltOnSection{
    margin : 0px ;
    padding : 0px ;
    height : 500px;
}

.BuiltOnTitle{
    background-image : url('/images/landing/BuiltOnTitleBg.png') ; 
    background-size : 100% 100%;
    background-repeat : no-repeat;
    width: 100%;
    height: 88.72px;
    margin : auto;
    display : flex;
}
.BuiltOnTitle>img {
    height : 50px ;
    margin : auto ;
    margin-top : 26px;
}
@media screen and (min-width : 994px){
    .BuiltOnTitle{
        width: 993.6px;
    }
}
.BuiltOnIndexs{
    display : flex;
    flex-direction : column ;
    align-items : center ;
    width : 100%;
    margin : auto ;
    margin-top : 105px ;
    justify-content: space-between;
    
}

@media screen and (min-width : 1200px){
    .BuiltOnIndexs{
        flex-direction : row ;
        width : 1200px;
    }
}

</style>