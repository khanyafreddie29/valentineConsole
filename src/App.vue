<template>
  <div id="app">
    <!-- app centers things -->
    <div class="app-wrapper">
      <!-- used app-wrapper to control the width.
       valentine had a fixed 400px width, 
       footer had 100% width. 
       app has 100% width.
       these are 2 different width sizes and to control/ make even,
       used app-wrapper to inherit app's width size and centering.
       -->
    <Valentine/>
    <Footer/>
    </div>
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

#app {
    display: flex;
    justify-content: center;
    width: 100%;
}

.app-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    max-width: 95%;
}

body{
    margin-top: 130px;
    background: linear-gradient(135deg,#F9F7FF 0%,#5915c0 100%);
    background-repeat: no-repeat; 
    background-size: cover ; 
    background-attachment: fixed;
}

/* mobile */
@media (max-width: 575.98px) {
  body {
    margin-top: 60px;          /* reduce spacing */
    overflow-y: auto;          /* allow vertical scroll */
    overflow-x: hidden;        /* prevent sideways expansion */
    background-attachment: fixed; /* fix mobile background bug */
  }
}

/* tablets */
@media (min-width: 768px) and (max-width: 991.98px) {
  body {
    margin-top: 100px;
    overflow-y: auto;
    overflow-x: hidden;
    background-attachment: fixed;
  }
}

/* desktops */
@media (min-width: 992px) and (max-width: 1199.98px) {
  body {
    overflow-x: hidden;
  }
}

/* extra large devices */
@media (min-width: 1200px) {
  body {
    overflow-x: hidden;
  }
}


</style>

<script>
import Valentine from '@/views/ValentineConsole.vue'
import Footer from '@/components/Footer.vue';


export default {
  name: 'App',
  components: {
    Valentine,
    Footer
  }
}
</script>
