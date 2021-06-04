function  carregar(){
    const botao = document.getElementById('botao_buscar')
    const input_name = document.getElementById('input_usuario')

    botao.onclick = () => {
        const usuario = input_name.value
        const minhaReq = new Request(`https://api.github.com/users/${usuario}`)

        fetch(minhaReq)
            .then(response => response.json())
            .then(dados => {
                const nome = dados.name

                 preencher(dados)
            })

    }
}
function preencher(dados){
    const h2_usuario_nome = document.getElementById('usuario_nome')
    const img_avatar = document.getElementById('avatar')
    const bio_usuario = document.getElementById('bio_user')
    const seguidores_usuario = document.getElementById('seguidores')
    const seguindo_usuario = document.getElementById('seguindo')


    const nome = dados.name
    const url =  dados.avatar_url
    const bio = dados.bio
    const seguir = dados.followers
    const seguindo = dados.following


     h2_usuario_nome.innerText = nome
     img_avatar.src = url
     bio_usuario.innerText = bio
     seguidores_usuario.innerText = seguir
     seguindo_usuario.innerText = seguindo

}
carregar()