const nome = 'João'

if (nome == 'Taís'){
     console.log('Condição atendida')
} else {
     console.log('Condição não atendida')
}

let idade = 17 

if (idade >=18){
     console.log('Você é maior de idade!')


} else {
     console.log('Você é menor de idade!')
}

let numero = 2

if(numero % 2 === 0){
     console.log('Esse número é Par!')
     
} else {
     console.log('Esse número é impar!')
}

let nota= 5

if(nota >= 7){
     console.log('Aprovado!!')

} else {
     console.log('Reprovado!!')
}


let usuario= 'admin'
let senha= 'taissantos'

let usuarioCorreto= 'admin'
let senhaCorreta= 'taissantos'


if(usuario == usuarioCorreto && senha == senhaCorreta){
     console.log('Login realizado com Sucesso!')

} else {
     console.log('Login incorreto!')
}
