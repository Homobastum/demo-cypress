import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// Scenario: Being able to operate the menu
Given("The user is on the index page", () => {
  cy.visit("/");
});

When("He click on the differents items", () => {});

Then("He should see the associated pages", () => {
  cy.fixture("routes").then((routes) => {
    let contains = "";

    // Vérifier l'item "Home"
    contains = "Home";
    cy.get("nav app-menu-item a").contains(contains).click();
    cy.url().should("include", routes.home);

    // Vérifier l'item "HTML"
    contains = "HTML";
    cy.get("nav app-menu-item a").contains(contains).click();

    // Vérifier l'item "CSS"
    contains = "CSS";
    cy.get("nav app-menu-item a").contains(contains).click();

    // Vérifier le contenu de l'item "JS"
    contains = "JS";
    cy.get("nav app-menu-item a").contains(contains).click();
  });
});
