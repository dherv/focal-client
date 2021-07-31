describe("Sessions", () => {
  beforeEach(() => cy.visit("/sessions"));
  it("should fetch the sessions", () => {
    cy.contains("Good Session");
  });
  it("should add a session to the list", () => {
    cy.createSession("new session");
    cy.get("ul").findByText("new session").should("exist");
    cy.get("ul")
      .findAllByText(/Take Off/i)
      .should("exist");
    cy.get("ul").findAllByText("Beach 1").should("exist");
  });

  // it("should remove focus from session", () => {
  //   cy.createSession("new session");
  //   cy.get("ul").findByText("new session").should("exist");
  //   cy.get("ul")
  //     .findAllByText(/Take Off/i)
  //     .should("exist");
  //   cy.get("ul").findAllByText("Beach 1").should("exist");
  // });
});

export {};
