<template>
  <nav class="menu">
    <ul>
      <router-link :to="{ name: 'Homepage' }" tag="li" active-class="active" exact>
        <a>Home Page</a>
      </router-link>
      <router-link to="/users" tag="li" active-class="active">
        <a>Users</a>
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
