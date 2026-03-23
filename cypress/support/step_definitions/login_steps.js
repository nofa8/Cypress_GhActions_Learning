import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Given("I am on the login page", () => {
 cy.visit("src/index.html");
});
When("I correctly fill {string} with {string}", (field, value) => {
 cy.get(`[data-test-id="login-${field}"]`).type(value);
});
When("I click {string}'s button", (btn) => {
 cy.get(`[data-test-id="login-${btn}"]`).click();
});
Then("I should see this {string} message", (type) => {
 cy.get(`[data-test-id="${type}-message"]`).should("be.visible");
});