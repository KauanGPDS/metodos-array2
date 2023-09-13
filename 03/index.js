const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"]

const verificar = palavras.some((palavra) => {
    return palavra == "vodka" || palavra == "cerveja"
})

if(verificar){
    console.log("Possui bebidas proibidas")
}else{
    console.log("Não Possui")
}