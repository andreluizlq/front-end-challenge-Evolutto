const uuid = require("uuid");

const mockApi = (prop) => {
  switch (prop) {
    case "active":
      return Promise.resolve([
        {
          name: "Indira Barros Alvarenga",
          email: "IndiraBarros@gmail.com",
          type: "Feminino",
          id: uuid.v4(),
        },
        {
          name: "Irís Palma Quaresma",
          email: "IrísPalma@gmail.com",
          type: "Feminino",
          id: uuid.v4(),
        },
        {
          name: "Letízia Olivares Castelhano",
          email: "LetíziaOlivares@gmail.com",
          type: "Feminino",
          id: uuid.v4(),
        },
        {
          name: "Nélson Farinha Esparteiro",
          email: "NélsonFarinha@gmail.com",
          type: "Masculino",
          id: uuid.v4(),
        },
        {
          name: "Nikolai Tuna Alvelos",
          email: "NikolaiTuna@gmail.com",
          type: "Feminino",
          id: uuid.v4(),
        },
        {
          name: "Louise Fiães Carromeo",
          email: "LouiseFiães@gmail.com",
          type: "Feminino",
          id: uuid.v4(),
        },
        {
          name: "André Luiz Lima Queiroz",
          email: "AndréLuiz@gmail.com",
          type: "Masculino",
          id: uuid.v4(),
        },
        {
          name: "Alan Carneiro Quinzeiro",
          email: "AlanCarneiro@gmail.com",
          type: "Masculino",
          id: uuid.v4(),
        },
        {
          name: "Emily Aleixo Faleiro",
          email: "EmilyAleixo@gmail.com",
          type: "Feminino",
          id: uuid.v4(),
        },
        {
          name: "Rodrigo Almeida Naves",
          email: "RodrigoAlmeida@gmail.com",
          type: "Masculino",
          id: uuid.v4(),
        },
        {
          name: "Anderson Onofre Vergueiro",
          email: "OnofreVergueiro@gmail.com",
          type: "Masculino",
          id: uuid.v4(),
        },
        {
          name: "Tânia Gaspar Bacelar",
          email: "GasparBacelar@gmail.com",
          type: "Feminino",
          id: uuid.v4(),
        },
        {
          name: "Wesley Salomão Vergueiro",
          email: "RebimbasSalomão@gmail.com",
          type: "Masculino",
          id: uuid.v4(),
        },
        {
          name: "Almeida Neces Amarante",
          email: "RebimbasSalomão@gmail.com",
          type: "Masculino",
          id: uuid.v4(),
        },
      ]);
    case "disabled":
      return Promise.resolve([
        {
          name: "Irene Barcelos Gomide",
          email: "IreneBarcelos@gmail.com",
          type: "Feminino",
          id: uuid.v4(),
        },
        {
          name: "Prince Corte-Real Rebimbas",
          email: "PrinceCorteReal@gmail.com",
          type: "Masculino",
          id: uuid.v4(),
        },
        {
          name: "Sarai Salomão Moreira",
          email: "SaraiSalomão@gmail.com",
          type: "Feminino",
          id: uuid.v4(),
        },
        {
          name: "Gelson Curvelo Ornela",
          email: "GelsonCurvelo@gmail.com",
          type: "Masculino",
          id: uuid.v4(),
        },
        {
          name: "Rebimbas Salomão Amarante",
          email: "RebimbasSalomão@gmail.com",
          type: "Masculino",
          id: uuid.v4(),
        },
      ]);
    default:
      return Promise.resolve();
  }
};

export default mockApi;
