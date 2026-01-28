<template>
    <div class="btn-container">
     <div class="controls">
         <button class="btn-hrt" id="heart-btn" @click="soundEffect('click')">
             <i class="fa-regular fa-heart"></i>
         </button>
         <!-- when clicked, soundeffect method is called -->
         <button class="btn" @click="soundEffect('click', 'A')">A</button>
         <button class="btn" @click="soundEffect('click', 'B')">B</button>
         <button class="btn" @click="soundEffect('click', 'C')">C</button>
         <button class="btn" @click="soundEffect('click', 'X')">X</button>
         <button class="btn" @click="soundEffect('click', 'Y')">Y</button>
         <button class="btn" @click="soundEffect('click', 'Z')">Z</button>
         <button class="btn-hrt" id="heart-btn" @click="soundEffect('click')">
             <i class="fa-regular fa-heart"></i>
         </button>
     </div>
 
     <div class="create-letter">
         <button class="btn-letter" id="no-btn" @click="soundEffect('nobtn')">NO</button>
         <button class="btn-letter" id="yes-btn" @click="soundEffect('yesbtn')">YES</button>
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
             audioElements: {}
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
         soundEffect(type, letter = ''){
             if (this.audioElements[type]){
                 // Clone and play to allow overlapping sounds
                 const audio = this.audioElements[type].cloneNode();
                 audio.volume = 0.5;
                //  setting the volume to 50% for all sounds
                 audio.play().catch(e => console.error(`Audio failed to play:`, e));
                //  checks if the audio exists, if ti does then play it
             } else {
                 console.warn(`Sound "${type}" not loaded`);
             }
             
             if(type === 'click'){
                 this.$emit('button-clicked', `Button ${letter} clicked`);
             }
         }
     }
 }
 </script>