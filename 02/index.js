const palavras = ["livro", "caneta", "sol", "carro", "orelha"]

const resultado = palavras.find((palavra) => {
      return palavra.length >= 5
})

if(resultado){
    console.log("Existe")
}else{
    console.log("Não existe")
}
