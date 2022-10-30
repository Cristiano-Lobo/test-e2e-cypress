import { elLogin, elSubmit } from './elements'

class LoginPage {

    visitLogin(){
        cy.visit('?controller=authentication&back=my-account')
    }

    fillLogin(email, password) {
        cy.get(elLogin.email).type(email)
        cy.get(elLogin.password).type(password)
        cy.get(elSubmit.submit).click()
    }

    validatedLoginSuccess(nameAccount){
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}?controller=my-account` )
        cy.contains('span', `${nameAccount}`).should('be.visible')
    }

    validatedLoginInvalid(message){
        cy.contains('li',`${message}`).should('be.visible')
    }
}

export default new LoginPage