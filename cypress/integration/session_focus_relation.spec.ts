describe("Session Focus relation", () => {
  beforeEach(() => cy.visit("/sessions"));

  it("should remove focus from session", () => {
    cy.createSession("new session");
    cy.get("ul").findByText("new session").should("exist");
    cy.get("ul")
      .findAllByText(/Take Off/i)
      .should("exist");

    cy.get(`[href="/focuses"]`).click();
    cy.deleteFocus("Take Off");

    cy.get(`[href="/sessions"]`).click();
    cy.contains("new session").within(() => {
      cy.findAllByText(/Take Off/i).should("not.exist");
    });
  });

  // the error comes from the mock server which does not know about the new focus
  // graphql should return the new focus in response.
  // skip for now
  it("should add new focus to session", () => {
    cy.visit("/focuses");

    cy.createFocus("new focus");

    cy.get(`[href="/sessions"]`).click();
    cy.createSession("new session", "new focus");
    cy.get("ul").findByText("new session").should("exist");
    cy.get("ul")
      .findAllByText(/new focus/i)
      .should("exist");
  });
});

export {};
