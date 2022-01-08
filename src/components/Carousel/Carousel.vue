<template>
  <div class="flex flex-col h-screen w-full">
    <div class="flex flex-row justify-between items-center my-8 h-screen">
      <div
        v-for="(story, index) in stories"
        :key="index"
        class="
          absolute
          rounded-lg
          transition-transform
          duration-200
          ease-in
        "
        style=""
        :style="
          index == indexSelected
            ? `transform: translate(${280 * (index + difference)}px) scale(1)`
            : `transform: translate(${
                280 * (index + difference)
              }px) scale(0.7);cursor:pointer;`
        "
        @click="index != indexSelected ? selectSlide(index) : ''"
      >
        <div class="bg-cover bg-no-repeat h-full rounded-lg">
          <div class="h-full">
            <img
              :src="
                index == indexSelected
                  ? story.images[key].url
                  : story.images[0].url
              "
              class="h-full w-full rounded-lg"
            />
          </div>
          <div>
            <div
              class="absolute inset-0 rounded-lg z-10"
              style="
                background: -webkit-gradient(
                  linear,
                  left top,
                  left bottom,
                  from(rgba(38, 38, 38, 0.6)),
                  to(rgba(38, 38, 38, 0))
                );
                background-color : transparent;
              "
            ></div>
          </div>
        </div>
        <div v-if="index == indexSelected" class="absolute top-1/2 -left-11">
          <i
            @click="prev(index)"
            class="
              fas
              fa-chevron-circle-left
              text-gray-500
              cursor-pointer
              hover:text-gray-300
              transition-colors
              duration-150
              ease-linear
            "
          ></i>
        </div>
        <div v-if="index == indexSelected" class="absolute top-1/2 -right-11">
          <i
            @click="next(index)"
            class="
              fas
              fa-chevron-circle-right
              text-gray-500
              cursor-pointer
              hover:text-gray-300
              transition-colors
              duration-150
              ease-linear
            "
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { data } from './stories'
export default {
  name: 'Carousel',
  setup() {
    // declaration side
    const indexSelected = ref(2)
    const difference = ref(0)
    const stories = ref([])
    const key = ref(0)
    // percent story
    const percent = ref(0)
    const timer = ref(0)
    const progress = ref(0)
    const duration = ref(5000)
    const interval = ref(0)
    const isPaused = ref(false)
    const newDur = ref(0) // duration
    const pausePer = ref(0) // pausePercent
    // ----end declaration
    const selectSlide = (index) => {
      difference.value += indexSelected.value - index
      indexSelected.value = index
      key.value = 0
      reset()
    }
    const fetchStories = () => {
      stories.value = data
      play()
    }

    // next story
    const next = (index) => {
      if (
        indexSelected.value >= stories.value.length - 1 &&
        key.value >= stories.value[indexSelected.value].images.length - 1
      ) {
        // Without delay
        setTimeout(() => {
          difference.value = 0
          indexSelected.value = 0
          key.value = 0
        })
      } else if (
        key.value >=
        stories.value[indexSelected.value].images.length - 1
      ) {
        // Without delay
        setTimeout(() => {
          difference.value += index - (index + 1)
          indexSelected.value++
          key.value = 0
        })
      } else {
        key.value++
      }
      reset()
    }
    // previous story
    const prev = (index) => {
      if (indexSelected.value <= 0 && key.value <= 0) {
        key.value = 0
      } else if (key.value <= 0) {
        // Without delay
        setTimeout(() => {
          difference.value += index - (index - 1)
          indexSelected.value--
          key.value = 0
        })
      } else {
        key.value--
      }
      reset()
    }
    const autoPlay = () => {
      // if (
      //   indexSelected.value >= stories.value.length - 1 &&
      //   key.value >= stories.value[indexSelected.value].images.length - 1
      // ) {
      //   difference.value = 0
      //   indexSelected.value = 0
      //   key.value = 0
      // } else if (
      //   key.value >=
      //   stories.value[indexSelected.value].images.length - 1
      // ) {
      //   difference.value += indexSelected.value - (indexSelected.value + 1)
      //   indexSelected.value++
      //   key.value = 0
      // } else {
      //   key.value++
      // }
      // reset()
    }
    const play = () => {
      timer.value = new Date().getTime()
      progress.value = setInterval(() => {
        // forward
        let time = new Date().getTime()
        if (newDur.value > 0) {
          percent.value =
            pausePer.value +
            Math.floor((100 * (time - timer.value)) / duration.value)
        } else {
          percent.value = Math.floor(
            (100 * (time - timer.value)) / duration.value
          )
        }
      }, duration.value / 100)
      if (newDur.value > 0) {
        interval.value = setInterval(autoPlay, newDur.value)
      } else {
        interval.value = setInterval(autoPlay, duration.value)
      }
    }
    // reset play
    const reset = () => {
      percent.value = 0
      clearInterval(interval.value)
      clearInterval(progress.value)
      play()
    }
    const pauseStory = () => {
      isPaused.value = true
      pausePer.value = percent.value
      clearInterval(progress.value)
      clearInterval(interval.value)
      // calcul new duration
      newDur.value = duration.value - (pausePer.value * duration.value) / 100
    }
    const playStory = () => {
      isPaused.value = false
      play()
    }
    // OnMounted hook
    onMounted(() => {
      fetchStories()
    })
    return {
      difference,
      indexSelected,
      selectSlide,
      fetchStories,
      stories,
      next,
      prev,
      key,
      percent,
      play,
      timer,
      progress,
      duration,
      reset,
      interval,
      autoPlay,
      isPaused,
      pauseStory,
      playStory,
      newDur,
      pausePer,
    }
  },
}
</script>

<style>
/* import fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
.fas {
  font-size: 30px;
}
</style>
