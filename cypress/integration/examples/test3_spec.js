describe("Initializing application 3", function() {
    it("It should go to login/register field and type username and password and login", function() {
      cy.visit("http://localhost:3000/#/");
      cy.contains("Login/Register").click();
        cy.get('.login-email-input').click().type('p').should('have.value', 'p')
        cy.get('.last-loginregister-input').click().type('z').should('have.value', 'z')
        cy.get('.our-login-button').click();
        cy.url().should("include", "/profile");
        cy.get('.welcome-sign').should('exist')
    });
  });
  
  // PASSES