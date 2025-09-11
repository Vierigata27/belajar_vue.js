<template>
    <div class="user_profile">
        <h3>Informasi User</h3>
        <ul>
            <li>
                <span>Nama : </span> {{ name }}
            </li>
            <li>
                <span>Umur : </span> {{ age }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:['name','age']
    }
</script>