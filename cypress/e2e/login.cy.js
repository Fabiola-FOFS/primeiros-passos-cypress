describe('orange HRM tests', () => {
  
  /*it/*.skip/*para pular('login - sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']")/*caminho muito longo, procurar uma forma mais limpa e rapida :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input/.type('Admin') // simplificando e usando um seletor menor é mais facil lembrar depois o que é e alguém trabalhando cmg vai saber com mais facilidade tbm 
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
})*/
const selectorsList = {
  usernameField: "[name='username']", //o atributo pode mudar e desta forma é mais facil manter a automação funcionando
  passwordField: "[name= 'password']",
  loginButton: "[type= 'submit']",
  selectonTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
  wrongCredentialAlert: "[role='alert']"
}
  it ('login - sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index') 
    cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard')
  })

  it('login - faill', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('test')
    cy.get(selectorsList.passwordField).type('test')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
})
})

// em cima no login -sucess usamos menos atributos para o codigo ficar mais facil de ser lido e mais facil de achar os atributos
// a melhor forma de encontrar atributos unicos nos elementos é usando um css selector 

// criar um objeto para evitar que alterações no codigo quebre minha automação