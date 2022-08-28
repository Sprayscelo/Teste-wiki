<template id="listarUsuarios">
    <div id="listaUsuariosContainer">
        <div v-if="page == 1"  class="listaDeUsuarios neonButton">
            <div class="detalhesDeUsuarios" v-for="user in users.slice(0, Math.floor(users.length/2))" :key="user.id">
            <router-link class="linkUsuario" :to="'/editarUsuarios/' + user.id">
                <img :src="user.avatar" alt="No Image">
                <p>{{user.first_name}} {{user.last_name}}</p>
                <p>{{ user.email }}</p>
            </router-link>
            </div>
        </div>
        <div v-if="page == 2"  class="listaDeUsuarios neonButton">
            <div class="detalhesDeUsuarios" v-for="user in users.slice(Math.floor(users.length/2), users.length)" :key="user.id">
            <router-link class="linkUsuario" :to="'/editarUsuarios/' + user.id">
                <img :src="user.avatar" alt="No Image">
                <p>{{user.first_name}} {{user.last_name}}</p>
                <p>{{ user.email }}</p>
            </router-link>
            </div>
        </div>
        <div class="neonButton">
            <button @click="listarUsuarios(1)"> 1 </button>
            <button @click="listarUsuarios(2)"> 2 </button>
        </div>
    </div>
</template>

<script src="@/components/listarUsuarios/listarUsuarios.js"></script>

<style scoped>

button {
    background-color: var(--fundo);
    text-align: center;
    position: relative;
    width: 50px;
    min-width: fit-content;
    margin-top: 15px;
    border: solid 1px var(--letras);
    border-radius: 5px;
    box-shadow: var(--letras) 0px 1px 10px;
    color: var(--letras);
    padding: 10px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

button:hover {
    transform: scale(105%);
    cursor: pointer;
    transition: all 200ms ease-in-out;
}

.linkUsuario, .linkUsuario:hover {
    text-decoration: inherit;
    color: inherit;
    cursor: pointer;
}

.neonButton > div:hover {
    transform: scale(105%);
    cursor: pointer;
    transition: all 200ms ease-in-out;
}

img {
    margin-bottom: 10px;
    width: 128px;
    height: 128px;
}


</style>