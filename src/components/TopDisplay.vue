<template>
    <div class="display-container">
        <div class="title">
           Happy Valentine's Day 
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
    border: inset;
    border-radius: 15px;
    width: 350px;
    height: 260px;
    margin-top: 20px;
    background-color: rgb(255, 255, 255);
    padding: 20px;
    text-align: center;
    font-size: 18px;
    justify-content: center;
    align-items: center;
    display: flex;
    overflow-wrap: break-word;
    word-break: break-word;
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