import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("I go to the login page", () => {
  cy.visit("http://64.227.123.49/login");
});

When("I enter the data", (dataTable) => {
  cy.get('.user-input').type(dataTable.raw()[1][0]);
  cy.get(".user-password-input").type(dataTable.raw()[1][1]);
});

And("I click the login button", () => {
    cy.get('.submit-button').click();
});

Then("I should be redirected to the manager page", () => {
    cy.url().should("include", "/dashboard");
});