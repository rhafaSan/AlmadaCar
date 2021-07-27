<template>
  <router-view/>
   <div class="header">
    <p>Almada Car</p>
  </div>
  <div class="div-form">
    <form action="">
      <label for="">Name:</label>
      <input type="text">

      <label for="">Brand:</label>
      <input type="text">

      <label for="">Made in:</label>
      <input type="text">

      <label for="">Model year:</label>
      <input type="text">

      <label for="">Sell date:</label>
      <input type="text">

      <button>Update</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Update'
}
</script>

<style>

</style>