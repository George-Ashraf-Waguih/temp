class Homepage_PO {

    usernameInput = '#text'
    passwordInput = '#password'
    loginButton = '#login-button'

    enterUsername(username) {
        cy.get(this.usernameInput).type(username)
    }

    enterPassword(password) {
        cy.get(this.passwordInput).type(password)
    }

    clickOnLoginButton() {
        cy.get(this.loginButton).click()
    }

    login(username,password) {
        this.enterUsername(username)
        this.enterPassword(password)
        this.clickOnLoginButton()
    }
}

export default Homepage_PO