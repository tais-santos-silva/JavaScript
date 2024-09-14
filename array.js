const paises = ['Brasil','Argentina', 'Alemanha']
console.log('Acessando o País ' + paises[1])

// índice 0,1,2
if (paises >= [3])
console.log('Não encontrado')

console.log('Tamanho do array: ', paises.length)

paises.push ('USA')
paises.pop()// remove último elemento
paises.unshift('França')
paises.shift() // remove a primeira prosição

console.log (paises)