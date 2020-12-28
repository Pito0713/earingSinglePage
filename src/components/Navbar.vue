<template>
  <nav class="nav">
    <div class="logo">
      <img src="../img/logo.png" alt="logo"/>
    </div>
    <div class="navBranch" :class="{ navOps: isOpen }">
      <ul>
        <li class="nav-Item">
          <a href="index.html">耳環 Earrings</a>
        </li>
        <li class="nav-Item">購物車 Cart</li>
        <li class="nav-Item">會員 mender</li>
      </ul>
    </div>
    <!--Navburger-->
    <div class="burger" @click="showUp">
      <div class="burgerLine"></div>
      <div class="burgerLine"></div>
      <div class="burgerLine"></div>
    </div>
  </nav>
</template>

<script>
export default {
  data: function () {
    return {
      isOpen: false,
      scrollTop: ''
    }
  },
  methods: {
    showUp () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  align-items: center;
  width: calc(100% - 4vw);
  top:0;
  z-index: 10;
  padding: 0 2vw;
}
.logo img {
  width: 60px;
}
.navBranch ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navBranch .nav-Item {
  padding: 0 1rem;
}
.navOps {
  /*show navbar*/
  transform: translateX(250px);
}
/*-burger-*/
.burger {
  display: none;
}
.burger div {
  width: 20px;
  height: 2px;
  position: relative;
  display: block;
  background-color: #000000;
  margin: 4px 0;
}
@media screen and (max-width: 769px) {
  .burger {
    display: block;
  }
  nav {
    background-color: var(--background-color)
  }
  .navBranch {
    display: block;
    position: fixed;
    top: 65px;
    /*hidden navbar*/
    left: -250px;
    height: 100%;
    transition: all 1s ease;
    border-right: 1px var(--border-color) solid;
    z-index: 99;
    background-color: var(--background-color);
    width: 30%;
  }
  .navBranch ul {
    flex-direction: column;
    .nav-Item {
      padding: 2rem;
    }
  }
}
</style>
