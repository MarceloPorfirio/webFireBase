//definindo referencias para elementos da pagina (manipulação de arquivos)

var authForm = document.getElementById('authForm')
var authFormTitle = document.getElementById('authFormTitle')

var register = document.getElementById('register')
var access = document.getElementById('access')

var loading = document.getElementById('loading')

var auth = document.getElementById('auth')
var userContent = document.getElementById('userContent')

var userEmail = document.getElementById('userEmail')

var sendEmailVerificationDiv = document.getElementById('sendEmailVerificationDiv')
var emailVerified = document.getElementById('emailVerified')



// Alterar o formulário de autenticação para o cadastro de novas contas
function toggleToRegister(){
    authForm.submitAuthForm.innerHTML = 'Cadastrar Conta'
    authFormTitle.innerHTML = 'Insira seus dados para se cadastrar'
    hideItem(register)
    showItem(access)
}
// Alterar o formulário para o acesso de contas já existentes
function toggleToAccess(){
    authForm.submitAuthForm.innerHTML = 'Acessar'
    authFormTitle.innerHTML = 'Acesse sua conta para continuar'
    hideItem(access)
    showItem(register)
}
// Simplifica a exibição de elementos da página
function showItem(element){
    element.style.display = 'block'
}
// Simplifica a remoção de elementos da página
function hideItem(element){
    element.style.display = 'none'
}

//função destinada para mostrar conteudo para usuários autenticados
function showUserContent(user){
    console.log(user)
    if (user.emailVerified){
        emailVerified.innerHTML = 'E-mail verificado'
        hideItem(sendEmailVerificationDiv)
    } else {
        emailVerified.innerHTML = 'E-mail não verificado'
        showItem(sendEmailVerificationDiv)
    }
    userEmail.innerHTML = user.email
    hideItem(auth)
    showItem(userContent)
}

//função destinada para usuários não autenticados, já limpando os campos de email e senha
function showAuth(){ 
    authForm.email.value = ''
    authForm.password.value = ''
    hideItem(userContent)
    showItem(auth)
}

