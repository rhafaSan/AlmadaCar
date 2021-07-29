<template>
  <router-view/>
  <div class="header">
    <p>Almada Car</p>
  </div>
<div class="list-div">

  <div>
    <h4>Name: </h4>
    <p>Gol</p>

    <h4>Brand: </h4>
    <p>Wolksvagen</p>

    <h4>Made in</h4>
    <p>1968</p>

    <h4>Model Year:</h4>
    <p>2010</p>

    <h4>Sell date: </h4>
    <p>10/05/2015</p>
  </div>

  <div>
    <h4>Name: </h4>
    <p>Gol</p>

    <h4>Brand: </h4>
    <p>Wolksvagen</p>

    <h4>Made in</h4>
    <p>1968</p>

    <h4>Model Year:</h4>
    <p>2010</p>

    <h4>Sell date: </h4>
    <p>10/05/2015</p>
  </div>

  <div>
    <h4>Name: </h4>
    <p>Gol</p>

    <h4>Brand: </h4>
    <p>Wolksvagen</p>

    <h4>Made in</h4>
    <p>1968</p>

    <h4>Model Year:</h4>
    <p>2010</p>

    <h4>Sell date: </h4>
    <p>10/05/2015</p>
  </div>
</div>


</template>

<script>
import api from '@/services/config.js';
export default {
  name: 'ShowAll',
  data(){
    return {
      cars: []
    }
  },
  methods: {
    async getAllCars(){
      const response = await api.get('/carro/');
      console.log(response.data);
    }
  },
  mounted(){
    this.getAllCars();
  }
}
</script>

<style>
.list-div{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 1%;
}

</style>