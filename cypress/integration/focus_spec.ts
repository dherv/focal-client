describe("Focus", () => {
  beforeEach(() => {
    cy.visit("/focuses");
  });

  it("should display the existing focus", () => {
    cy.contains("Take Off");
  });

  it("should add a focus to the list", () => {
    cy.createFocus("new focus");
    cy.contains("new focus")
      .parent()
      .within(() => {
        cy.get("[data-cy=focus-clock-icon]").should("exist");
      });
  });

  it("should update a focus", () => {
    cy.createFocus("new focus");
    cy.contains("new focus")
      .click()
      .parent()
      .within(() => {
        cy.get("[data-cy=focus-check-icon]").should("exist");
      });
  });

  it("should delete a focus", () => {
    cy.createFocus("new focus");
    cy.deleteFocus("new focus");
  });
});

export {};
