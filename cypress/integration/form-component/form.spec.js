describe('Forms user interface', () => {
   it('Deve carregar a página', () => {
      cy.visit('/')
   })

   it('Deve retornar * true * quando o componente titulo estiver correto', () => {
      cy.visit('/')

      cy.get('h1')
      .should('contain','Teste de formulário com Cypress')
   })

   it('Deve conter * placeholder * com o valor * Nome *', () => {
      cy.visit('/')

      cy.get('input[placeholder=Nome]')
      .type('Rafael')
   })

   it('Deve conter * placeholder * com o valor * Sobrenome *', () => {
      cy.visit('/')

      cy.get('input[placeholder=Sobrenome]')
      .type('Marzitelli')
   })

   it('Deve conter * placeholder * com o valor * Cidade *', () => {
      cy.visit('/')

      cy.get('input[placeholder=Cidade]')
      .type('São Paulo')
   })

   it('Deve ser do tipo número e conter * placeholder * com o valor * Insira seu CPF *', () => {
      cy.visit('/')

      cy.get('input[type=number]')
      .should('have.attr', 'placeholder', 'Insira seu CPF')
   })
})