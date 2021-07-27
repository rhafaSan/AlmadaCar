<template>
  <router-view/>
  <div class="header">
    <p>Almada Car</p>
  </div>
  <div>
    <label for="">
      Car's ID to delete:
    </label>
    <input type="text">

    <button>Delete</button>
  </div>
</template>

<script>
export default {
  name: 'Delete'
}
</script>

<style>

</style>