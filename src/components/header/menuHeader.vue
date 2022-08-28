<template id="menuHeaderContainer">
    <header>
        <div>
            <router-link class="links" to="/"> Listar usuarios </router-link>
            <router-link class="links" to="/cadastrarUsuarios"> Cadastrar usuarios</router-link >
        </div>
    </header>
    </template>
<script src="@/components/header/menuHeader.js"></script>
<style scoped>
    
:root {
    --cabecalho: #004346;
    --fundo: #172a3a;
    --letras: #09bc8a;
    --opacidade: 0
}

header {
    background-color: var(--cabecalho);
    padding: 20px;
    box-shadow: #09bc8a 0px 1px 20px;
    margin-bottom: 30px;
}

.links {
    color: var(--letras);
    background-color: transparent;
    padding: 5px 10px 5px 10px;
    font-weight: bold;
    border-radius: 5px;
    box-shadow: 0px 0px 1em 0 hsla(187, 29%, 44%, 1);
    border: solid 2px #09bc8a;
    transform: translateY(-20%);
    position: relative;
    text-decoration: none;
    text-align: center;
}

header > div {
    display: flex;
    list-style: none;
    gap: 5px;
    flex-basis: 1;
    flex-grow: 1;
    justify-content: space-evenly;
    place-items: center;
    padding-top: 5px;
    padding-bottom: 5px;
}

.links:hover {
    text-shadow: 0px 0px 3em #508991;
    box-shadow: 0px 0px 30px 0px #508991;
    background-color: #09bc8a;
    color: #172a3a;
    transition: all 350ms ease-in-out ;
    position: relative;
}

.links::after {
    content: '';
    background-color: var(--letras);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateY(90%) perspective(1em) rotateX(40deg) scale(1, 0.30);
    filter: blur(1em);
    transition: filter 350ms ease-in-out;
    opacity: var(--opacidade);
}

.router-link-exact-active {
    background-color: var(--letras);
    color: black;
}

.router-link-exact-active::after {
    content: '';
    background-color: var(--letras);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateY(90%) perspective(1em) rotateX(40deg) scale(1, 0.30);
    filter: blur(1em);
    opacity: 1;
}

.links:hover::after {
    opacity: 1;
    transition: all 1s ease;
}

</style>