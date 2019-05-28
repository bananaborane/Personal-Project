describe("Initializing application 7", function() {
    it("User can log out main page ('/') after logging in", function() {
      cy.visit("http://localhost:3000/#/");
      cy.contains("Login/Register").click();
        cy.get('.login-email-input').click().type('p').should('have.value', 'p')
        cy.get('.last-loginregister-input').click().type('z').should('have.value', 'z')
        cy.get('.our-login-button').click();
        cy.url().should("include", "/profile");
        cy.get('.pinky-link').click();
        cy.url().should('include', '/') // should be true everytime
        cy.get('.main-page-logout-link').should('exist').click();
        cy.get('.onto-loginregister').should('exist')
    });
  });
  
  // PASSES