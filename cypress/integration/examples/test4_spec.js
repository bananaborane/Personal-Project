describe("Initializing application 4", function() {
    it("Not allow user to access bike marketplace if theyre not logged in", function() {
      cy.visit("http://localhost:3000/#/");
      cy.contains("Marketplace").click();
    cy.get('.marketplace-exclusive').should('have','This place is exclusive. Please sign in/login to continue.')
    });
  });
  
  // PASSES