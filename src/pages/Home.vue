<template>
  <div>
  
    <Header></Header>
    <Landing ></Landing>
    <GamePlay></GamePlay>
    <NFTCard></NFTCard>
    <Feature></Feature>
    <RoadMap></RoadMap>
    <BuiltOn></BuiltOn>
    <Footer></Footer>
    <Carousel></Carousel>
  </div>
</template>

<script>

import Landing from '../components/home/Landing.vue';
import GamePlay from '../components/home/GamePlay.vue';
import Feature from '../components/home/Feature.vue';
import RoadMap from '../components/home/RoadMap.vue';
import BuiltOn from '../components/home/BuiltOn.vue';
import NFTCard from '../components/home/NFTCard.vue';
import Header from '../components/layout/Header.vue';
import Footer from '../components/layout/Footer.vue';

export default {
  name: 'Home',
  components: {
    Landing,
    GamePlay,
    NFTCard,
    Feature,
    RoadMap,
    BuiltOn,
    Header,
    Footer
  },
  mounted(){
    if(this.$route.params.id !== null){
          document
          .getElementById(this.$route.params.id)
          .scrollIntoView({ behavior: 'smooth' });
      }
    }
}


</script>