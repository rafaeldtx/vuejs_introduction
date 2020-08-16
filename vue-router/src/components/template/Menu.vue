<template>
  <nav class="menu">
    <ul>
      <router-link to="/" tag="li" active-class="active" exact>
        <a>Home Page</a>
      </router-link>
      <router-link to="/user/profile" tag="li" active-class="active">
        <a>User Profile</a>
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
