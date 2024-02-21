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
      cy.login('aluno_ebac@teste.com', 'teste@teste.com')
      cy.get('#primary-menu > .menu-item-629 > a').click()
      cy.adicionarProduto('4')
      cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
  });


})