<template>
  <div class="sidebar-item px-1 py-2" ref="elementRef"
       @mouseenter="showTooltip"
       @mouseleave="hideTooltip"
       @focus="showTooltip"
       @blur="hideTooltip"
  >
    <router-link :to="props.path" class="flex items-center cursor-pointer" :class="`${props.isExpanded ? 'px-2' : 'justify-center'}`">
      <slot></slot>
      <p v-if="props.isExpanded" class="font-bold text-sm ml-3">{{ props.title }}</p>
    </router-link>
    <div v-if="props.tooltipMessage && !props.isExpanded"
         class="absolute top-0 left-o z-50 text-sm rounded-lg bg-gray-600 text-white px-4 py-1"
         :class="isTooltipHidden && 'hidden'"
         ref="tooltipRef">
      {{ props.tooltipMessage }}
      <div class="absolute bg-gray-600 h-2 w-2 transform rotate-45" ref="arrowRef"></div>
    </div>
  </div>
</template>

<script setup>
import {defineProps, ref} from 'vue';
import {arrow, computePosition, flip, offset, shift} from '@floating-ui/dom';

const props = defineProps({
  isExpanded: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Please define title'
  },
  tooltipMessage: {
    type: String,
    default: ''
  },
  path: {
    type: String,
    default: '/'
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
  if (!props.isExpanded) {
    isTooltipHidden.value = false;
    calculateTooltipPosition();
  }
}
</script>
