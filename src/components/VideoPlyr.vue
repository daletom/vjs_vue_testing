<template>
    <vue-plyr ref="plyr"></vue-plyr>
</template>

<script setup>
</script>
<script>
export default {
        mounted () {
            this.$refs.plyr.player.on('event', () => console.log('event fired'))
        }
    }
</script>
