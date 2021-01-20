
<template>
  <div class="footer">
    <div class="sciocal">
      <i class="fab fa-instagram" href="https://www.instagram.com/miruku.acc/"></i>
      <a href="https://www.instagram.com/miruku.acc/">miruku.acc</a>
      <button class="my-2">
        <a href="https://www.instagram.com/miruku.acc/">follow</a>
      </button>
    </div>
    <a>© 2020.09.30 By Pito</a>
  </div>
</template>

<style scoped lang="scss">
.footer {
  display: flex;
  width: 100%;
  border-top: 2.5px solid var(--border-color);
  background-color: var(--background-color);
  justify-content: center;
  flex-direction: column;
  a {
    padding: 2vw;
    font-family: var(--font-Caveat);
  }
  button {
    color: var(--text-color);
    border: none;
    background-color: var(--bottom-color);
    animation-name: attention;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    a {
      font-size: 1.2rem;
    }
    a:visited {
      color: var(--text-color);
    }
  }
}
.sciocal {
  font-size: 1.5rem;
}
.my-2 {
  margin: 0 4vw;
}
@keyframes attention {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(5deg);
  }
  66% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
