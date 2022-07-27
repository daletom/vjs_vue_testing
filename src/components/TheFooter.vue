<template>
    <section aria-labelledby="collections-heading" class="bg-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
            <h2 id="collections-heading" class="text-2xl font-extrabold text-gray-900">See Other Categories?</h2>

            <div class="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              <div v-for="language in languages" :key="language.name" class="group relative">
                <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img :src="language.imageSrc" :alt="language.imageAlt" class="w-full h-full object-center object-cover" />
                </div>
                <h3 class="mt-6 text-sm text-gray-500">
                  <a :href="language.href">
                    <span class="absolute inset-0" />
                    {{ language.name }}
                  </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">{{ language.description }}</p>
              </div>
            </div>
          </div>
        </div>
        
        
      </section>
</template>

<script setup>
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
  import { MenuIcon, XIcon } from '@heroicons/vue/outline'

const languages = [
  {
    name: 'Javascript',
    description: 'See demos built using vanilla Javascript',
    imageSrc: 'https://learnbatta.com/assets/images/javascript/javascript-logo.png',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: 'https://ixdemos.vercel.app/javascript',
  },
  {
    name: 'React',
    description: 'See demos built using React, Gatsby, and Next.js',
    imageSrc: 'https://patterns.dev/img/reactjs/react-logo@3x.svg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: 'https://ixdemos.vercel.app/react',
  },
  {
    name: 'Vue.js',
    description: 'See demos built using Vue.js and Nuxt.js',
    imageSrc: 'https://cdn-media-1.freecodecamp.org/ghost/2019/03/vueart.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: 'https://ixdemos.vercel.app/vuejs',
  },
]
  
</script>