const mockApi = (prop) => {
  switch (prop) {
    case "active":
      return Promise.resolve([
        {
          name: "Indira Barros Alvarenga",
          email: "IndiraBarros@gmail.com",
          type: "Feminino",
        },
        {
          name: "Irís Palma Quaresma",
          email: "IrísPalma@gmail.com",
          type: "Feminino",
        },
        {
          name: "Letízia Olivares Castelhano",
          email: "LetíziaOlivares@gmail.com",
          type: "Feminino",
        },
        {
          name: "Nélson Farinha Esparteiro",
          email: "NélsonFarinha@gmail.com",
          type: "Masculino",
        },
        {
          name: "Nikolai Tuna Alvelos",
          email: "NikolaiTuna@gmail.com",
          type: "Feminino",
        },
        {
          name: "Louise Fiães Carromeo",
          email: "LouiseFiães@gmail.com",
          type: "Feminino",
        },
        {
          name: "André Luiz Lima Queiroz",
          email: "AndréLuiz@gmail.com",
          type: "Masculino",
        },
        {
          name: "Alan Carneiro Quinzeiro",
          email: "AlanCarneiro@gmail.com",
          type: "Masculino",
        },
        {
          name: "Emily Aleixo Faleiro",
          email: "EmilyAleixo@gmail.com",
          type: "Feminino",
        },
        {
          name: "Rodrigo Almeida Naves",
          email: "RodrigoAlmeida@gmail.com",
          type: "Masculino",
        },
        {
          name: "Anderson Onofre Vergueiro",
          email: "OnofreVergueiro@gmail.com",
          type: "Masculino",
        },
        {
          name: "Tânia Gaspar Bacelar",
          email: "GasparBacelar@gmail.com",
          type: "Feminino",
        },
        {
          name: "Wesley Salomão Vergueiro",
          email: "RebimbasSalomão@gmail.com",
          type: "Masculino",
        },
        {
          name: "Almeida Neces Amarante",
          email: "RebimbasSalomão@gmail.com",
          type: "Masculino",
        },
      ]);
    case "disabled":
      return Promise.resolve([
        {
          name: "Irene Barcelos Gomide",
          email: "IreneBarcelos@gmail.com",
          type: "Feminino",
        },
        {
          name: "Prince Corte-Real Rebimbas",
          email: "PrinceCorteReal@gmail.com",
          type: "Masculino",
        },
        {
          name: "Sarai Salomão Moreira",
          email: "SaraiSalomão@gmail.com",
          type: "Feminino",
        },
        {
          name: "Gelson Curvelo Ornela",
          email: "GelsonCurvelo@gmail.com",
          type: "Masculino",
        },
        {
          name: "Rebimbas Salomão Amarante",
          email: "RebimbasSalomão@gmail.com",
          type: "Masculino",
        },
      ]);
    default:
      return Promise.resolve();
  }
};

export default mockApi;
