<template id="editarUsuarios"> 
    <div id="editarUsuariosContainer">
        <form action="">
            <label for="">
                <span>ID:</span>
                <input type="text" name="" id="" v-model="usuario.id" disabled>
            </label>
            <label for="">
                <span> Primeiro Nome:</span> 
                <input type="text" name="" id="" v-model="novoUsuario.first_name" required>
            </label>
            <label for="">
                <span> Segundo Nome:</span> 
                <input type="text" name="" id="" v-model="usuario.last_name" required>
            </label>
            <label for="">
                <span>Cargo:</span> 
                <input type="text" v-model="usuario.job" required>
            </label>
            <label for="">
                <span>Avatar:</span>
                <input type="text" name="" id="" v-model="usuario.avatar">
            </label>
            <label for="">
                <span>E-mail: </span>
                <input type="email" v-model="usuario.email">
            </label>
            <div class="submitButtons">
                <input id="salvarAlteracoes" @click="salvarAlteracoes()" type="submit" value="Salvar alterações">
                <input id="excluirUsuario" @click="deletarUsuario()" type="submit" name="" value="Excluir usuario">
            </div>
        </form>
    </div>
</template>

<style scoped>
:root {
    --cabecalho: #004346;
    --fundo: #172a3a;
    --letras: #09bc8a;
    --opacidade: 0
}

#editarUsuariosContainer form {
    display: flex;
    gap: 10px;
    flex-direction: column;
    color: var(--letras);
    place-items: center;
    font-weight: bold;
    text-align: center;
}

#editarUsuariosContainer form span {
    display: block;
}

#editarUsuariosContainer form label input {
    width: fit-content;
    background-color: var(--cabecalho);
    border: solid 1px var(--letras);
    border-radius: 5px;
    margin-top: 7px;
    color: var(--letras);
    text-align: center;
    font-weight: bold;
}

#editarUsuariosContainer form :not(input[type="submit"]):focus {
    box-shadow: 0px 1px 20px var(--letras);
    outline: none;
    transition: 300ms all ease;
}

.submitButtons {
    display: flex;
    gap: 10px;
    margin-top: 10px;
}

#excluirUsuario {
    padding: 5px 15px 5px 15px;
    background-color: transparent;
    border-radius: 5px;
    border: solid 1px rgb(220, 108, 108);
    font-weight: bold;
    color: rgb(220, 108, 108);
    width: fit-content;
}

#excluirUsuario:hover {
    background-color: red;
    color: black;
    transition: all 300ms ease;
}

#salvarAlteracoes {
    padding: 5px 15px 5px 15px;
    background-color: transparent;
    border-radius: 5px;
    border: solid 1px var(--letras);
    font-weight: bold;
    color: var(--letras);
    width: fit-content;

}

#salvarAlteracoes:hover {
    background-color: var(--letras);
    color: black;
    transition: all 300ms ease-in-out;
}
</style>

<script src="@/components/editarUsuarios/EditarUsuarios.js"></script>