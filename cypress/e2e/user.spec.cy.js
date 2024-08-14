
import userData from '../fixtures/users/userData.json'

describe('orange HRM tests', () => {
  


const selectorsList = {  //fazendo isso abstraimos os dados para ficar mais facil de entender e reutilizar a informação com mais facilidade
  usernameField: "[name='username']", //o atributo pode mudar e desta forma é mais facil manter a automação funcionando
  passwordField: "[name= 'password']",
  loginButton: "[type= 'submit']",
  selectonTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
  dashboardGrid: ".orangehrm-dashboard-grid",
  wrongCredentialAlert: "[role='alert']",
  myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
  firstNameField: "[name='firstName']",
  lastNameField: "[name='lastName']",
  genericField: ".oxd-input--active",
  dateField: '[placeholder="yyyy-dd-mm"]',
  dateCloseButton: ".--close",
  submiteButton: "[type= 'submite']",
}
 

  it.only('User info Update - sucess', () => {

    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index') 
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('IdTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriverNumberTest')
    cy.get(selectorsList.genericField).eq(7).clear().type('2024-13-08')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submiteButton).eq(0).click()

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