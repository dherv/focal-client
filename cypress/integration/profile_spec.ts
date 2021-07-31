describe("Profile", () => {
  beforeEach(() => cy.visit("/profile"));
  it("should fetch the user profile name", () => {
    cy.contains("damien");
  });
  it("should fetch the user profile name", () => {
    cy.contains("damien@test.com");
  });
});

export {};
