import {onMounted, onUnmounted, Ref} from 'vue';

export function useCarouselAnimation(
  elRef: Ref<HTMLElement | null>,
  duration: number = 10000,
  rotateDeg: number,
  direction: 'left' | 'right',
  easing: string = 'linear'
) {
  let animation: Animation | null = null;
  // 未来可以考虑优化为复用单例observer
  let observer: IntersectionObserver | null = null;

  const createCarouselAnimation = (el: HTMLElement) => {
    const keyframes = new KeyframeEffect(el, [
      {
        transform: `rotate(${rotateDeg}deg) translateX(0)`
      },
      {
        transform: `rotate(${rotateDeg}deg) translateX(${direction === 'left' ? '-' : ''}100%)`
      }
    ], {
      duration,
      iterations: Infinity,
      easing
    });
    return new Animation(keyframes);
  }

  onMounted(() => {
    const el = elRef.value!;
    animation = createCarouselAnimation(el);

    // 不可见时停止动画
    observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animation?.play();
      } else {
        animation?.pause();
      }
    });
    observer.observe(el);
  });

  onUnmounted(() => {
    animation?.cancel();
    observer?.disconnect();
  });
}