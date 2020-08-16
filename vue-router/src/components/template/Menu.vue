<template>
  <nav class="menu">
    <ul>
      <router-link to="/" tag="li" active-class="active" exact>
        <a>Home Page</a>
      </router-link>
      <router-link to="/user/1/profile" tag="li" active-class="active">
        <a>User Profile 1</a>
      </router-link>
      <router-link to="/user/2/profile" tag="li" active-class="active">
        <a>User Profile 2</a>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>
