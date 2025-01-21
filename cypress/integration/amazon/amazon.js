import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("go", function () {
  cy.visit("https://www.amazon.com")
});

Then("verify amazon url", function () {
  cy.title().should("contain", "Amazon")
});
