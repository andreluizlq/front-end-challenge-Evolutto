const mockApi = (prop) => {
  switch (prop) {
    case "active":
      return Promise.resolve([
        {
          name: "Brad Simmons",
          email: "BRAD@EMAIL.COM",
          type: "Masculino",
        },
        {
          name: "Brad Simmons",
          email: "BRAD@EMAIL.COM",
          type: "Masculino",
        },
        {
          name: "Brad Simmons",
          email: "BRAD@EMAIL.COM",
          type: "Masculino",
        },
        {
          name: "Brad Simmons",
          email: "BRAD@EMAIL.COM",
          type: "Masculino",
        },
      ]);
    case "disabled":
      return Promise.resolve([
        {
          name: "André Luiz Lima Queiroz",
          email: "BRAD@EMAIL.COM",
          type: "Feminino",
        },
        {
          name: "André Luiz Lima Queiroz",
          email: "BRAD@EMAIL.COM",
          type: "Feminino",
        },
        {
          name: "André Luiz Lima Queiroz",
          email: "BRAD@EMAIL.COM",
          type: "Feminino",
        },
        {
          name: "André Luiz Lima Queiroz",
          email: "BRAD@EMAIL.COM",
          type: "Feminino",
        },
        {
          name: "André Luiz Lima Queiroz",
          email: "BRAD@EMAIL.COM",
          type: "FemininoF",
        },
      ]);
    default:
      return Promise.resolve();
  }
};

export default mockApi;
