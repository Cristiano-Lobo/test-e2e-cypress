import LoginPage from '../../pages/LoginPage'
import data from '../../fixtures/login.json'

describe('login', () => {

  beforeEach(function () {
    LoginPage.visitLogin()
      cy.fixture('login').then(function(data){
      this.data = data;
    })
   })
  
  it('login com sucesso', () => {
    LoginPage.fillLogin(data.successLogin.email, data.successLogin.password)
    LoginPage.validatedLoginSuccess('test cypress')
  })

  it('login com email inválido', () => {
    LoginPage.fillLogin(data.invalidEmail.email, data.invalidEmail.password)
    LoginPage.validatedLoginInvalid('Invalid email address.')
  })

  it('login com senha inválida', () => {
    LoginPage.fillLogin(data.invalidPassword.email, data.invalidPassword.password)
    LoginPage.validatedLoginInvalid('Invalid password.')
  })

  it('login sem email e senha', () => {
    LoginPage.fillLogin(data.noData.email, data.noData.password)
    LoginPage.validatedLoginInvalid('An email address required.')
  })
})