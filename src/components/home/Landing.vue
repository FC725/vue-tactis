<template>
  <div class="CSoon" id="home">
    <div class="ContentBox">
      <div style="flex : 5">
        <div>
          <img src="/images/landing/Llogo.png" alt="" />
        </div>
        <div pt="12px" pl="30px">
          <img src="/images/landing/Coming Soon.png" alt="" />
        </div>
      </div>
      <div class="PlayerBox">
        <img src="/images/landing/Lplayer.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing",
  components: {},
};
</script>

<style>
.ContentBox {
  display: flex;
  flex-direction: column-reverse;
  margin: auto;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
}

.ContentBox > div > div:first-of-type > img {
  width: 100%;
}

@media screen and (min-width: 1300px) {
  .ContentBox {
    flex-direction: row;
    width: 980px;
    margin: auto;
  }
}
.PlayerBox {
  flex: 5;
  animation: linear 0.7s 1 ZoomImg;
  transform: scale(1);
  margin-top: 50px;
  width: 100%;
}

.PlayerBox > img {
  width: 100%;
}

@media screen and (min-width: 1300px) {
  .PlayerBox {
    justify-content: flex-end;
    transform: scale(1);
    margin-top: 0px;
  }
}
@keyframes ZoomImg {
  0% {
    transform: scale(0.1);
  }
  100% {
    transform: scale(1);
  }
}

.CSoon {
  background-image: url("/images/landing/Landing Tab.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
}

@media screen and (min-width: 1300px) {
  .CSoon {
    height: 1080px;
  }
}
</style>
