describe('Sistema de busca google', () => {
    it('E acessa a pagina do google', () => {
        cy.visit('https://www.google.com/')
    })
})

it('E ele digita algo no campo de busca', () => {
    cy.get('input[name=q]').type('Carmago aranha')
})

it('Quando ele clica em pesquisa', () => {
    cy.get('form').submit()
})

it('Quando ele clica em no site', () => {
    cy.contains('a', 'ETEC Professor Camargo Aranha').should('be.visible').click()
})