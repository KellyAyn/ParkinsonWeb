<template>
  <div>
    <div class="menu">
      <div class="menu-items">
        <nuxt-link to="/about" class="menu-item">About</nuxt-link>
        <nuxt-link to="/parkinsonsdisease" class="menu-item"
          >Parkinson's<br />Disease</nuxt-link
        >
        <nuxt-link to="/activities" class="menu-item">Activities</nuxt-link>
        <nuxt-link to="/contact" class="menu-item">Contact</nuxt-link>
      </div>
    </div>
    <div class="background-pattern"></div>
    <div class="background-image"></div>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.menu {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
}

.menu-item {
  color: white;
  font-size: clamp(1.5rem, 4vw, 4rem);
  font-family: "Ibarra Real Nova", serif;
  display: block;
  text-decoration: none;
  padding: clamp(2rem, 1vw, 1rem) 0rem;
  cursor: pointer;
  transition: opacity 400ms ease;
}

.menu-items {
  margin-left: clamp(1rem, 5vw, 12rem);
  position: relative;
  z-index: 2;
}

.menu-items:hover > .menu-item {
  opacity: 0.3;
}

.menu-items:hover > .menu-item:hover {
  opacity: 1;
}

.background-pattern {
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.1) 9%,
    transparent 9%
  );
  background-position: 0% 0%;
  background-size: 12vmin 12vmin;
  height: 100vh;
  left: 0px;
  position: absolute;
  top: 0px;
  transition: opacity 800ms ease, background-size 800ms ease,
    background-position 800ms ease;
  width: 100vw;
  z-index: 1;
}

.background-image {
  background-image: url("https://images.unsplash.com/photo-1492496913980-501348b61469?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80");
  background-position: center 40%;
  background-size: 110vmax;
  height: 100%;
  left: 0px;
  opacity: 0.15;
  position: absolute;
  top: 0px;
  transition: opacity 800ms ease, background-size 800ms ease,
    background-position 800ms ease;
  width: 100%;
  z-index: 0;
}
.menu-items:hover ~ .background-pattern {
  background-size: 11vmin 11vmin;
  opacity: 0.5;
}

.menu-items:hover ~ .background-image {
  background-size: 100vmax;
  opacity: 0.1;
}
</style>
