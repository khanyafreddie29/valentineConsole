<template>
  <div id="app">
    <Valentine/>

    <footer class="footer">
      &copy; 2026 Khanya Freddie | All rights reserved
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');
*{
    font-family: Urabnist, Arial, Helvetica, sans-serif;
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

.footer{
  display: flex;
  justify-content: center;
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
