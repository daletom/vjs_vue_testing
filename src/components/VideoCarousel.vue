<template>
<div id="carouselExampleCaptions" class="relative carousel slide carousel-fade" data-bs-ride="carousel">
  <div
    class="absolute bottom-0 left-0 right-0 flex justify-center p-0 mb-4 carousel-indicators"
  >
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="relative w-full overflow-hidden carousel-inner">
    <div class="relative float-left w-full carousel-item active">
      <ix-video
        autoplay loop muted
        source="https://ix-shop.imgix.video/Croatia.mp4"
        @error="(event) => warn('error:', event)"
        class="w-full"
        >
        </ix-video>
      <div class="absolute hidden text-center carousel-caption md:block">
        <h5 class="text-xl">First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="relative float-left w-full carousel-item">
      <ix-video
        autoplay loop muted
        source="https://ix-shop.imgix.video/Switzerland.mp4"
        @error="(event) => warn('error:', event)"
        class="w-full"
        >
        </ix-video>
      <div class="absolute hidden text-center carousel-caption md:block">
        <h5 class="text-xl">Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="relative float-left w-full carousel-item">
      <ix-video
        autoplay loop muted
        source="https://tom.imgix.video/Train_4-3.mp4"
        @error="(event) => warn('error:', event)"
        class="w-full"
        >
        </ix-video>
      <div class="absolute hidden text-center carousel-caption md:block">
        <h5 class="text-xl">Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button
    class="absolute top-0 bottom-0 left-0 flex items-center justify-center p-0 text-center border-0 carousel-control-prev hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span
      class="inline-block bg-no-repeat carousel-control-prev-icon"
      aria-hidden="true"
    ></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="absolute top-0 bottom-0 right-0 flex items-center justify-center p-0 text-center border-0 carousel-control-next hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span
      class="inline-block bg-no-repeat carousel-control-next-icon"
      aria-hidden="true"
    ></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<script setup>
import {IxVideo} from '@imgix/ix-video';
</script>