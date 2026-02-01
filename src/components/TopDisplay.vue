<template>
    <div class="display-container">
        <div class="title">
            🎀 Happy Valentine's Day Liso 🎀
        </div>

        <div class="display">
            <!-- append main and special msghs -->
            {{ displayMessage }}
        </div>
    </div>
</template>

<style scoped>
.display-container{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.title{
    margin-top: 20px;
    text-align: center;
    border-radius: 15px;
    width: 300px;
    font-size: 20px;
}

.display{
    border: 2px solid #bc69ff;
    border-radius: 15px;
    width: 350px;
    height: 260px;
    margin-top: 20px;
    background-color:  rgb(255, 255, 255);
    background-image: 
        radial-gradient(circle at 10px 10px, #ccb6ff 2px, transparent 2px),
        radial-gradient(circle at 30px 30px, #ccb6ff 2px, transparent 2px);
    background-size: 40px 40px;
    padding: 20px;
    text-align: center;
    font-size: 18px;
    justify-content: center;
    align-items: center;
    display: flex;
    overflow-wrap: break-word;
    word-break: break-word;
    color: #a070db;
}


</style>

<script>
export default {
    name: 'TopDisplay',
    props: {
        displayMessage: {
            type: String,
            default: 'press Yes first, then click letters for sweet messages!'
        }
    }
}
</script>