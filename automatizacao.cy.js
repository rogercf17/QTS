describe('testes em 4 etapas', () => {
  it('Acessa o Google', () => {
    cy.visit('https://www.google.com.br');
  });

  it('Pesquisando o UOL', () => {

    cy.get('input[title="Pesquisar"]')

        .type('uol')
        .type('{enter}');

        cy.contains('Economia').click();

  });

  it('Faz Login', () => {

    cy.contains('ENTRE', { timeout: 15000 }).click();

    cy.get('input[type="email"]')
      .type('localiza.assaltos@gmail.com');

    cy.get('input[type="password"]')
      .type('127Vasco');

    cy.get('#button-submit').click();

  })

  it('Acessa notícias de economia', () => {
    cy.contains('span', 'Economia').click()
   });

});