describe("Initializing application 9", function() {
    it("User can chat into the marketplace chat", function() {
      cy.visit("http://localhost:3000/#/");
      cy.contains("Login/Register").click();
        cy.get('.login-email-input').click().type('p').should('have.value', 'p')
        cy.get('.last-loginregister-input').click().type('z').should('have.value', 'z')
        cy.get('.our-login-button').click();
        cy.url().should("include", "/profile");
        cy.get('.marketplace-chat-message-input').type('hello world').should('have.value', 'hello world').type('{enter}').should('have.value', '');
        cy.get('.each-message').should('exist')

    });
  });
  
  // PASSES