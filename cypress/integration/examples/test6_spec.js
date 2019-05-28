describe("Initializing application 6", function() {
    it("User should not be allowed to access /profile endpoint while logged out", function() {
      cy.visit("http://localhost:3000/#/");
      cy.visit("http://localhost:3000/#/profile");
    cy.get('.wrong-way-buddy').should('have','Wrong way buddy')
    });
  });
  
  // PASSES