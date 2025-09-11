<template>
    <div>
        <app-header></app-header>
        <div class="container">
        <profile-Page 
            :name="name"
            age="20"
        ></profile-Page>
        
        <button @click="updateName">
            Ganti Nama
        </button>
        </div>

        <app-footer></app-footer>
    </div>
</template>

<script>
import profilePage from './components/User/profilePage.vue';

    export default {
    components: {
        profilePage
    },
        data(){
            return{
                name: 'Gata'
            }
        },
        methods: {
            updateName() {
                this.name = "Maulana"
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