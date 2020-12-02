import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// Scenario: Visiter le site HTML Templates
Given("Je suis sur la page d'accueil", () => {
  cy.visit("/");
});

When("Je clique sur le lien du site HTML5 Templates", () => {
  cy.get("footer p a").contains("HTML5 Templates").click();
});

Then("Je suis redirigé vers la page d'accueil du site HTML5 Templates", () => {
  cy.url().should("include", "/");
});
