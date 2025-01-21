import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("visit url", function () {
  cy.visit("https://www.google.com");
  cy.get("#W0wltc > .QS5gu").click();
});

Then("verify title", function () {
  cy.title().should("contain", "Google");
  cy.wait(2000);
  cy.get("#gbqfbb").click();
});
