<template>
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
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register'
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .header{
    border: 1px solid #000;
    height: 90px;
    background-color: #000;
  }

  .header p{
    text-align: center;
    color: #fff;
    padding-top:20px;
    font-size: 35px;
    font-weight: 700;
  }

  .div-form form{
    display: flex;
    flex-direction: column;
  }
</style>