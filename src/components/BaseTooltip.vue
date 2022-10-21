<template>
  <div ref="elementRef"
       class="inline-block"
       @mouseenter="showTooltip"
       @mouseleave="hideTooltip"
       @focus="showTooltip"
       @blur="hideTooltip"
  >
    <slot />
    <div v-if="props.content && props.show"
         class="absolute top-0 left-o z-50 text-sm rounded-lg bg-gray-600 text-white px-4 py-1"
         :class="isTooltipHidden && 'hidden'"
         ref="tooltipRef">
      {{ props.content }}
      <div class="absolute bg-gray-600 h-2 w-2 transform rotate-45" ref="arrowRef"></div>
    </div>
  </div>
</template>

<script setup>
import {defineProps, ref} from 'vue';
import {arrow, computePosition, flip, offset, shift} from '@floating-ui/dom';

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  content: {
    type: String,
    default: ''
  }
});

const elementRef = ref();
const tooltipRef = ref();
const arrowRef = ref();
const isTooltipHidden = ref(true);

const calculateTooltipPosition = async () => {

  const {x, y, middlewareData, placement} = await computePosition(elementRef.value, tooltipRef.value, {
    placement: "left",
    middleware: [offset(16), flip(), shift({padding: 6}), arrow({element: arrowRef.value})]
  });

  Object.assign(tooltipRef.value.style, {
    left: `${x}px`,
    top: `${y}px`
  })

  const {x: arrowX, y: arrowY} = middlewareData.arrow;

  const oppositeSide = {
    left: "right",
    right: "left",
    top: "bottom",
    bottom: "top"
  }[placement.split('-')[0]]

  Object.assign(arrowRef.value.style, {
    left: arrowX ? `${arrowX}px` : "",
    top: arrowY ? `${arrowY}px` : "",
    bottom: "",
    right: "",
    [oppositeSide]: "-4px"
  })

};

const hideTooltip = () => {
  isTooltipHidden.value = true;
}

const showTooltip = () => {
  if (props.show) {
    isTooltipHidden.value = false;
    calculateTooltipPosition();
  }
}
</script>
