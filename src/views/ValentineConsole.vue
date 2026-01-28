<template>
<div class="box">
        <!-- contains all the components needed to complete the console
            1. top display which will show the main messages when btns clicked on
            2. btns to display msgs on command
            3. bttom display to show history of main msgs and special msgs -->
    <TopDisplay/>
    <Buttons/>
    <BottomDisplay/>
</div>
</template>

<style scoped>

.box {
    border: 3px solid #4C1D95 ;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    width: 400px;
    height: 700px;
    background-color: #F5F0FF;
    box-shadow: 12px -3px 5px rgb(82, 14, 82);
}</style>

<script>
import TopDisplay from '@/components/TopDisplay.vue'
import Buttons from '@/components/Buttons.vue'
import BottomDisplay from '@/components/BottomDisplay.vue'

export default {
    name: 'ValentineConsole',
    components: {
        TopDisplay,
        Buttons,
        BottomDisplay
    }
}
</script>