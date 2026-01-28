<template>
    <div class="btn-container">
     <div class="controls">
         <button class="btn-hrt" id="heart-btn" @click="buttonClicked('HEART1')">
             <i class="fa-regular fa-heart"></i>
         </button>
         <!-- when clicked, buttonClicked method is called -->
         <button class="btn" @click="buttonClicked('A')">A</button>
         <button class="btn" @click="buttonClicked('B')">B</button>
         <button class="btn" @click="buttonClicked('C')">C</button>
         <button class="btn" @click="buttonClicked('X')">X</button>
         <button class="btn" @click="buttonClicked('Y')">Y</button>
         <button class="btn" @click="buttonClicked('Z')">Z</button>
         <button class="btn-hrt" id="heart-btn" @click="buttonClicked('HEART2')">
             <i class="fa-regular fa-heart"></i>
         </button>
     </div>
 
     <div class="create-letter">
         <button class="btn-letter" id="no-btn"  @click="handleNoClick">NO</button>
         <button class="btn-letter" id="yes-btn"  @click="handleYesClick">YES</button>
     </div>
    </div>
 </template>
 
 <style scoped>
 .btn-container {
     display: flex;
     flex-direction: column;
     align-items: center;
     width: 100%;
 }
 
 .controls{
     display: grid;
     grid-template-columns: repeat(4, 1fr);
     grid-template-rows: repeat(2, 1fr);
     gap: 18px;
     padding: 15px;
 }
 
 .controls .btn{
     height: 45px;
     width: 50px;
     border-radius: 50%;
     border: none;
     background-color: #C9A8FF;
     box-shadow: 5px 5px 2px rgb(57, 54, 54);
     cursor: pointer;
     font-size: medium;
 }
 
 .btn:hover{
     background-color:#D8B4FE;
     color:rgb(255, 255, 255);
     transform: translateY(-3px);
 }
 
 .controls .btn-hrt{
     height: 45px;
     width: 50px;
     border-radius: 50%;
     border: none;
     background-color: #C9A8FF;
     box-shadow: 5px 5px 2px rgb(57, 54, 54);
     cursor: pointer;
     font-size: medium;
 }
 
 .btn-hrt:hover{
     background-color:#D8B4FE;
     color:rgb(255, 255, 255);
     transform: translateY(-3px);
 }
 
 .btn-letter{
     margin-bottom: 15px;
     border-radius: 15px;
     padding: 5px;
     width: 100px;
     max-width: 250px;
     border: none;
     box-shadow: 5px 5px 2px rgb(57, 54, 54);
     background-color: #C9A8FF;
     cursor: pointer;
     font-size: medium;
 }
 
 .btn-letter:hover{
     background-color: #D8B4FE;
     color:rgb(255, 255, 255);
     transform: translateY(-3px);
 }
 
 .create-letter{
     display: flex;
     justify-content: center;
     gap: 20px;
     width: 100%;
 }
 </style>
 
 <script>
 export default {
     name: 'Buttons',
     data(){
         return {
             audioElements: {},
             noClickCount: 0,
             yesClicked: false
         }
     },
     mounted(){
        // runs when the compontent loads
         // Preload all the sounds for better performance
         // IMPORTANT: Make sure these files exist in your assets/sounds folder
         const sounds = {
             yesbtn: new Audio(require('@/assets/sounds/AnimeWOW.mp3')),
             nobtn: new Audio(require('@/assets/sounds/fartSound.mp3')),
             click: new Audio(require('@/assets/sounds/MouseClick.mp3'))
         };
 
         // Set the audio volume
         Object.values(sounds).forEach(audio => {
            //object is the thing/variable
            // value of sounds/variable and for each sound here the volume is 
             audio.volume = 0.3;
         });
 
         this.audioElements = sounds;
        //  audioelements is an empty object to store audio files
        // stores in component data
     },
     methods: {
         soundEffect(type){
             if (this.audioElements[type]){
                 // Clone and play to allow overlapping sounds
                 const audio = this.audioElements[type].cloneNode();
                 audio.volume = 0.5;
                //  setting the volume to 50% for all sounds
                 audio.play().catch(e => console.error(`Audio failed to play:`, e));
                //  checks if the audio exists, if ti does then play it
             }
         },

         handleNoClick(){
            this.soundEffect('nobtn');
            this.noClickCount++;

            let message ='';

            if (this.noClickCount === 1){
                message = `Are you sure? Try again.`;
            } else if (this.noClickCount === 2){
                message = `That is not the right answer.`;
            } else if (this.noClickCount === 3){
                message = `You know what to pick.`;
            } else if (this.noClickCount >= 4){
                message = `Sir.. sir..`
            }

            console.log('Emitting message-updated:', message); // Add this
            this.$emit("message-updated", message);
             console.log('Emitting yes-activated event')
            // $emit ends a message to the parent component which is in views
            // since the ui is there
         },

         handleYesClick(){
            this.soundEffect("yesbtn");
            this.yesClicked = true;
            console.log('Emitting: Good Choice message');
            this.$emit("message-updated", `Yayyy !! ;)`);
            console.log('Emitting yes-activated event')
            this.$emit("yes-activated");
            // $emit() CAN BE CALLED USING @ in parent component to use
            // think of it as a class with an className
         },

         buttonClicked(letter){
            this.soundEffect("click");

            if (this.yesClicked){
                const messages = {
                    A: `abundance of dih 💖`,
                    B: `be mine forever? you dont have a choice.💕`,
                    C: `cat dads are so in season 🌹 RAHHHH`,
                    X: `if anything, i believe you're worth it 💋`,
                    Y: `you make me smile with your epic compliments. laugh with your peak jokes.`,
                    Z: `ZADDYYY. AY AY AY AY AY`,
                    HEART1: `you ARE be mineee. I love you so much <3`,
                    HEART2: `baby boy you'll be young foreverrr`
                };

                this.$emit("message-updated", messages[letter] || `button ${letter} clicked`);
            } else {
                message = `click YES to unlock sweet messsages 💝 !`;
            }

            console.log('Emitting button message:', message);
            this.$emit(`button clicked`, `button ${letter} clicked`);
         }
     }
 }
 </script>