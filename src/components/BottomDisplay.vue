<template>
    <div class="display2">
       <div class="log-title">Message Log:</div>
       <div class="message-log">
           {{ messageLog }}
       </div>
   </div>
</template>

<style scoped>
.display2{
   border: 2px solid #4C1D95;
   border-radius: 15px;
   width: 350px;
   height: 150px;
   background-color: rgb(255, 255, 255);
   text-align: center;
   padding: 10px;
   overflow-y: auto;
   display: flex;
   flex-direction: column;
}

.log-title {
    margin-bottom: 5px;
    color: #0e0b12;
}

.message-log {
   flex: 1;
   font-size: 14px;
   color: hsl(0, 6%, 16%);
   text-align: left;
   white-space: pre-wrap; /* Important for newlines */
   word-break: break-word;
   overflow-y: auto;
   padding: 5px;
   background-color: #f9f5ff;
   border-radius: 15px;
}
</style>

<script>
export default {
   name: 'BottomDisplay',
   props: {
       messageLog: {
           type: String,
           default: 'Waiting for your first message...'
       }
   }
}
</script>