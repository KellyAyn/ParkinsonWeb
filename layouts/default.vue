<template>
  <div>
    <nav>
      <div class="nav-name">Projekt<br />Parkinson</div>
      <div class="nav-links">
        <ul>
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">About</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact">Contact</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/parkinsonsdisease">Parkinson's Disease</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ab2929;
  padding: 0 2rem;
  height: 5rem;
}

.nav-name {
  font-size: 1.5rem;
  font-weight: 700;
}

.nav-links {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

ul {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0;
}

li {
  margin: 0 1rem;
}

a {
  color: #000000;
  text-decoration: none;
}
</style>
