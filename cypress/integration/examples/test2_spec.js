describe("Initializing application 2", function() {
    it("It should go to login/register field and type username and password", function() {
      cy.visit("http://localhost:3000/#/");
      cy.contains("Login/Register").click();
        cy.get('.login-email-input').click().type('p').should('have.value', 'p')
        cy.get('.last-loginregister-input').click().type('z').should('have.value', 'z')

    });
  });
  
  // PASSES