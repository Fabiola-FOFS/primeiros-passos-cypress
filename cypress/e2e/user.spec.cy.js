
import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage  from '../pages/menuPage.js'
import myInfoPage from '../pages/myInfoPages.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const MyInfoPage = new myInfoPage()

describe('orange HRM tests', () => {
  
const selectorsList = {  //fazendo isso abstraimos os dados para ficar mais facil de entender e reutilizar a informação com mais facilidade
  
}

  it.only('User info Update - sucess', () => {
   loginPage.accessLoginPage()
   loginPage.loginWhitUser(userData.userSuccess.username, userData.userSuccess.password)
   dashboardPage.checkDashboardPage()
   menuPage.accessMyInfo()
   MyInfoPage.fillPersonalDetails('firstName', 'lastName')
   MyInfoPage.fillEmployeeDetails('employid', 'OtherID', '123456', '2024-09-20' )
   MyInfoPage.fillStatus("oxd-select-text--arrow", ".oxd-select-dropdown > :nth-child(27)",".oxd-select-dropdown > :nth-child(3)")
   MyInfoPage.saveForm()

   
   
    
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