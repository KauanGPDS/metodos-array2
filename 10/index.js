const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]

const numerosPositivos = numeros.filter((numero) => {
    return numero > 0 && numero % 2 == 0
 })
 
 console.log(numerosPositivos)