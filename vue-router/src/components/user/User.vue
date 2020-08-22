<template>
  <div class="user">
    <h1>Users</h1>
    <hr>
    <router-view />
    <return-button name="Homepage"/>
  </div>
</template>

<script>
import ReturnButton from '@/components/template/ReturnButton'

export default {
  components: { ReturnButton }
}
</script>
