Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('adicionarProduto', (quantidade) => {
    cy.get('.product-block').first().click()
    cy.wait(3000)  
    cy.get('.button-variable-item-S').click()
    cy.get('.button-variable-item-Green').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message > .button').click()
    cy.get('.checkout-button').click()
    cy.get('#payment_method_cod').click()
    cy.get('#terms').click()
    cy.get('#place_order').click()
    
})
