<template>
    <div>
        <ul id="menu">
            <li>
                <router-link to="/"> Home |</router-link>
            </li>
             <li>
                <router-link to="/collaz"> Collaz |</router-link>
            </li>
           <li>
                <router-link to="/multiplicar">Tabla de Multiplicar |</router-link>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: "MenuComponent",
}
</script>

<style>
    ul#menu li {
        display: inline;
    }
</style>