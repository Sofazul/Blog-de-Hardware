//selecionar os itens do menu
var menuItem = document.querySelectorAll('.item-menu')

function selectLink (){
    menuItem.forEach((item)=>
    item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item) =>
    item.addEventListener('click', selectLink)

)
//diminuir e expandir
var btnExp = document.querySelector('#btn-exp')
var menuSite = document.querySelector('.menu-lateral')
var conteudoSite = document.querySelector('#corpo-site')
var divDoConetudoSite = document.querySelector('#div-fundo')
var ItensComponetes = document.querySelectorAll('.itens-componentes')


btnExp.addEventListener('click', function(){
    menuSite.classList.toggle('expandir')
    conteudoSite.classList.toggle('diminuir')
    divDoConetudoSite.classList.toggle('diminuir')
    
    ItensComponetes.forEach(i => i.classList.toggle("diminuir"))
})

menuItem.forEach((item) =>
    item.addEventListener('click', function(){
        menuSite.classList.remove('expandir')
        conteudoSite.classList.toggle('diminuir')
        divDoConetudoSite.classList.toggle('diminuir')
    
        ItensComponetes.forEach(i => i.classList.toggle("diminuir"))
    })
)



//selecionar os itens do menu
var menuItem = document.querySelectorAll('.item-menu')

function selectLink (){
    menuItem.forEach((item)=>
    item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item) =>
    item.addEventListener('click', selectLink)

)

//Feedback
var btnFelizNc = document.querySelector('#feedback-feliz')

var btnNeutroNc = document.querySelector('#feedback-neutro')

var btnTristeNc = document.querySelector('#feedback-triste')

btnFelizNc.addEventListener('click', function(){
    btnFelizNc.classList.toggle('selecionadofb')
    btnNeutroNc.classList.remove('selecionadofb')
    btnTristeNc.classList.remove('selecionadofb')
})

btnNeutroNc.addEventListener('click', function(){
    btnNeutroNc.classList.toggle('selecionadofb')
    btnFelizNc.classList.remove('selecionadofb')
    btnTristeNc.classList.remove('selecionadofb')
})

btnTristeNc.addEventListener('click', function(){
    btnTristeNc.classList.toggle('selecionadofb')
    btnFelizNc.classList.remove('selecionadofb')
    btnNeutroNc.classList.remove('selecionadofb')
})

//Mudar abas
btnHome = document.querySelector('.btn-menu')
btnComponentes = document.querySelector('btn-menu')
btnErros = document.querySelector('btn-menu')
btnEquipe = document.querySelector('btn-menu')