<template>
  <div id="app">
    <menuHeader/>
    <router-view></router-view>
  </div>
</template>

<script>
import menuHeader from './components/header/menuHeader.vue';


export default {
  name: 'App',
  components: {
    menuHeader
},

}
</script>

<style>
:root {
    --cabecalho: #004346;
    --fundo: #172a3a;
    --letras: #09bc8a;
    --opacidade: 0
}

#app, html {
    background-color: var(--fundo);
    height: 100%;
}

.neonButton {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.neonButton div {
    text-align: center;
    position: relative;
    width: 300px;
    min-width: fit-content;
    border: solid 1px var(--letras);
    border-radius: 5px;
    box-shadow: var(--letras) 0px 1px 10px;
    color: var(--letras);
    padding: 10px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
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
