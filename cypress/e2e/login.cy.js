
import userData from '../fixtures/users/userData.json'

describe('orange HRM tests', () => {
  


const selectorsList = {  //fazendo isso abstraimos os dados para ficar mais facil de entender e reutilizar a informação com mais facilidade
  usernameField: "[name='username']", //o atributo pode mudar e desta forma é mais facil manter a automação funcionando
  passwordField: "[name= 'password']",
  loginButton: "[type= 'submit']",
  selectonTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
  dashboardGrid: ".orangehrm-dashboard-grid",
  wrongCredentialAlert: "[role='alert']"
}
 

  it ('login - sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index') 
    cy.get(selectorsList.dashboardGrid)
  })

  it('login - faill', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
})
})

// em cima no login -sucess usamos menos atributos para o codigo ficar mais facil de ser lido e mais facil de achar os atributos
// a melhor forma de encontrar atributos unicos nos elementos é usando um css selector 

// criar um objeto para evitar que alterações no codigo quebre minha automação