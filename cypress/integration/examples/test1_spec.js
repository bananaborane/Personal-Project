describe("Initializing application", function() {
  it("It should go to login/register field", function() {
    cy.visit("http://localhost:3000/#/");
    cy.contains("Login/Register").click();
    cy.url().should("include", "/loginregister");
  });
});

// PASSES
