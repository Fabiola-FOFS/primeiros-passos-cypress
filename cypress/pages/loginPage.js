class LoginPage {
    selectorsList() {
        const selectors = {
        usernameField: "[name='username']", //o atributo pode mudar e desta forma é mais facil manter a automação funcionando
        passwordField: "[name= 'password']",
        loginButton: "[type= 'submit']",
        wrongCredentialAlert: "[role='alert']",
    }
    return selectors
}
    accessLoginPage() {
        cy.visit('/auth/login')
    }
    loginWhitUser(username,password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }
}

export default LoginPage