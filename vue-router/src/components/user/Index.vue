<template>
  <div class="index">
    <h3>Users list</h3>

    <ul class="lista">
      <router-link
        :to="{ name: 'UserShow', params: { id: 1 } }"
        tag="li"
        class="item-lista">Usuario 1</router-link>
      <router-link
        :to="{ name: 'UserShow', params: { id: 2 } }"
        tag="li"
        class="item-lista">Usuario 2</router-link>
      <router-link
        :to="{ name: 'UserShow', params: { id: 3 } }"
        tag="li"
        class="item-lista">Usuario 3</router-link>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
