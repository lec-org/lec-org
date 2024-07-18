<script setup lang="ts">
import { ref } from 'vue'
import { useCarouselAnimation } from './carousel-animation';

const props = withDefaults(defineProps<{
  imgList: string[];
  rotate: number;
  duration: number;
	transformOrigin?: string;
  repeat?: number;
}>(), {
  imgList: () => [],
  rotate: 0,
  duration: 0,
  transformOrigin: 'center',
  // 无缝轮播至少需要repeat一次
  // 当图片少时可以设置更大的repeat
  repeat: (props) => {
    if (!props.repeat || typeof props.repeat !== 'number' || props.repeat < 1) {
      return 1;
    }
    return props.repeat;
  }
});

const container = ref<HTMLElement | null>(null);

props.imgList.length && useCarouselAnimation(container, props.duration, props.rotate, 'left', 'linear');
</script>

<template>
  <div
		class="img-carousel-container"
		ref="container"
		:style="{ transformOrigin }"
	>
    <img
      v-for="img in imgList"
      :src="img"
    />
    <div class="img-repeat">
      <template v-for="_i in repeat">
        <img
          v-for="img in imgList"
          :src="img"
        />
      </template>
    </div>
  </div>
</template>

<style scoped>
.img-carousel-container, .img-repeat {
  height: 100%;
  display: inline-flex;
  position: relative;
  overflow: visible;
}

img {
  height: 100%;
  width: auto;
}

.img-repeat {
  position: absolute;
  top: 0;
  left: 100%;
}
</style>