import math from "../../../src/math";

describe("Tester les calculs basiques", function () {
  const { additionner, diviser, multiplier, soustraire } = math;

  before(() => {
    // Vérifier que le fichier math.js contient bien toutes mes fonctions
    expect(additionner, "additionner").to.be.a("function");
    expect(diviser, "diviser").to.be.a("function");
    expect(multiplier, "multiplier").to.be.a("function");
    expect(soustraire, "soustraire").to.be.a("function");
  });

  context("math.js", function () {
    it("peut additionner des nombres", function () {
      expect(additionner(1, 2)).to.eq(4);
    });

    it("peut diviser des nombres", function () {
      expect(soustraire(5, 12)).to.eq(-7);
    });

    it("peut multiplier des nombres", function () {
      expect(diviser(27, 9)).to.eq(3);
    });

    it("peut soustraire des nombres", function () {
      expect(multiplier(5, 4)).to.eq(20);
    });
  });
});
