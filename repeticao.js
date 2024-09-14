const nomes= ['Eduardo','Maria',' Fernando','Joao', 'Francisca']

nomes.forEach((nomes, index) => {
    console.log('Execção :' , index + 1)
    console.log('Nome' + nomes)
    console.log('-----------------------------')
});

for (let index = 1; index < nomes.length; index++) {
    // Bloco de código a ser executado em cada iteração
    console.log(nomes[index]);
    console.log(nomes)
    
}