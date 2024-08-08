describe('orange HRM tests', () => {
  it/*.skip/*para pular*/('login - sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']")/*caminho muito longo, procurar uma forma mais limpa e rapida :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input*/.type('Admin') // simplificando e usando um seletor menor é mais facil lembrar depois o que é e alguém trabalhando cmg vai saber com mais facilidade tbm 
    cy.get("[name='password']").type('admin123')
    cy.get('.oxd-button').click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index') //ter certeza que está no lugar certo
    cy.get('.oxd-topbar-header-breadcrumb-module') //verificar se esta palavra está na pagina que estamos explorando
  })
  it('login - faill', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('test')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('test')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content')
})
})

// em cima no login -secess usamos menos atributos para o codigo ficar mais facil de ser lido e mais facil de achar os atributos
// a melhor forma de encontrar atributos unicos nos elementos é usando um css selector 