/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      cy.visit('/')
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
      //TODO: Coloque todo o fluxo de teste aqui, considerando as boas práticas e otimizações
      cy.get('.icon-user-unfollow').click()
      cy.get('#username').type('aluno_ebac@teste.com')
      cy.get('#password').type('teste@teste.com')
      cy.get('.woocommerce-form > .button').click()
      cy.get('#primary-menu > .menu-item-629 > a').click()
      cy.get('.product-block').first().click()
      cy.wait(3000)  
      cy.get('.button-variable-item-S').click()
      cy.get('.button-variable-item-Green').click()
      cy.get('.input-text').clear().type('4')
      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()
      cy.get('#payment_method_cod').click()
      cy.get('#terms').click()
      cy.get('#place_order').click()
      cy.get('.page-title').should('exist')
  });


})