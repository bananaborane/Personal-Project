describe("Initializing application 10", function() {
    it("User can add an item into cart", function() {
      cy.visit("http://localhost:3000/#/");
      cy.contains("Login/Register").click();
        cy.get('.login-email-input').click().type('p').should('have.value', 'p')
        cy.get('.last-loginregister-input').click().type('z').should('have.value', 'z')
        cy.get('.our-login-button').click();
        cy.url().should("include", "/profile");
        cy.contains('Mens').click();
        cy.url().should('include', '/collections/mens')
        cy.get('.each-product-link').first().click();
        cy.get('.add-to-cart-button').first().click();
        cy.get('.cart-link').should('exist').click();
        cy.get('.the-list-from-cart').should('exist')
        cy.get('.each-display-product').first().should('exist')
    });
  });
  
  // PASSES