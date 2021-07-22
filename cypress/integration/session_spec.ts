describe("Sessions", () => {
  beforeEach(() => cy.visit("/sessions"));
  it("should fetch the sessions", () => {
    cy.contains("Good session");
  });
  it("should add a session to the list", () => {
    cy.findByPlaceholderText("enter a memo").type("new session");
    cy.findByPlaceholderText("select a focus").select("Take Off");
    cy.findByPlaceholderText("select a spot").select("Beach 1");
    cy.findByRole("button", { name: /add/i }).click();
    cy.get("ul").findByText("new session").should("exist");
    cy.get("ul")
      .findAllByText(/Take Off/i)
      .should("exist");
    cy.get("ul").findAllByText("Beach 1").should("exist");
  });
});

export {};
