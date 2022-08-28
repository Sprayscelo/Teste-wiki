<template id="cadastrarUsuarios"> 
    <div id="cadastrarUsuariosContainer">
        asfsdfsfsfsdfsdfds
        <form action="">
            <label for="">
                <span> Primeiro Nome:</span> 
                <input type="text" name="" id="" v-model="users.first_name" required>
            </label>
            <label for="">
                <span> Segundo Nome:</span> 
                <input type="text" name="" id="" v-model="users.last_name" required>
            </label>
            <label for="">
                <span>Cargo:</span> 
                <input type="text" v-model="users.job" required>
            </label>
            <label for="">
                <span>Avatar:</span>
                <input type="text" name="" id="" v-model="users.avatar">
            </label>
            <label for="">
                <span>E-mail: </span>
                <input type="email" v-model="users.email">
            </label>
            <input @click="cadastrarUsuarios()" type="submit" value="Cadastrar">
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

#cadastrarUsuariosContainer form {
    display: flex;
    gap: 10px;
    flex-direction: column;
    color: var(--letras);
    place-items: center;
    font-weight: bold;
    text-align: center;
}

#cadastrarUsuariosContainer form span {
    display: block;
}

#cadastrarUsuariosContainer form input {
    width: fit-content;
    background-color: var(--cabecalho);
    border: solid 1px var(--letras);
    border-radius: 5px;
    margin-top: 7px;
    color: var(--letras);
    text-align: center;
    font-weight: bold;
}

#cadastrarUsuariosContainer form :not(input[type="submit"]):focus {
    box-shadow: 0px 1px 20px var(--letras);
    outline: none;
    transition: 300ms all ease;
}

#cadastrarUsuariosContainer form input[type="submit"] {
    padding: 5px 15px 5px 15px;
    background-color: transparent;
    border-radius: 5px;
    border: solid 1px var(--letras);
    font-weight: bold;
    color: var(--letras);
    width: fit-content;
}

#cadastrarUsuariosContainer form input[type="submit"]:hover {
    background-color: var(--letras);
    color: black;
    transition: all 300ms ease-in-out;
}

</style>

<script src="@/components/cadastrarUsuarios/cadastrarUsuarios.js"></script>