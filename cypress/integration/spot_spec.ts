// import cy from 'cypress';

describe("Spots", () => {
  it("should display the spots", () => {
    cy.visit("/spots");
    cy.contains("Beach");
  });
});

export {};
