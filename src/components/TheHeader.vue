<template>
  <header>
    <div>
      <nav>
        <div class="logo">
          <router-link to="/">Techno</router-link>
        </div>
        <ul>
          <li>
            <router-link to="/cursos">Cursos</router-link>
          </li>
          <li>
            <router-link to="/contato">Contato</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style scoped>
  header {
    background: #123;
  }
  nav {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    align-content: space-between;
  }
  .logo {
    flex: 1;
    text-align: left;
  }
  .logo a {
    color: white;
    font-size: 1.2rem;
  }
  li {
    display: inline-block;
  }
  li a {
    padding: 0 10px;
    margin-left: 10px;
  }



</style>