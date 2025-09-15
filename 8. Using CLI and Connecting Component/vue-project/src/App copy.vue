<template>
    <div>
        <app-header></app-header>
        <div class="container">
        <profile-Page 
            :aka="alias"
            :name="name"
            :umuruser="umur"
            :userParent="parents"
            @update-umur="umur = $event"
            @say-hello="sayHello"
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
                alias: 'Gt',
                name: 'Gata',
                umur: 30,
                parents: {
                    ibu: 'echa',
                    ayah: 'viri'
                }
            }
        },
        methods: {
            updateName() {
                this.name = "Maulana"
            },
            sayHello () {
                alert('Hello World')
            },
            updateAge() {
            
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