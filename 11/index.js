const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
  ];

  const nomeComA = nomes.filter((nome) => {
    return nome.charAt(0) == 'A' || nome.charAt(0) == 'a'
  })

  console.log(nomeComA)