<template>
    <footer class="footer">
      &copy; 2026 Khanya Freddie | All rights reserved
    </footer>
</template>

<style>
.footer{
  display: flex;
  justify-content: center;
  text-align: center;
  color: #ffff;
  margin-top: 10px;
  font-size: small;
  border: none;
  border-radius: 10px;
  background: linear-gradient(135deg,#a184f9 0%,#5915c0 100%);
  backdrop-filter: blur(5px);
  width: 400px;
}

/* mobile */
@media (max-width: 575.98px) {

  .footer {
    width: 100%;
    max-width: 400px;      /* match console width */
    margin-left: auto;
    margin-right: auto;
    padding: 8px 12px;
    text-align: center;
    font-size: 12px;
  }
}

/* tablet */
@media (min-width: 768px) and (max-width: 991.98px) {

  .footer {
    width: 90%;
    max-width: 450px;
    margin-left: auto;
    margin-right: auto;
    padding: 8px 12px;
    text-align: center;
  }
}

/* desktop */
@media (min-width: 992px) and (max-width: 1199.98px) {

  .footer {
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    padding: 8px 12px;
    text-align: center;
  }
}

/* extra large devices */
@media (min-width: 1200px) {

  .footer {
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    padding: 8px 12px;
    text-align: center;
  }
}

</style>