const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]


const mudaArray = frutas.map((elemento) =>{
   let muda = elemento.charAt(0).toUpperCase
    let count = 0
    return `${count} - ${muda}`
})

console.log(mudaArray)