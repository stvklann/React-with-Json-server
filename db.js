module.exports = () => {
  const data = { users: [], products: [] };
  const names = [
    "Ana",
    "Alice",
    "Barbara",
    "Carlos",
    "Danilo",
    "Eduardo",
    "Fabio",
    // "Giovana",
    // "Heitor",
    // "Igor",
    // "Joao",
    // "Kelvin",
    // "Larissa",
    // "Miguel",
    // "Nathan",
    // "Otávio",
    // "Paula",
  ];
  const surnames = [
    "Silva",
    "Guimaraes",
    "Conceicao",
    "Junior",
    "Fernandes",
    "Santos",
    "Oliveira",
    // "Souza",
    // "Rodrigues",
    // "Ferreira",
    // "Alves",
    // "Mendes",
    // "Cervelin",
    // "Neto",
    // "de Abreu",
    // "Filho",
    // "Pereira",
  ];

  const generatePhoneNumber = () => {
    const randomDigit = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const areaCode = `${randomDigit(1, 9)}${randomDigit(0, 9)}`;
    const firstDigits = `${randomDigit(0, 9)}${randomDigit(0, 9)}${randomDigit(
      0,
      9
    )}${randomDigit(0, 9)}`;
    const lastDigits = `${randomDigit(0, 9)}${randomDigit(0, 9)}${randomDigit(
      0,
      9
    )}${randomDigit(0, 9)}`;

    return `(${areaCode}) ${firstDigits}-${lastDigits}`;
  };

  // Create users
  for (let i = 0; i < names.length; i++) {
    data.users.push({
      id: i,
      name: names[i] + " " + surnames[i],
      email: (names[i] + "." + surnames[i] + "@gmail.com").toLocaleLowerCase(),
      phone: generatePhoneNumber(),
      isAdmin: Math.floor(Math.random() * 10) > 7,
    });
  }

  // Create products
  for (let i = 0; i < 15; i++) {
    data.products.push({ id: i, name: `Product ${i}` });
  }
  return data;
};
