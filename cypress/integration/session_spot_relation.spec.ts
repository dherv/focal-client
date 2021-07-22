describe("Session Spot relation", () => {
  beforeEach(() => cy.visit("/sessions"));
  //TODO: add test once relation done
  it.skip("should remove focus from session", () => {
    cy.createSession("new session");
    cy.get("ul").findByText("new session").should("exist");
    cy.get("ul")
      .findAllByText(/Take Off/i)
      .should("exist");

    cy.get(`[href="/spots"]`).click();
    cy.deleteFocus("Take Off");

    cy.get(`[href="/sessions"]`).click();
    cy.contains("new session").within(() => {
      cy.findAllByText(/Take Off/i).should("not.exist");
    });
  });
});

export {};
