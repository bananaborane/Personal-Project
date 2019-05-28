describe("Initializing application 5", function() {
    it("User should toggle between marketplace chat and direct messages upon logging in", function() {
      cy.visit("http://localhost:3000/#/");
      cy.contains("Login/Register").click();
        cy.get('.login-email-input').click().type('p').should('have.value', 'p')
        cy.get('.last-loginregister-input').click().type('z').should('have.value', 'z')
        cy.get('.our-login-button').click();
        // cy.url().should("include", "/profile");
        cy.get('.chat-section').should('have','Marketplace Chat')
        cy.get('.chat-section').should('have','Check Direct Messages')
        cy.get('.marketplace-messaging-toggle-button').click();
        cy.get('.chat-section').should('have','Private Messages')
        cy.get('.chat-section').should('have','Check Marketplace Chat')
    });
  });
  
  // PASSES