import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("go to youtube", function () {
    cy.visit("https://www.youtube.com");
});

Then("verify youtube url", function () {
    cy.title().should("contain", "YouTube");
});