// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import '@testing-library/cypress/add-commands';

declare global {
  namespace Cypress {
    interface Chainable {
      createFocus: typeof createFocus;
      createSession: typeof createSession;
      deleteFocus: typeof deleteFocus;
    }
  }
}

const createFocus = (name: string) => {
  cy.findByPlaceholderText("enter a focus").type(name);
  cy.findByRole("button", { name: /add/i }).click();
};

const deleteFocus = (name: string) => {
  cy.contains(name)
    .parent()
    .parent()
    .within(() => {
      cy.get("[data-cy=focus-delete-icon]").click().should("not.exist");
    });
};

const createSession = (name: string, focus = "Take Off") => {
  cy.findByPlaceholderText("enter a memo").type(name);
  cy.findByPlaceholderText("select a focus").select(focus);
  cy.findByPlaceholderText("select a spot").select("Beach 1");
  cy.findByRole("button", { name: /add/i }).click();
};

Cypress.Commands.add("createFocus", createFocus);
Cypress.Commands.add("createSession", createSession);
Cypress.Commands.add("deleteFocus", deleteFocus);
