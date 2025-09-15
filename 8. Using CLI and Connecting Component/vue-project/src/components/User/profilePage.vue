<template>
    <div class="user_profile">
        <h3>Informasi User</h3>
        <ul>
            <li>
                <span>AsKnowAs : </span> {{ aka }}
            </li>
            <li>
                <span>Nama : </span> {{ name }}
            </li>
            <li>
                <span>Umur :</span> {{ umuruser }}
            </li>
            <ul>
                <li v-for="(value, key, index) in userParent" :key="index">
                    {{ key }} :: {{  value }}
                </li>
            </ul>
        </ul>
        <button @click="updateLastName">Child Update Umur</button>
        <button @click="sayHello"> Child Update say Hello</button>
    </div>
</template>

<script>
    export default {
        props:{
            aka: {
                type: String,
                required: true,
                default: 'N/A'
            },
            name: {
                type: String,
                validator(value) {
                    if (value === 'Gata') {
                        return true
                    } else {
                        return false
                    }
                }
            },
            umuruser: [Number, String],
            userParent: Object
        },
        data() {
            return {
                name: 'Budi',
            }
        },
        methods: {
            updateLastName() {
                this.$emit('update-umur', 24 )
            },
            sayHello() {
                this.$emit('say-hello')
            },
        },
    }
</script>