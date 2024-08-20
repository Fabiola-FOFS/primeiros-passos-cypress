class myInfoPage {
    selectorsList() {
        const selectors = {
        firstNameField: "[name='firstName']",
        lastNameField: "[name='lastName']",
        genericField: ".oxd-input--active",
        dateField: '[placeholder="yyyy-dd-mm"]',
        dateCloseButton: ".--close",
        genericComboBox: ".oxd-select-text--arrow",
        ItemComboBoxNation: ".oxd-select-dropdown > :nth-child(27)",
        ItemComboBoxMarital:".oxd-select-dropdown > :nth-child(3)",
        submitButton: "[button.orangehrm-left-space.oxd-button.oxd-button--medium.oxd-button--secondary]",
      }
      return selectors

    }
       
   fillPersonalDetails(firstName, lastName) {
    cy.get(this.selectorsList().firstNameField).clear().type(firstName)
    cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    
   
}
   fillEmployeeDetails(employeeID, OtherID,driversLicense,driversLicenseDate) {
    cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeID)
    cy.get(this.selectorsList().genericField).eq(4).clear().type(OtherID)
    cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicense)
    cy.get(this.selectorsList().genericField).eq(6).clear().type(driversLicenseDate)
    cy.get(this.selectorsList().dateCloseButton).click()

}
saveForm() {
    cy.get(this.selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Update')
    cy.get('.oxd-toast-close')
    
    }
    fillStatus() {
        cy.get(this.selectorsList().genericComboBox).should(".oxd-select-text--arrow" )
        cy.get(this.selectorsList().ItemComboBoxNation).click()
        cy.get(this.selectorsList().ItemComboBoxMarital).click()
    
   }

   }


export default myInfoPage