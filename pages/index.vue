<script setup>
let windowWidth = window.innerWidth / 6;
let windowHeight = window.innerHeight / 6;

onMounted(() => {
  window.addEventListener("mousemove", (e) => {
    const bgp = document.querySelector(".background-pattern");
    const bgg = document.querySelector(".background-gradient");
    const mouseX = event.clientX / windowWidth;
    const mouseY = event.clientY / windowHeight;
    const degree = mouseY * 15 + 45;
    const firstPercentage = 25 + mouseX * 8.3333333;
    const secondPercentage = 115 - firstPercentage;
    bgp.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
    bgg.style.background = `linear-gradient(${degree}deg, #c63f6f 0%, #dcb484 ${secondPercentage}%)`;
  });
});
</script>

<template>
  <div>
    <div class="title-card-wrapper">
      <div class="title-card">
        <h1 class="project-name">Projekt Parkinson</h1>
        <p class="project-description">
          Parkinsonova nemoc není smrtelná, ale život postiženého změní.
        </p>
      </div>
      <div class="background-pattern"></div>
      <div class="background-gradient"></div>
    </div>
    <div class="cards-wrapper">
      <div class="card about-card">
        <h1 class="card-header">O projektu</h1>
        <p class="card-text">
          Náš projekt má za cíl pomoc při odhalení včasného stádia nemoci a
          pomoc při stanovování rizika a prevence této nemoci. Pokud máte obavy
          o své zdraví, o zdraví svých nejbližších, pokud potřebujete jistotu,
          přijďte k nám.
        </p>
      </div>
      <div class="card parkison-card">
        <h1 class="card-header">Parkinsonova Nemoc</h1>
        <p class="card-text">
          Parkinsonova nemoc je porucha nervového systému, která ovlivňuje
          především schopnost pohybu. Příznaky této nemoci se objevují postupně,
          někdy zcela nenápadně...
        </p>
      </div>
      <div class="card activities-card">
        <h1 class="card-header">Aktivity</h1>
        <p class="card-text">TBD</p>
      </div>
      <div class="card contact-card">
        <h1 class="card-header">Kontakt</h1>
        <p class="card-text">
          Tel.: +420 606 733 299<br />e-mail: eva.augste@osu.cz
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title-card-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  border-bottom: 2px $dark-accent solid;
  z-index: 1;
}

.background-gradient {
  position: absolute;
  height: 100vh;
  width: 125vw;
  transition: opacity 800ms ease, background-size 800ms ease,
    background-position 800ms ease;
  z-index: -2;
}

.title-card {
  position: relative;
  background: $dark-shade;
  height: 50%;
  width: 60%;
  display: grid;
  justify-content: left;
  align-items: center;
  border-radius: 55px;
  border: 2px $light-shade solid;
  z-index: 2;
}

.project-name {
  font-size: 3rem;
  font-weight: 700;
  color: $light-shade;
  width: 100%;
  margin-left: 5%;
  height: 35%;
  font-weight: 700;
}

.project-description {
  font-size: 1.5rem;
  font-weight: 400;
  color: $light-shade;
  width: 100%;
  margin-left: 5%;
  height: 65%;
}

.background-pattern {
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.25) 9%,
    transparent 9%
  );
  background-position: 0% 0%;
  background-size: 10vmin 10vmin;
  height: 100vh;
  width: 125vw;
  left: 0px;
  top: 0px;
  position: absolute;
  transition: opacity 800ms ease, background-size 800ms ease,
    background-position 800ms ease;
  z-index: -1;
}

.cards-wrapper {
  height: 41vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.card {
  height: 80%;
  width: 23%;
  border-radius: 50px;
  border: 3px $dark-accent solid;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  background-color: darken($dark-shade, 10%);
  transition: all 400ms ease;
}

.card:hover {
  scale: 1.1;
}

* {
  box-sizing: border-box;
}
</style>
