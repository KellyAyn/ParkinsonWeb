<template>
  <div>
    <nav class="navbar-top">
      <div class="nav-section">
        <div class="navbar-logo">Projekt Parkinson</div>
      </div>
      <div class="nav-section">
        <div class="navbar-links">
          <nuxt-link to="/" class="navbar-link">Domů</nuxt-link>
          <nuxt-link to="/about" class="navbar-link">O nás</nuxt-link>
          <nuxt-link to="/parkinsonsdisease" class="navbar-link"
            >Parkinsonova choroba</nuxt-link
          >
          <nuxt-link to="/activities" class="navbar-link">Aktivity</nuxt-link>
          <nuxt-link to="/contact" class="navbar-link">Kontakt</nuxt-link>
        </div>
      </div>
      <div class="nav-section">
        <div class="navbar-join">
          <nuxt-link to="/join" class="navbar-link">Zapojit se</nuxt-link>
        </div>
      </div>
    </nav>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.navbar-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(97, 78, 134, 0.75) 100%
  );
  width: 100%;
}
.nav-section {
  align-items: center;
  height: 5rem;
  display: flex;
  width: 20%;
  justify-content: space-evenly;
}
.nav-section > .navbar-links {
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  width: 60%;
}
.navbar-link {
  padding: 0rem 2rem;
  text-decoration: none;
  transition: opacity 400ms ease;
  font-size: 1.2rem;
  white-space: nowrap;
}

.navbar-logo {
  text-align: center;
  font-size: 2.3rem;
  font-family: "Ibarra Real Nova", serif;
  padding-left: 1rem;
}

.navbar-links:hover > .navbar-link {
  opacity: 0.3;
}

.navbar-links:hover > .navbar-link:hover {
  opacity: 1;
}
</style>
