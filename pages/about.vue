<template>
  <div>
    <div class="header-wrapper">
      <div class="header">
        <h1 class="about-header">Co je Projekt Parkinson?</h1>
        <p class="about-subheader">
          Náš projekt má za cíl pomoc při odhalení včasného stádia nemoci a
          pomoc při stanovování rizika a prevence této nemoci. Pokud máte obavy
          o své zdraví, o zdraví svých nejbližších, pokud potřebujete jistotu,
          přijďte k nám. Budeme velice rádi, když se rozhodnete podpořit naši
          snahu a zapojíte se do Projektu Parkinson. Co to od Vás bude
          vyžadovat? Váš čas. Vážíme si každé minuty Vašeho času, kterou nám
          věnujete.
        </p>
      </div>
    </div>
    <div class="section">
      <h1 class="section-header">Provedeme Vám komplexní vyšetření</h1>
      <div class="section-card">
        <div class="content-card"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-wrapper {
  display: flex;
  height: 35vh;
  width: 100%;
  justify-content: right;
  border-bottom: 2px $dark-accent solid;
  background-color: darken($color: $dark-shade, $amount: 10%);
}

.header {
  display: grid;
  grid-template-rows: 40% 60%;
  align-items: right;
  justify-items: right;
  width: 65vw;
  margin-right: 3rem;
}

.about-subheader {
  display: flex;
  margin-bottom: 5rem;
  text-align: right;
  font-size: 1.2rem;
}

.about-header {
  display: flex;
  size: 30%;
  font-size: 3.5rem;
}

.section {
  padding: 1em 1.5em;
  justify-content: left;
  display: flex;
}
</style>
