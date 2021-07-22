describe("Authentication", () => {
  it("Login and Logout flow", () => {
    cy.visit(`/auth`);

    const emailInput = cy.findByLabelText("email");
    emailInput.type("dherv@gmail.com");

    const password = cy.findByLabelText("password");
    password.type("password");

    cy.contains("button", "login")
      .click()
      .should(() => {
        expect(localStorage.getItem("token")).to.eq(
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYyNDU4MTMzOX0.XG1eB2W_DVhXkMLKuCDWcXK4dX_Fwi1DC-hexVKX87M"
        );
      });

    cy.url().should("be.equal", `${Cypress.config("baseUrl")}/`);

    cy.contains("logout")
      .click()
      .should(() => {
        expect(localStorage.getItem("token")).to.be.null as any;
      });

    cy.url().should("be.equal", `${Cypress.config("baseUrl")}/auth`);
  });

  it("signup flow", () => {
    cy.visit(`/auth`);
    cy.contains("need an account").click();

    const nameInput = cy.findByLabelText("name");
    nameInput.type("damien");

    const emailInput = cy.findByLabelText("email");
    emailInput.type("dherv@gmail.com");

    const password = cy.findByLabelText("password");
    password.type("password");

    cy.contains("button", "signup")
      .click()
      .should(() => {
        expect(localStorage.getItem("token")).to.eq(
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTYyNDU4MTMxMX0.f3aC_mxlAZjEd2eq0RQdy27bNbcA8Ggn-xV-jmpeoyA"
        );
      });

    cy.url().should("be.equal", `${Cypress.config("baseUrl")}/`);

    cy.contains("logout")
      .click()
      .should(() => {
        expect(localStorage.getItem("token")).to.be.null as any;
      });

    cy.url().should("be.equal", `${Cypress.config("baseUrl")}/auth`);
  });
});

export {};
