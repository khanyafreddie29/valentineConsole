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
    border: 2px solid #bc69ff;
    border-radius: 15px;
    width: 350px;
    height: 150px;
    background-color: #f6f0ff;
    background-image: 
        radial-gradient(circle at 10px 10px, #ccb6ff 2px, transparent 2px),
        radial-gradient(circle at 30px 30px, #ccb6ff 2px, transparent 2px);
    background-size: 40px 40px;
    text-align: center;
    padding: 10px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    box-shadow: 0 6px 12px rgba(255, 105, 180, 0.15);
}

.log-title {
    margin-bottom: 5px;
    color: #7214ff;
    font-weight: bold;
    background: rgba(255, 255, 255, 0.7);
    padding: 3px 10px;
    border-radius: 20px;
    display: inline-block;
    margin: 0 auto 8px auto;
}

.message-log {
    flex: 1;
    font-size: 14px;
    color: #9970db;
    text-align: center;
    white-space: pre-wrap;
    word-break: break-word;
    overflow-y: auto;
    padding: 10px;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    border: 1px solid rgba(212, 182, 255, 0.5);
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