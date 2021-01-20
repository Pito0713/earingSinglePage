<template>
  <nav class="nav">
    <div class="logo">
      <img src="../img/logo.png" alt="logo"/>
    </div>
    <div class="navBranch">
      <ul>
        <li class="nav-Item">
          <a href="https://pito0713.github.io/earIngProudct">耳環 Earrings</a>
        </li>
        <li class="nav-Item">購物車 Cart</li>
        <li class="nav-Item">會員 mender</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data: function () {
    return {
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
.logo{
  display: flex;
  align-items: center;
  padding: 1vw;
  img {
    width: 60px;
  }
}
.navBranch ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  li {
    justify-content: end;
  }
}
.navBranch .nav-Item {
  padding: 0 1rem;
}
@media screen and (max-width: 769px) {
}
</style>
