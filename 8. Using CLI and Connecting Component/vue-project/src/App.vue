<template>
    <app-header></app-header>

    <div>
        CHILDERN
    <comp-cars>  
    </comp-cars>

    PARRENTS
    <ul>
        <li v-for="(car, index) in cars" :key="index">
            {{ car.brand }} : {{ car.model }}
        </li>
     </ul>
     <button @click="changeCar"> ubah mobil</button>
    </div>

    <app-footer></app-footer>
</template>

<script>
import compCars from './components/Cars/index.vue';

    export default {
        components: {
            compCars
        },
        data(){
            return{
              cars: [
                    {model: 'Jazz', brand: 'Honda'},
                    {model: 'Yaris', brand: 'Toyota'},
                    {model: 'Omoda', brand: 'Cerry'},
                ]
            }
        },
        provide() {
            return {
            cars: this.cars,
                changeCar: this.changeCar
            }
        },
        methods: {
           changeCar() {
            this.cars[0].brand = 'isuzu'
           }
        }
    }
</script>

<style>
    body {
        padding: 0;
        margin: 0;
    }
    .container {
        min-height: 80vh;
        box-sizing: border-box;
        padding: 20px;
    }
</style>