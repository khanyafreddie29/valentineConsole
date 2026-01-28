<template>
  <div id="app">
    <Valentine/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Henny+Penny&family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Lexend:wght@100..900&display=swap');

*{
    font-family: Berkshire Swash, Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    display: flex;
    justify-content: center;
    margin-top: 200px;
    background: linear-gradient(135deg,#F9F7FF 0%,#5915c0 100%);
    background-repeat: no-repeat;
    background-size: cover ;
    background-attachment: fixed;  
}

.greeting{
  font-family: Silkscreen, Arial, Helvetica, sans-serif ;
}
</style>

<script>
import Valentine from '@/views/ValentineConsole.vue'


export default {
  name: 'App',
  components: {
    Valentine
  }
}
</script>
