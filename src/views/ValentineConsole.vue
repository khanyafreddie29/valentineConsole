<template>
<div class="box">
        <!-- contains all the components needed to complete the console
            1. top display which will show the main messages when btns clicked on
            2. btns to display msgs on command
            3. bttom display to show history of main msgs and special msgs -->
    <TopDisplay :displayMessage="currentMessage"/>
    <Buttons
    @message-updated="updateMessage"
    @yes-activated="activateLetters"
    />
    <BottomDisplay :messageLog="messageHistory"/>
</div>
</template>

<style scoped>

.box {
    border: 3px dashed #4C1D95; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 15px;
    width: 400px;
    height: 700px;
    background-color: #F5F0FF;
    box-shadow: 
        0 0 20px rgb(106, 37, 129),
        12px -3px 15px rgb(91, 47, 128);
    padding: 20px;
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
    },
    data(){
        return {
            currentMessage: `WILL YOU BE MY VALENTINE ??? 💌`,
            lettersActivated: false,
            messageHistory: `Waiting for your first message...`
        }
    },

    mounted(){
        console.log('Initial history: ', this.messageHistory)
    },
    methods: {
        updateMessage(newMessage){
            console.log('Updating History:', newMessage);
            this.currentMessage = newMessage;

            const timestamp = new Date().toLocaleTimeString([], {hour: `2-digit`, minute:`2-digit`});
            this.messageHistory = `${timestamp}: ${newMessage}\n${this.messageHistory}`;

            console.log('New history:', this.messageHistory)
        },

        activateLetters(){
            this.lettersActivated = true;
            this.updateMessage(`Good choice! Now click the circular buttons for sweet messages! 💖`);
        },
    }
}
</script>