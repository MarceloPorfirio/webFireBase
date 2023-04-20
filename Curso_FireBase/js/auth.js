//função que trata a submissão do formulário de autenticação
authForm.onsubmit = function (event) {
  showItem(loading)
    event.preventDefault()
    if (authForm.submitAuthForm.innerHTML == 'Acessar') {
      firebase.auth().signInWithEmailAndPassword(authForm.email.value, authForm.password.value).catch(function (error) {
        console.log('Falha no acesso')
        console.log(error)
      })
    } else {
      firebase.auth().createUserWithEmailAndPassword(authForm.email.value, authForm.password.value).catch(function (error) {
        console.log('Falha no cadastro')
        console.log(error)
      })
  
    }
  }

//função que centraliza e trata autenticação
  firebase.auth().onAuthStateChanged(function(user){
    hideItem(loading)
    if (user){
        showUserContent(user)
    } else {
        showAuth()
    }
  })

//função para permitir o usuário fazer o logout
function signOut(){
  firebase.auth().signOut().catch(function(error) {
  console.log('Falha ao sair da conta.')
  console.log('error')
})
}