<template>
  <div id="app">
    <Valentine/>
    <Footer/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');
*{
    font-family: Urbanist, Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    display: flex;
    justify-content: center;
    margin-top: 140px;
    background: linear-gradient(135deg,#F9F7FF 0%,#5915c0 100%);
    background-repeat: no-repeat;
    background-size: cover ;
    background-attachment: fixed;
    overflow: hidden;
}

</style>

<script>
import Valentine from '@/views/ValentineConsole.vue'
import Footer from '@/components/Footer.vue';


export default {
  name: 'App',
  components: {
    Valentine
  }
}
</script>
