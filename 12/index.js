const pessoas = [
    {
      nome: "Antonio",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Maria",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Ana",
      idade: 21,
      profissao: "Programador",
    },
    {
      nome: "Beatriz",
      idade: 20,
      profissao: "Programador",
    },
    {
      nome: "José",
      idade: 32,
      profissao: "Jornalista",
    },
    {
      nome: "Marcos",
      idade: 30,
      profissao: "Programador",
    },
  ];

  const encontrarProgramadores = pessoas.filter((p) => {
    return p.profissao == "Programador" || p.profissao == "Progamadora"
  })

  const maioresDe20 = encontrarProgramadores.filter((p) => {
    return p.idade >= 20
  })

  console.log(maioresDe20)