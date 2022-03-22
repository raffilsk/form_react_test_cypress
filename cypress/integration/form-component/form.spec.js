describe('Forms user interface', () => {
  it('Deve carregar a página', () => {
      cy.visit('/')
   })

   it('Deve verificar quando o titulo do h1 estiver correto', () => {
      cy.visit('/')

      cy.get('h1')
      .should('contain','Teste de formulário com Cypress')
   })

   it('Deve verificar se todos os inputs contém placeholder preenchido', () => {
      cy.visit('/')

      cy.get('[data-cy=name]')
      .should('have.attr', 'placeholder', 'Nome')

      cy.get('[data-cy=cpf]')
      .should('have.attr', 'placeholder', 'Insira seu CPF')

      cy.get('[data-cy=email]')
      .should('have.attr', 'placeholder', 'Email')

      cy.get('[data-cy=password]')
      .should('have.attr', 'placeholder', 'Senha')   
   })

   it("Deve preencher o formulário, dar um submit e receber uma resposta", () =>{
      cy.visit('/')

      cy.get('[data-cy=name]')
      .type('Rafael')      

      cy.get('[data-cy=cpf]')
      .type(99988877766)      

      cy.get('[data-cy=email]')
      .type('myemail@mail.com.br')      

      cy.get('[data-cy=password]')
      .type('123deoliveira4')

      cy.get('[data-cy=submit]').click()

      cy.get('[data-cy=table-tr-response]')
      .should('to.have.length', 1)

      cy.contains('Rafael')
      .should('to.have.length', 1)
      
   })
})