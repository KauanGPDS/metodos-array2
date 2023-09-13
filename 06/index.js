const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const resultado8 = cidades.filter((cidade) =>{
    return cidade.length >= 7
})

console.log(resultado8)